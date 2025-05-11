import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const FORMSPREE_FORM_ID = "xblokyzy"; 

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = t('contact.errors.nameRequired');
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t('contact.errors.emailRequired');
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = t('contact.errors.emailInvalid');
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t('contact.errors.messageRequired');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        if (response.ok) {
          setSubmitStatus('success');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      }
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title={t('contact.title')} 
          subtitle={t('contact.subtitle')} 
          align="center"
        />
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              {t('contact.getInTouch')}
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mt-1 mr-4 flex-shrink-0">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                    <Mail size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-medium text-slate-900 dark:text-white mb-1">
                    {t('contact.email')}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    yazid.slimani@ensia.edu.dz
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 flex-shrink-0">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                    <Phone size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-medium text-slate-900 dark:text-white mb-1">
                    {t('contact.phone')}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    +213 (5) 5887-6953
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 flex-shrink-0">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                    <MapPin size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-medium text-slate-900 dark:text-white mb-1">
                    {t('contact.location')}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    {t('contact.locationValue')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white dark:bg-slate-900 rounded-xl shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              {t('contact.sendMessage')}
            </h3>
            
            {submitStatus === 'success' ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900/30 rounded-lg p-4 text-green-800 dark:text-green-300">
                <p className="font-medium">{t('contact.thankYou')}</p>
                <p className="mt-1">{t('contact.willRespond')}</p>
              </div>
            ) : submitStatus === 'error' ? (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/30 rounded-lg p-4 text-red-800 dark:text-red-300">
                <p className="font-medium">{t('contact.failed')}</p>
                <p className="mt-1">{t('contact.tryAgain')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    >
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.name 
                          ? 'border-red-500 dark:border-red-500 focus:border-red-500 dark:focus:border-red-500 focus:ring-red-500 dark:focus:ring-red-500' 
                          : 'border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-500'
                      } bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors`}
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    >
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.email 
                          ? 'border-red-500 dark:border-red-500 focus:border-red-500 dark:focus:border-red-500 focus:ring-red-500 dark:focus:ring-red-500' 
                          : 'border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-500'
                      } bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors`}
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label 
                    htmlFor="subject" 
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                  >
                    {t('contact.form.subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors"
                    placeholder={t('contact.form.subjectPlaceholder')}
                  />
                </div>
                
                <div className="mb-6">
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                  >
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.message 
                        ? 'border-red-500 dark:border-red-500 focus:border-red-500 dark:focus:border-red-500 focus:ring-red-500 dark:focus:ring-red-500' 
                        : 'border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-500'
                    } bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors`}
                    placeholder={t('contact.form.messagePlaceholder')}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 text-white font-medium rounded-lg shadow-sm transition-all 
                    ${isSubmitting 
                      ? 'bg-blue-400 dark:bg-blue-500 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                    }`}
                >
                  <span className="flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t('contact.sending')}
                      </>
                    ) : (
                      <>
                        {t('contact.send')} <Send size={18} className="ml-2" />
                      </>
                    )}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
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

const FORMSPREE_FORM_ID = 'xblokyzy';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = t('contact.errors.nameRequired');
    if (!formData.email.trim()) newErrors.email = t('contact.errors.emailRequired');
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = t('contact.errors.emailInvalid');
    if (!formData.message.trim()) newErrors.message = t('contact.errors.messageRequired');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const inputClass =
    'w-full border-b border-ink-300 bg-transparent py-2.5 text-ink-900 placeholder-ink-400 outline-none transition-colors focus:border-accent dark:border-ink-700 dark:text-white dark:placeholder-ink-500 dark:focus:border-accent-light';
  const labelClass = 'block font-mono text-xs uppercase tracking-label text-ink-400';

  return (
    <section id="contact" className="border-t border-ink-100 bg-white py-24 dark:border-ink-900 dark:bg-ink-950 sm:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <SectionHeading number="04" eyebrow={t('nav.contact')} title={t('contact.title')} subtitle={t('contact.subtitle')} />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          {/* Direct details */}
          <div className="space-y-8">
            <div>
              <span className={labelClass}>{t('contact.email')}</span>
              <a
                href="mailto:yazid.slimani@ensia.edu.dz"
                className="mt-2 inline-flex items-center gap-1 text-lg font-medium text-ink-900 transition-colors hover:text-accent dark:text-white dark:hover:text-accent-light"
              >
                yazid.slimani@ensia.edu.dz
                <ArrowUpRight size={16} />
              </a>
            </div>
            <div>
              <span className={labelClass}>{t('contact.phone')}</span>
              <p className="mt-2 text-lg font-medium text-ink-900 dark:text-white">+213 558 876 953</p>
            </div>
            <div>
              <span className={labelClass}>{t('contact.location')}</span>
              <p className="mt-2 text-lg font-medium text-ink-900 dark:text-white">{t('contact.locationValue')}</p>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitStatus === 'success' ? (
              <div className="border-l-2 border-accent py-2 pl-5 dark:border-accent-light">
                <p className="font-medium text-ink-900 dark:text-white">{t('contact.thankYou')}</p>
                <p className="mt-1 text-sm text-ink-500 dark:text-ink-300">{t('contact.willRespond')}</p>
              </div>
            ) : submitStatus === 'error' ? (
              <div className="border-l-2 border-red-500 py-2 pl-5">
                <p className="font-medium text-ink-900 dark:text-white">{t('contact.failed')}</p>
                <p className="mt-1 text-sm text-ink-500 dark:text-ink-300">{t('contact.tryAgain')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>{t('contact.form.name')}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>{t('contact.form.email')}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className={labelClass}>{t('contact.form.subject')}</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder={t('contact.form.subjectPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>{t('contact.form.message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-ink-900 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-ink-950 dark:hover:bg-accent-light"
                >
                  {isSubmitting ? t('contact.sending') : t('contact.send')}
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

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../components/SectionHeading';
import { ExternalLink, Github, Code2, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const projectsData = [
  {
    id: 1,
    titleKey: 'projects.neural.title',
    descriptionKey: 'projects.neural.description',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Machine Learning', 'Network Security', 'Python', 'XGBoost', 'SQLite'],
    github: 'https://github.com/Ya-zid/WNCSProject',
    isPrivateRepo: false,
    codeSnippet: `
# Hierarchical Classification Model for Network Attack Detection

# Function to monitor and analyze traffic in real-time
def monitor_traffic(traffic_data, binary_model, attack_model, db_connection):
    # Preprocess incoming traffic data
    processed_data, _ = preprocess_data(traffic_data)
    
    # Predict if traffic is malicious
    is_malicious = binary_model.predict(processed_data)
    
    # For malicious traffic, identify attack type
    attack_types = []
    for idx, prediction in enumerate(is_malicious):
        if prediction == 1:  # Malicious
            attack_type = attack_model.predict(processed_data.iloc[idx].values.reshape(1, -1))[0]
            attack_types.append(attack_type)
            
            # Log the detected threat
            log_threat(db_connection, traffic_data.iloc[idx], attack_type)
    
    return attack_types
`
  },
  {
    id: 2,
    titleKey: 'projects.eyecare.title',
    descriptionKey: 'projects.eyecare.description',
    image: '/images/eyecare.png',
    tags: ['React', 'Express.js', 'Tailwind CSS', 'Supabase', 'Express'],
    url: 'https://eye-care-scheduler-easy-cogjzwxs3-ya-zids-projects.vercel.app/',
    github: 'https://github.com/example/eye-care-scheduler',
    isPrivateRepo: true,
    codeSnippet: `
// AppointmentForm.jsx - Component for booking eye care appointments


export default function AppointmentForm({ doctors, availableTimes }) {
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timeSlots, setTimeSlots] = useState([]);
  
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      appointmentDate: format(new Date(), 'yyyy-MM-dd'),
    }
  });
  
  const selectedDoctorId = watch('doctorId');
  const selectedAppointmentDate = watch('appointmentDate');
  
  // Update available times when doctor or date changes
  useEffect(() => {
    if (selectedDoctorId && selectedAppointmentDate) {
      const available = availableTimes.filter(
        slot => slot.doctorId === selectedDoctorId && 
               slot.date === selectedAppointmentDate
      );
      setTimeSlots(available);
    }
  }, [selectedDoctorId, selectedAppointmentDate, availableTimes]);
  
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const result = await createAppointment(data);
      toast.success('Appointment booked successfully!');
      // Show confirmation code to the user
      alert(\`Your appointment has been booked. Your confirmation code is: \${result.confirmationCode}\`);
    } catch (error) {
      toast.error('Failed to book appointment. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
}`
  },
  {
    id: 3,
    titleKey: 'projects.medical.title',
    descriptionKey: 'projects.medical.description',
    image: '/images/ordai.png',
    tags: ['Machine Learning', 'Data Analysis', 'Python', 'Healthcare', 'Association Rules'],
    github: 'https://github.com/Ya-zid/Project-Ketchup-main',
    isPrivateRepo: false,
    codeSnippet: `
# Association Rule Mining for Medicine Prescription Analysis

# Load prescription data
prescriptions_df = pd.read_csv('clean_data/prescriptions.csv')
sold_items_df = pd.read_csv('clean_data/sold_items.csv')


# Generate frequent itemsets
frequent_itemsets = apriori(df_encoded, min_support=0.01, use_colnames=True)

# Generate association rules
rules = association_rules(frequent_itemsets, metric="lift", min_threshold=1.0)

# Sort rules by lift for strong associations
strong_rules = rules.sort_values('lift', ascending=False)

# Filter rules with high confidence
high_confidence_rules = strong_rules[strong_rules['confidence'] > 0.7]

# Function to recommend medicines based on current prescription
def recommend_medicines(current_medicines, rules_df, top_n=5):
    recommendations = []
    
    for med in current_medicines:
        # Find rules where the current medicine is in the antecedent
        matching_rules = rules_df[rules_df['antecedents'].apply(lambda x: med in x)]
        
        # Sort by confidence and get consequents
        for _, rule in matching_rules.sort_values('confidence', ascending=False).head(top_n).iterrows():
            for consequent_med in rule['consequents']:
                if consequent_med not in current_medicines and consequent_med not in recommendations:
                    recommendations.append((consequent_med, rule['confidence'], rule['lift']))
    
    # Sort recommendations by confidence
    recommendations.sort(key=lambda x: (x[1], x[2]), reverse=True)
    return recommendations[:top_n]

# Example usage
sample_prescription = ['Paracetamol', 'Amoxicillin']
recommended_medicines = recommend_medicines(sample_prescription, high_confidence_rules)

print("Based on the prescription containing:", sample_prescription)
print("Recommended additional medicines:")
for med, conf, lift in recommended_medicines:
    print(f"{med} (Confidence: {conf:.2f}, Lift: {lift:.2f})")
`
  },
  {
    id: 4,
    titleKey: 'projects.cyberbullying.title',
    descriptionKey: 'projects.cyberbullying.description',
    image: '/images/clearnetai.png',
    tags: ['NLP', 'Machine Learning', 'Python', 'Text Classification', 'Social Media'],
    github: 'https://github.com/Ya-zid/NLPCyberBullyingProject',
    isPrivateRepo: false,
    codeSnippet: `
# Cyberbullying Detection in Algerian Dialect

# Load the dataset
df = pd.read_csv('data/algerian_cyberbullying_dataset.csv')


# Apply preprocessing
df['clean_text'] = df['text'].apply(preprocess_text)

# Create custom stopwords for Algerian dialect
algerian_stopwords = set(stopwords.words('arabic'))
# Add Algerian dialect specific stopwords
algerian_stopwords.update(['و', 'في', 'من', 'على', 'هذا', 'هذه', 'مع', 'عن', 'انا', 'انت', 'هو', 'هي'])

# Remove stopwords
def remove_stopwords(text):
    words = text.split()
    filtered_words = [word for word in words if word not in algerian_stopwords]
    return ' '.join(filtered_words)

# TF-IDF Vectorization
tfidf_vectorizer = TfidfVectorizer(max_features=5000)
X_train_tfidf = tfidf_vectorizer.fit_transform(X_train)
X_test_tfidf = tfidf_vectorizer.transform(X_test)

# Function to predict if a text contains cyberbullying
def predict_cyberbullying(text, model, vectorizer):
    # Preprocess the text
    processed = preprocess_text(text)
    processed = remove_stopwords(processed)
    
    # Vectorize
    text_tfidf = vectorizer.transform([processed])
    
    # Predict
    prediction = model.predict(text_tfidf)[0]
    probability = model.predict_proba(text_tfidf)[0][1]
    
    return {
        'is_cyberbullying': bool(prediction),
        'confidence': probability
    }
`
  },
  {
    id: 5,
    titleKey: 'projects.semantic.title',
    descriptionKey: 'projects.semantic.description',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&h=720',
    tags: ['NLP', 'BERT', 'Streamlit', 'Search Engine', 'Python'],
    github: 'https://github.com/Ya-zid/SemanticSearchEngine',
    isPrivateRepo: false,
    codeSnippet: `
# Semantic Search Engine with Streamlit Frontend

# Load pre-trained model
@st.cache_resource
def load_model():
    return SentenceTransformer('all-MiniLM-L6-v2')

# Encode documents
@st.cache_data
def encode_documents(model, documents):
    return model.encode(documents)

# Search function
def semantic_search(query, model, doc_embeddings, documents, top_k=5):
    # Encode query
    query_embedding = model.encode([query])[0]
    
    # Calculate similarity
    similarities = cosine_similarity([query_embedding], doc_embeddings)[0]
    
    # Get top k results
    top_indices = similarities.argsort()[-top_k:][::-1]
    
    results = []
    for idx in top_indices:
        results.append({
            'document': documents[idx],
            'similarity': similarities[idx]
        })
    
    return results
`
  },
  {
    id: 6,
    titleKey: 'projects.gostu.title',
    descriptionKey: 'projects.gostu.description',
    image: '/images/gostu.png',
    tags: ['EdTech', 'React', 'Laravel', 'MongoDB', 'WebRTC', 'Subscription Model'],
    url: 'https://gostu.net',
    github: 'https://github.com/example/gostu-platform',
    isPrivateRepo: true,
    codeSnippet: `
// LiveStudyRoom.jsx - Component for real-time collaborative learning sessions

const LiveStudyRoom = () => {
  const { roomId } = useParams();
  const { currentUser } = useAuth();
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef();
  const whiteboardRef = useRef();

  useEffect(() => {
    // Initialize socket connection
    socketRef.current = io(process.env.REACT_APP_SOCKET_SERVER, {
      query: { roomId, userId: currentUser.id }
    });

    // Load room details
    const fetchRoomDetails = async () => {
      try {
        const response = await fetch(\`/api/study-rooms/\${roomId}\`);
        const data = await response.json();
        setRoom(data);
      } catch (error) {
        console.error('Failed to fetch room details:', error);
      }
    };

    fetchRoomDetails();

    // Set up socket event listeners
    socketRef.current.on('connect', () => {
      setIsConnected(true);
      console.log('Connected to study room server');
    });

    socketRef.current.on('user-joined', (user) => {
      setParticipants(prev => [...prev, user]);
    });

    socketRef.current.on('user-left', (userId) => {
      setParticipants(prev => prev.filter(p => p.id !== userId));
    });

    socketRef.current.on('chat-message', (message) => {
      setMessages(prev => [...prev, message]);
    });

    socketRef.current.on('whiteboard-update', (strokeData) => {
      if (whiteboardRef.current) {
        whiteboardRef.current.receiveStroke(strokeData);
      }
    });

    // Join the room
    socketRef.current.emit('join-room', {
      roomId,
      user: {
        id: currentUser.id,
        name: currentUser.displayName,
        avatar: currentUser.photoURL
      }
    });
`
},
  {
    id: 7,
    titleKey: 'projects.base360.title',
    descriptionKey: 'projects.base360.description',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&h=720',
    tags: ['React', 'FastAPI', 'Tailwind CSS', 'Full-Stack', 'SaaS'],
    url: 'https://base360.com',
    github: 'https://github.com/example/base360-portal',
    isPrivateRepo: true,
    codeSnippet: `
// GuestPreCheckIn.tsx - Dynamic pre-check-in flow component

interface PreCheckInStep {
  id: string;
  type: 'id-upload' | 'deposit' | 'waiver' | 'upsell';
  required: boolean;
  config: StepConfiguration;
}

const GuestPreCheckIn: React.FC = () => {
  const { bookingCode } = useParams();
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState<PreCheckInStep[]>([]);
  const [guestData, setGuestData] = useState<GuestData>({});
  const { t, language } = useTranslation();

  useEffect(() => {
    // Fetch property-specific configuration
    fetchPropertyConfig(bookingCode).then(config => {
      const dynamicSteps = buildStepsFromConfig(config);
      setSteps(dynamicSteps);
    });
  }, [bookingCode]);

  const handleStepCompletion = async (stepData: any) => {
    const step = steps[currentStep];

    // Process based on step type
    switch(step.type) {
      case 'id-upload':
        await uploadGuestID(stepData.idImage, bookingCode);
        break;
      case 'deposit':
        await processDeposit(stepData.amount, stepData.paymentMethod);
        break;
      case 'upsell':
        await saveUpsellSelection(stepData.selectedUpsells);
        break;
    }

    // Update guest data and move to next step
    setGuestData(prev => ({ ...prev, [step.id]: stepData }));

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete pre-check-in process
      await completePreCheckIn(bookingCode, guestData);
      navigateToConfirmation();
    }
  };

  // Render current step component dynamically
  const renderStep = () => {
    const step = steps[currentStep];
    const StepComponent = stepComponents[step.type];

    return (
      <StepComponent
        config={step.config}
        onComplete={handleStepCompletion}
        language={language}
      />
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ProgressBar current={currentStep + 1} total={steps.length} />
      <div className="container mx-auto px-4 py-8">
        {renderStep()}
      </div>
    </div>
  );
};
`
},
  {
    id: 8,
    titleKey: 'projects.jade.title',
    descriptionKey: 'projects.jade.description',
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&h=720',
    tags: ['React', 'Node.js', 'PostgreSQL', 'ERP', 'Full-Stack'],
    github: 'https://github.com/example/jade-creation-erp',
    isPrivateRepo: true,
    codeSnippet: `
// ProductionWorkflow.tsx - 7-stage production lifecycle management

interface ProductionStage {
  id: number;
  name: string;
  status: 'pending' | 'in-progress' | 'completed' | 'blocked';
  role: 'manager' | 'laboratory' | 'production' | 'warehouse';
  requiresApproval: boolean;
}

const ProductionWorkflowEngine: React.FC<{ orderId: string }> = ({ orderId }) => {
  const [currentStage, setCurrentStage] = useState<number>(1);
  const [order, setOrder] = useState<ProductionOrder | null>(null);
  const { user } = useAuth();
  const { t } = useTranslation();

  const stages: ProductionStage[] = [
    { id: 1, name: 'planning', status: 'pending', role: 'manager', requiresApproval: false },
    { id: 2, name: 'ingredients', status: 'pending', role: 'laboratory', requiresApproval: false },
    { id: 3, name: 'accessories', status: 'pending', role: 'production', requiresApproval: false },
    { id: 4, name: 'authorization', status: 'pending', role: 'manager', requiresApproval: true },
    { id: 5, name: 'material_transfer', status: 'pending', role: 'warehouse', requiresApproval: false },
    { id: 6, name: 'production', status: 'pending', role: 'production', requiresApproval: false },
    { id: 7, name: 'completion', status: 'pending', role: 'production', requiresApproval: false }
  ];

  const handleStageComplete = async (stageId: number, data: any) => {
    try {
      // Validate user role for current stage
      const stage = stages.find(s => s.id === stageId);
      if (!stage || !hasPermission(user.role, stage.role)) {
        throw new Error('Insufficient permissions');
      }

      // Process stage-specific logic
      switch(stageId) {
        case 2: // Ingredients selection
          await api.post(\`/production/\${orderId}/ingredients\`, {
            formula: data.selectedFormula,
            quantities: calculateQuantities(data.selectedFormula, order.targetQuantity)
          });
          break;

        case 4: // Manager authorization
          await api.post(\`/production/\${orderId}/authorize\`, {
            approved: data.approved,
            comments: data.comments,
            signature: user.digitalSignature
          });
          break;

        case 6: // Production execution
          await api.post(\`/production/\${orderId}/execute\`, {
            actualOutput: data.actualOutput,
            defects: data.defects,
            breakage: data.breakage,
            qualityChecks: data.qualityChecks
          });
          break;
      }

      // Update stage status and advance workflow
      await updateStageStatus(orderId, stageId, 'completed');

      // Send notifications to next stage owner
      await notifyNextStageOwner(orderId, stageId + 1);

      setCurrentStage(stageId + 1);
    } catch (error) {
      notification.error({
        message: t('production.stage.error'),
        description: error.message
      });
    }
  };

  return (
    <div className="production-workflow">
      <Steps current={currentStage - 1}>
        {stages.map(stage => (
          <Step
            key={stage.id}
            title={t(\`production.stages.\${stage.name}\`)}
            status={stage.status}
            icon={getStageIcon(stage)}
          />
        ))}
      </Steps>

      <StageComponent
        stage={stages[currentStage - 1]}
        order={order}
        onComplete={handleStageComplete}
      />
    </div>
  );
};
`
}
];

// Extract unique tags and select only the most important ones
const allTags = [];
const tagCounts = {};

// Count occurrences of each tag
projectsData.forEach(project => {
  project.tags.forEach(tag => {
    tagCounts[tag] = (tagCounts[tag] || 0) + 1;
  });
});

// Add the most common tags (those that appear in at least 2 projects)
// Also add important skill categories (AI, ML, Web Dev)
const importantCategories = ['Machine Learning', 'NLP', 'React', 'Python', 'AI', 'EdTech'];
const commonTags = Object.entries(tagCounts)
  .filter(([tag, count]) => count >= 2 || importantCategories.includes(tag))
  .sort((a, b) => b[1] - a[1])
  .slice(0, 6) // Limit to 6 most common tags
  .map(([tag]) => tag);

const ProjectCard = ({ project }) => {
  const { t } = useLanguage();
  const [showCode, setShowCode] = useState(false);
  const [showGitHubModal, setShowGitHubModal] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleGitHubClick = (e) => {
    e.preventDefault();
    if (project.isPrivateRepo) {
      setShowGitHubModal(true);
    } else {
      window.open(project.github, '_blank');
    }
  };

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="group bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={project.image} 
          alt={t(project.titleKey)} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <div className="flex space-x-3">
            {project.github && (
              <motion.a 
                href="#"
                onClick={handleGitHubClick}
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub Repository"
              >
                <Github size={20} />
              </motion.a>
            )}
            {project.url && (
              <motion.a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={t('projects.viewLive')}
              >
                <ExternalLink size={20} />
              </motion.a>
            )}
            <motion.button
              onClick={() => setShowCode(!showCode)}
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={t('projects.viewCode')}
            >
              <Code2 size={20} />
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* GitHub Private Repository Modal */}
      <AnimatePresence>
        {showGitHubModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowGitHubModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 max-w-md w-full shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t('projects.accessTitle')}</h3>
                <button 
                  onClick={() => setShowGitHubModal(false)}
                  className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <X size={20} className="text-slate-600 dark:text-slate-400" />
                </button>
              </div>
              <div className="mb-6">
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {t('projects.privateRepo')}
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  {t('projects.contactForDetails')}
                </p>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowGitHubModal(false)}
                  className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                >
                  {t('projects.close')}
                </button>
                <a
                  href="#contact"
                  onClick={() => {
                    setShowGitHubModal(false);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {t('projects.contactMe')}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          {t(project.titleKey)}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          {t(project.descriptionKey)}
        </p>
        
        {/* Code Snippet */}
        <AnimatePresence>
          {showCode && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-4 overflow-hidden"
            >
              <SyntaxHighlighter
                language="python"
                style={atomDark}
                customStyle={{
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  margin: '0',
                }}
              >
                {project.codeSnippet}
              </SyntaxHighlighter>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Project Tags - Limit to 4 most important tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags
            .slice(0, 4)  // Only show up to 4 tags per project
            .map(tag => (
              <motion.span 
                key={tag} 
                className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-md"
                whileHover={{ scale: 1.05 }}
              >
                {tag}
              </motion.span>
            ))
          }
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const { t } = useLanguage();
  const [selectedTag, setSelectedTag] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  // Add "All" tag to the beginning
  const displayTags = ['All', ...commonTags];
  
  const filteredProjects = selectedTag === 'All'
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(selectedTag));

return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading 
            title={t('projects.title')} 
            subtitle={t('projects.subtitle')} 
            align="center"
          />
        </motion.div>
        
        {/* Filter Tags */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {displayTags.map(tag => (
            <motion.button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedTag === tag
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tag === 'All' ? t('projects.all') : tag}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
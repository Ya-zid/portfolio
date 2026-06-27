import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.projects': 'Work',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero section
    'hero.location': 'Algiers, Algeria',
    'hero.availability': 'Open to select work',
    'hero.heading': 'Engineer & project lead.',
    'hero.subheading': 'I build products and I run them. Right now that means payment infrastructure for Algeria, as project lead at BOONKA. Before, I shipped full-stack and AI products for startups and teams.',
    'hero.viewProjects': 'View work',
    'hero.contactMe': 'Get in touch',

    'about.title': 'About',
    'about.lead': 'I work across the build and the business: shipping the product, then making it run.',
    'about.viewResume': 'Download CV',
    'about.nowLabel': 'Now',
    'about.now1': 'Project lead, BOONKA',
    'about.now2': 'Payment infrastructure for Algeria',
    'about.basedLabel': 'Based in',
    'about.paragraph1': 'I am an engineer and project lead from Algiers. I trained in AI and data science at ENSIA, and I have spent the last few years building full-stack and machine learning products, then taking ownership of the strategy, the team and the operations around them.',
    'about.paragraph2': 'Today I am project lead at BOONKA, where we are building payment infrastructure for Algeria. Before that, I led startup programs at Algérie Télécom\'s incubator, and I founded and ran Gostu, an education platform that reached thousands of students with no outside funding.',
    'about.paragraph3': 'I care about work that ships and that matters. I am most useful where product, technology and business meet, turning an idea into something real, reliable and used.',

        // Projects section
    'projects.title': 'Selected work',
    'projects.subtitle': 'A mix of products I have built and shipped, from fintech and SaaS to machine learning.',
    'projects.viewLive': 'Live',
    'projects.viewCode': 'Code',
    'projects.private': 'Private',
    'projects.accessTitle': 'Repository Access',
    'projects.privateRepo': 'This project\'s source code is stored in a private organization repository and cannot be publicly shared.',
    'projects.contactForDetails': 'Feel free to contact me for more details about the implementation or to discuss potential collaboration.',
    'projects.close': 'Close',
    'projects.contactMe': 'Contact Me',
    'projects.all': 'All',

    // Project meta (role / type)
    'projects.gostu.meta': 'Founder & product',
    'projects.base360.meta': 'AI engineer',
    'projects.jade.meta': 'Full-stack',
    'projects.neural.meta': 'Machine learning',
    'projects.eyecare.meta': 'Full-stack',
    'projects.cyberbullying.meta': 'NLP',
    'projects.semantic.meta': 'NLP',
    'projects.medical.meta': 'Machine learning',

    // Project descriptions
    'projects.neural.title': 'Neural Network Threat Detection',
    'projects.neural.description': 'An intelligent system for detecting and preventing network attacks using AI and machine learning. The system analyzes traffic logs to identify malicious patterns and proactively detect anomalies in real-time.',
    
    'projects.eyecare.title': 'Eye Care Scheduler Easy',
    'projects.eyecare.description': 'A web-based application that simplifies the process of booking and managing eye care appointments. Features include patient booking, appointment management, and administrative tools for clinic staff.',
    
    'projects.medical.title': 'Medical Prescription Analysis',
    'projects.medical.description': 'A collaborative machine learning project that analyzes medical prescriptions to derive valuable insights. The system identifies medicine associations, analyzes prescription trends, and clusters prescriptions to detect illness types.',
    
    'projects.cyberbullying.title': 'NLP Cyberbullying Detection',
    'projects.cyberbullying.description': 'A natural language processing project that detects cyberbullying in the Algerian dialect. The system leverages machine learning models and data preprocessing methods to analyze text data and classify it as cyberbullying or not.',
    
    'projects.semantic.title': 'Semantic Search Engine',
    'projects.semantic.description': 'A semantic search engine that uses state-of-the-art NLP models like BERT and MiniLM to find relevant results based on meaning rather than keywords. Includes an interactive Streamlit front-end for user queries.',
    
    'projects.gostu.title': 'Gostu.net - Educational Platform',
    'projects.gostu.description': 'An all-in-one educational platform designed to revolutionize the learning experience for students in Algeria. Features live study rooms, interactive forums, comprehensive study materials, and flexible subscription plans to meet diverse student needs.',

    'projects.base360.title': 'Base360 Guest Portal',
    'projects.base360.description': 'Contributed to the development of Base360\'s guest portal system as an AI Engineer, implementing intelligent pre-check-in flows, dynamic upsell features with automated language detection, and comprehensive guest management tools. Built scalable full-stack solutions using React and FastAPI to enhance the hospitality automation experience.',

    'projects.jade.title': 'JADE CRÉATION - ERP System',
    'projects.jade.description': 'Designed and developed a comprehensive Enterprise Resource Planning system for a perfume manufacturing company. Built a full-stack solution managing the complete production lifecycle from raw materials to finished products, implementing sophisticated workflow automation, multi-role authorization systems, and real-time inventory tracking with multi-language support.',
    
    // Experience section
    'experience.title': 'Experience',
    'experience.subtitle': 'Building products, leading teams, and running operations.',
    'experience.keyAchievements': 'Key Achievements',
    'experience.showMore': 'Show More',
    'experience.showLess': 'Show Less',

    // BOONKA Experience
    'experience.boonka.role': 'Project lead',
    'experience.boonka.company': 'BOONKA',
    'experience.boonka.location': 'Algiers, Algeria',
    'experience.boonka.period': 'Dec 2025 – Present',
    'experience.boonka.description': 'Leading product and delivery for BOONKA, a fintech building digital payment infrastructure for Algerian e-commerce.',
    'experience.boonka.achievement1': 'Driving the product from specification toward a planned MVP launch, across product, technology, and operations.',
    'experience.boonka.achievement2': 'Coordinating the team, external partners, and the regulatory steps required to operate as a payment provider.',
    'experience.boonka.achievement3': 'Owning the roadmap and turning strategy into concrete, shippable milestones.',

    // AT Project Manager Experience
    'experience.atpm.role': 'Project Manager - Startup Incubator',
    'experience.atpm.company': 'Algérie Télécom',
    'experience.atpm.location': 'Algiers, Algeria',
    'experience.atpm.period': 'Jun 2025 – Dec 2025',
    'experience.atpm.description': 'Led startup mentorship and incubation programs at Algérie Télécom\'s innovation hub, guiding entrepreneurs through various growth phases, organizing events, and fostering a thriving startup ecosystem.',
    'experience.atpm.achievement1': 'Mentoring and guiding startups through ideation, development, and scaling phases',
    'experience.atpm.achievement2': 'Organizing and coordinating startup events, workshops, and networking sessions',
    'experience.atpm.achievement3': 'Providing strategic guidance and helping startups navigate technical and business challenges',
    'experience.atpm.highlight1': 'Startup ecosystem development and mentorship',
    'experience.atpm.highlight2': 'Event management and strategic consulting',

    // Base360 Experience
    'experience.base360.role': 'AI Engineer',
    'experience.base360.company': 'Base360 / Flex Living',
    'experience.base360.location': 'Remote',
    'experience.base360.period': 'Jun 2025 – Sep 2025',
    'experience.base360.description': 'Contributed as an AI Engineer to Base360\'s guest portal development, focusing on intelligent automation and full-stack solutions for hospitality management systems.',
    'experience.base360.achievement1': 'Developed intelligent pre-check-in flows with automated ID verification and multi-step guest validation processes',
    'experience.base360.achievement2': 'Implemented dynamic upsell system with property-based configuration and automatic multi-language detection using AI',
    'experience.base360.achievement3': 'Built comprehensive guest management tools including house manual builder and step-by-step check-in instructions',
    'experience.base360.highlight1': 'Full-stack development with React, FastAPI, and Tailwind CSS',
    'experience.base360.highlight2': 'Applied AI/ML techniques for language detection and guest experience optimization',

    // NOC Experience
    'experience.noc.role': 'Intern - Network Operations Center (NOC)',
    'experience.noc.company': 'Algérie Télécom',
    'experience.noc.location': 'Ben Aknoun, Algiers',
    'experience.noc.period': 'Sep 2024 – Oct 2024',
    'experience.noc.description': 'As part of the Network Operations Center (NOC), I gained practical exposure to real-time network monitoring, infrastructure maintenance, and incident resolution within Algeria\'s national telecom backbone.',
    'experience.noc.achievement1': 'Collaborated with engineers on troubleshooting voice line, FTTX, and LTE network issues',
    'experience.noc.achievement2': 'Contributed to improvements in an internal PHP-based monitoring system, optimizing performance by 60%',
    'experience.noc.achievement3': 'Engaged in on-site technical interventions and infrastructure documentation',
    'experience.noc.highlight1': 'Hands-on experience with systems like Fiberhome, ZTE, Huawei, and Nokia',
    'experience.noc.highlight2': 'Enhanced communication and stress management under real-time operations',

    // Gostu Experience
    'experience.gostu.role': 'Product Owner (Former CEO)',
    'experience.gostu.company': 'Gostu',
    'experience.gostu.location': 'Algiers, Algeria',
    'experience.gostu.period': 'Jul 2023 – Nov 2024',
    'experience.gostu.description': 'Led the early-stage development of Gostu, a student-oriented platform aiming to improve academic and career navigation across Algeria through peer insights and tools.',
    'experience.gostu.achievement1': 'Reached over 15,000 unique visitors within the first two months of beta launch',
    'experience.gostu.achievement2': 'Built and led a multidisciplinary team to execute on design, development, and marketing',
    'experience.gostu.achievement3': 'Pioneered development of one of Algeria\'s first intelligent AI bots for educational Q&A (unpublished)',
    'experience.gostu.highlight1': 'Achieved strong traction with zero external funding',
    'experience.gostu.highlight2': 'Introduced smart educational assistance tools to the local student ecosystem',

    // Skill&Tell Experience
    'experience.skilltell.role': 'President',
    'experience.skilltell.company': 'Skill&Tell Club – ENSIA',
    'experience.skilltell.location': 'Algiers, Algeria',
    'experience.skilltell.period': '2021 – 2024',
    'experience.skilltell.description': 'As founding president of ENSIA\'s first official student club, I led Skill&Tell for three years, empowering students through events, workshops, and community-building initiatives.',
    'experience.skilltell.achievement1': 'Organized over 20 events including hackathons, talks, and skill-development workshops',
    'experience.skilltell.achievement2': 'Mentored successive generations of student leaders and built strong cross-department collaboration',
    'experience.skilltell.achievement3': 'Fostered a culture of continuous learning and peer support across the campus',
    'experience.skilltell.highlight1': 'Pioneered ENSIA\'s first recognized student club',
    'experience.skilltell.highlight2': 'Recognized for student impact and community engagement by faculty and peers',

        // Skills Section
    'skills.title': 'Capabilities',
    'skills.subtitle': 'The tools I build with, and the areas I lead in.',
    'skills.beginner': 'Beginner',
    'skills.expert': 'Expert',

    // Categories
    'skills.categories.languages': 'Programming Languages',
    'skills.categories.databases': 'Databases',
    'skills.categories.ml': 'Machine Learning',
    'skills.categories.deployment': 'Deployment',
    'skills.categories.web': 'Web Development',
    'skills.categories.other': 'Other Skills',

    // Other Skills
    'skills.other.leadership': 'Leadership & Team Management',
    'skills.other.agile': 'Agile Methodologies',
    'skills.other.systemDesign': 'System Design',
    'skills.other.strategicPlanning': 'Strategic Planning',
    'skills.other.productManagement': 'Product Management',
    'skills.other.businessDevelopment': 'Business Development',
    'skills.other.publicSpeaking': 'Public Speaking',
    'skills.other.technicalWriting': 'Technical Writing',
    'skills.other.problemSolving': 'Problem Solving',
    'skills.other.dataVisualization': 'Data Visualization',
    'skills.other.apiDesign': 'REST API Design',

        // Contact Section
    'contact.title': 'Get in touch',
    'contact.subtitle': 'Have a project, a role, or an idea worth building? I would love to hear about it.',
    'contact.getInTouch': 'Get in Touch',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.locationValue': 'Algiers, Algeria',
    'contact.sendMessage': 'Send a Message',
    'contact.send': 'Send',
    'contact.sending': 'Sending...',
    'contact.thankYou': 'Thank you for reaching out!',
    'contact.willRespond': 'I will get back to you as soon as possible.',
    'contact.failed': 'Oops! Something went wrong.',
    'contact.tryAgain': 'Please try again later.',

    // Form
    'contact.form.name': 'Name',
    'contact.form.namePlaceholder': 'Enter your name',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'Enter your email',
    'contact.form.subject': 'Subject',
    'contact.form.subjectPlaceholder': 'Enter a subject (optional)',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Write your message here',

    // Errors
    'contact.errors.nameRequired': 'Name is required.',
    'contact.errors.emailRequired': 'Email is required.',
    'contact.errors.emailInvalid': 'Please enter a valid email address.',
    'contact.errors.messageRequired': 'Message is required.',


  
},
  fr: {
    // Navigation
    'nav.projects': 'Projets',
    'nav.experience': 'Expérience',
    'nav.skills': 'Compétences',
    'nav.contact': 'Contact',
    
    // Hero section
    'hero.location': 'Alger, Algérie',
    'hero.availability': 'Disponible pour des projets choisis',
    'hero.heading': 'Ingénieur et chef de projet.',
    'hero.subheading': 'Je construis des produits et je les fais tourner. En ce moment, cela veut dire bâtir l\'infrastructure de paiement de l\'Algérie, comme chef de projet de BOONKA. Avant cela, j\'ai livré des produits full-stack et IA pour des startups et des équipes.',
    'hero.viewProjects': 'Voir les projets',
    'hero.contactMe': 'Me contacter',
    

    'about.title': 'À propos',
    'about.lead': 'Je travaille à la fois sur le produit et sur l\'entreprise : livrer le produit, puis le faire fonctionner.',
    'about.viewResume': 'Télécharger le CV',
    'about.nowLabel': 'En ce moment',
    'about.now1': 'Chef de projet, BOONKA',
    'about.now2': 'Infrastructure de paiement pour l\'Algérie',
    'about.basedLabel': 'Basé à',
    'about.paragraph1': 'Je suis ingénieur et chef de projet, basé à Alger. Je me suis formé en IA et en science des données à l\'ENSIA, et j\'ai passé ces dernières années à construire des produits full-stack et de machine learning, puis à prendre en charge la stratégie, l\'équipe et les opérations qui les entourent.',
    'about.paragraph2': 'Aujourd\'hui, je suis chef de projet chez BOONKA, où nous bâtissons l\'infrastructure de paiement de l\'Algérie. Avant cela, j\'ai dirigé des programmes pour startups à l\'incubateur d\'Algérie Télécom, et j\'ai fondé et dirigé Gostu, une plateforme éducative qui a touché des milliers d\'étudiants sans financement externe.',
    'about.paragraph3': 'J\'attache de l\'importance au travail qui aboutit et qui compte. Je suis le plus utile là où le produit, la technologie et le business se rencontrent : transformer une idée en quelque chose de réel, fiable et utilisé.',

    'projects.title': 'Travaux sélectionnés',
    'projects.subtitle': 'Un éventail de produits que j\'ai construits et livrés, de la fintech au SaaS jusqu\'au machine learning.',
    'projects.viewLive': 'En ligne',
    'projects.viewCode': 'Code',
    'projects.private': 'Privé',
    'projects.accessTitle': 'Accès au Dépôt',
    'projects.privateRepo': 'Le code source de ce projet est stocké dans un dépôt privé d\'organisation et ne peut pas être partagé publiquement.',
    'projects.contactForDetails': 'N\'hésitez pas à me contacter pour plus de détails sur l\'implémentation ou pour discuter d\'une éventuelle collaboration.',
    'projects.close': 'Fermer',
    'projects.contactMe': 'Me Contacter',
    'projects.all': 'Tous',

    // Project meta (role / type)
    'projects.gostu.meta': 'Fondateur & produit',
    'projects.base360.meta': 'Ingénieur IA',
    'projects.jade.meta': 'Full-stack',
    'projects.neural.meta': 'Machine learning',
    'projects.eyecare.meta': 'Full-stack',
    'projects.cyberbullying.meta': 'NLP',
    'projects.semantic.meta': 'NLP',
    'projects.medical.meta': 'Machine learning',

    // Project descriptions
    'projects.neural.title': 'Détection de Menaces par Réseau Neuronal',
    'projects.neural.description': 'Un système intelligent pour détecter et prévenir les attaques réseau en utilisant l\'IA et l\'apprentissage automatique. Le système analyse les journaux de trafic pour identifier les modèles malveillants et détecter de manière proactive les anomalies en temps réel.',
    
    'projects.eyecare.title': 'Eye Care Scheduler Easy',
    'projects.eyecare.description': 'Une application web qui simplifie le processus de réservation et de gestion des rendez-vous pour les soins oculaires. Les fonctionnalités incluent la réservation des patients, la gestion des rendez-vous et des outils administratifs pour le personnel de la clinique.',
    
    'projects.medical.title': 'Analyse de Prescriptions Médicales',
    'projects.medical.description': 'Un projet collaboratif d\'apprentissage automatique qui analyse les prescriptions médicales pour en tirer des informations précieuses. Le système identifie les associations de médicaments, analyse les tendances de prescription et regroupe les prescriptions pour détecter les types de maladies.',
    
    'projects.cyberbullying.title': 'Détection de Cyberharcèlement par NLP',
    'projects.cyberbullying.description': 'Un projet de traitement du langage naturel qui détecte le cyberharcèlement dans le dialecte algérien. Le système utilise des modèles d\'apprentissage automatique et des méthodes de prétraitement des données pour analyser les données textuelles et les classer comme cyberharcèlement ou non.',
    
    'projects.semantic.title': 'Moteur de Recherche Sémantique',
    'projects.semantic.description': 'Un moteur de recherche sémantique qui utilise des modèles NLP de pointe comme BERT et MiniLM pour trouver des résultats pertinents basés sur le sens plutôt que sur les mots-clés. Comprend une interface Streamlit interactive pour les requêtes des utilisateurs.',
    
    'projects.gostu.title': 'Gostu.net - Plateforme Éducative',
    'projects.gostu.description': 'Une plateforme éducative tout-en-un conçue pour révolutionner l\'expérience d\'apprentissage des étudiants en Algérie. Comprend des salles d\'étude en direct, des forums interactifs, des supports d\'étude complets et des plans d\'abonnement flexibles pour répondre aux divers besoins des étudiants.',

    'projects.base360.title': 'Portail Client Base360',
    'projects.base360.description': 'Contributeur au développement du système de portail client de Base360 en tant qu\'Ingénieur IA, implémentant des flux de pré-enregistrement intelligents, des fonctionnalités de vente incitative dynamique avec détection automatique de langue, et des outils complets de gestion des clients. Création de solutions full-stack évolutives avec React et FastAPI pour améliorer l\'expérience d\'automatisation de l\'hospitalité.',

    'projects.jade.title': 'JADE CRÉATION - Système ERP',
    'projects.jade.description': 'Conception et développement d\'un système complet de planification des ressources d\'entreprise pour une société de fabrication de parfums. Création d\'une solution full-stack gérant le cycle de production complet des matières premières aux produits finis, implémentant une automatisation sophistiquée des flux de travail, des systèmes d\'autorisation multi-rôles et un suivi d\'inventaire en temps réel avec support multilingue.',

// Experience section
    'experience.title': 'Expérience',
    'experience.subtitle': 'Construire des produits, diriger des équipes et gérer les opérations.',
    'experience.keyAchievements': 'Réalisations Clés',
    'experience.showMore': 'Voir Plus',
    'experience.showLess': 'Voir Moins',

    // BOONKA Experience
    'experience.boonka.role': 'Chef de projet',
    'experience.boonka.company': 'BOONKA',
    'experience.boonka.location': 'Alger, Algérie',
    'experience.boonka.period': 'Déc 2025 – Présent',
    'experience.boonka.description': 'Direction du produit et de la livraison pour BOONKA, une fintech qui construit l\'infrastructure de paiement numérique pour l\'e-commerce algérien.',
    'experience.boonka.achievement1': 'Pilotage du produit, de la spécification jusqu\'au lancement prévu du MVP, à travers le produit, la technologie et les opérations.',
    'experience.boonka.achievement2': 'Coordination de l\'équipe, des partenaires externes et des étapes réglementaires nécessaires pour opérer comme prestataire de paiement.',
    'experience.boonka.achievement3': 'Prise en charge de la feuille de route et transformation de la stratégie en jalons concrets et livrables.',

    // AT Project Manager Experience
    'experience.atpm.role': 'Chef de Projet - Incubateur de Startups',
    'experience.atpm.company': 'Algérie Télécom',
    'experience.atpm.location': 'Alger, Algérie',
    'experience.atpm.period': 'Juin 2025 – Déc 2025',
    'experience.atpm.description': 'Direction des programmes de mentorat et d\'incubation de startups au hub d\'innovation d\'Algérie Télécom, guidant les entrepreneurs à travers diverses phases de croissance, organisant des événements et favorisant un écosystème de startups florissant.',
    'experience.atpm.achievement1': 'Mentorat et accompagnement de startups à travers les phases d\'idéation, de développement et d\'échelle',
    'experience.atpm.achievement2': 'Organisation et coordination d\'événements, d\'ateliers et de sessions de réseautage pour startups',
    'experience.atpm.achievement3': 'Fourniture d\'orientations stratégiques et aide aux startups pour naviguer les défis techniques et commerciaux',
    'experience.atpm.highlight1': 'Développement d\'écosystème de startups et mentorat',
    'experience.atpm.highlight2': 'Gestion d\'événements et conseil stratégique',

    // Base360 Experience
    'experience.base360.role': 'Ingénieur IA',
    'experience.base360.company': 'Base360 / Flex Living',
    'experience.base360.location': 'À distance',
    'experience.base360.period': 'Juin 2025 – Sep 2025',
    'experience.base360.description': 'Contributeur en tant qu\'Ingénieur IA au développement du portail client de Base360, en se concentrant sur l\'automatisation intelligente et les solutions full-stack pour les systèmes de gestion hôtelière.',
    'experience.base360.achievement1': 'Développement de flux de pré-enregistrement intelligents avec vérification automatique d\'identité et processus de validation des clients en plusieurs étapes',
    'experience.base360.achievement2': 'Implémentation d\'un système de vente incitative dynamique avec configuration basée sur la propriété et détection automatique multilingue utilisant l\'IA',
    'experience.base360.achievement3': 'Création d\'outils complets de gestion des clients incluant un générateur de manuel de maison et des instructions d\'enregistrement étape par étape',
    'experience.base360.highlight1': 'Développement full-stack avec React, FastAPI et Tailwind CSS',
    'experience.base360.highlight2': 'Application de techniques IA/ML pour la détection de langue et l\'optimisation de l\'expérience client',

    // NOC Experience
    'experience.noc.role': 'Stagiaire - Centre d\'Opérations Réseau (NOC)',
    'experience.noc.company': 'Algérie Télécom',
    'experience.noc.location': 'Ben Aknoun, Alger',
    'experience.noc.period': 'Sep 2024 – Oct 2024',
    'experience.noc.description': 'En tant que membre du Centre d\'Opérations Réseau (NOC), j\'ai acquis une exposition pratique à la surveillance en temps réel des réseaux, à la maintenance des infrastructures et à la résolution d\'incidents au sein du réseau de télécommunications national algérien.',
    'experience.noc.achievement1': 'Collaboration avec des ingénieurs sur le dépannage des lignes vocales, des réseaux FTTX et LTE',
    'experience.noc.achievement2': 'Contribution à l\'amélioration d\'un système de surveillance interne basé sur PHP, optimisant les performances de 60%',
    'experience.noc.achievement3': 'Participation à des interventions techniques sur site et à la documentation des infrastructures',
    'experience.noc.highlight1': 'Expérience pratique avec des systèmes comme Fiberhome, ZTE, Huawei et Nokia',
    'experience.noc.highlight2': 'Communication améliorée et gestion du stress dans des opérations en temps réel',

    // Gostu Experience
    'experience.gostu.role': 'Product Owner (Ancien PDG)',
    'experience.gostu.company': 'Gostu',
    'experience.gostu.location': 'Alger, Algérie',
    'experience.gostu.period': 'Juil 2023 – Nov 2024',
    'experience.gostu.description': 'J\'ai dirigé le développement initial de Gostu, une plateforme orientée étudiants visant à améliorer la navigation académique et professionnelle à travers l\'Algérie grâce à des informations et des outils fournis par les pairs.',
    'experience.gostu.achievement1': 'Plus de 15 000 visiteurs uniques au cours des deux premiers mois de lancement bêta',
    'experience.gostu.achievement2': 'Constitution et direction d\'une équipe multidisciplinaire pour exécuter la conception, le développement et le marketing',
    'experience.gostu.achievement3': 'Développement pionnier de l\'un des premiers robots IA intelligents d\'Algérie pour les questions-réponses éducatives (non publié)',
    'experience.gostu.highlight1': 'Fort engagement obtenu sans financement externe',
    'experience.gostu.highlight2': 'Introduction d\'outils d\'assistance éducative intelligents dans l\'écosystème étudiant local',

    // Skill&Tell Experience
    'experience.skilltell.role': 'Président',
    'experience.skilltell.company': 'Club Skill&Tell – ENSIA',
    'experience.skilltell.location': 'Alger, Algérie',
    'experience.skilltell.period': '2021 – 2024',
    'experience.skilltell.description': 'En tant que président fondateur du premier club étudiant officiel de l\'ENSIA, j\'ai dirigé Skill&Tell pendant trois ans, responsabilisant les étudiants à travers des événements, des ateliers et des initiatives de renforcement communautaire.',
    'experience.skilltell.achievement1': 'Organisation de plus de 20 événements, dont des hackathons, des conférences et des ateliers de développement de compétences',
    'experience.skilltell.achievement2': 'Mentorat de générations successives de leaders étudiants et établissement d\'une forte collaboration interdépartementale',
    'experience.skilltell.achievement3': 'Promotion d\'une culture d\'apprentissage continu et de soutien par les pairs sur tout le campus',
    'experience.skilltell.highlight1': 'Premier club étudiant reconnu de l\'ENSIA',
    'experience.skilltell.highlight2': 'Reconnu pour l\'impact sur les étudiants et l\'engagement communautaire par la faculté et les pairs',
 
        // Skills Section
    'skills.title': 'Compétences',
    'skills.subtitle': 'Les outils avec lesquels je construis, et les domaines où je dirige.',
    'skills.beginner': 'Débutant',
    'skills.expert': 'Expert',

    // Categories
    'skills.categories.languages': 'Langages de Programmation',
    'skills.categories.databases': 'Bases de Données',
    'skills.categories.ml': 'Apprentissage Automatique',
    'skills.categories.deployment': 'Déploiement',
    'skills.categories.web': 'Développement Web',
    'skills.categories.other': 'Autres Compétences',

    // Other Skills
    'skills.other.leadership': 'Leadership & Gestion d\'Équipe',
    'skills.other.agile': 'Méthodologies Agiles',
    'skills.other.systemDesign': 'Conception de Systèmes',
    'skills.other.strategicPlanning': 'Planification Stratégique',
    'skills.other.productManagement': 'Gestion de Produit',
    'skills.other.businessDevelopment': 'Développement Commercial',
    'skills.other.publicSpeaking': 'Prise de Parole en Public',
    'skills.other.technicalWriting': 'Rédaction Technique',
    'skills.other.problemSolving': 'Résolution de Problèmes',
    'skills.other.dataVisualization': 'Visualisation de Données',
    'skills.other.apiDesign': 'Conception d\'API REST',

        // Contact Section
    'contact.title': 'Me contacter',
    'contact.subtitle': 'Un projet, un poste ou une idée à construire ? J\'aimerais en entendre parler.',
    'contact.getInTouch': 'Entrer en contact',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.location': 'Lieu',
    'contact.locationValue': 'Alger, Algérie',
    'contact.sendMessage': 'Envoyer un Message',
    'contact.send': 'Envoyer',
    'contact.sending': 'Envoi en cours...',
    'contact.thankYou': 'Merci pour votre message !',
    'contact.willRespond': 'Je vous répondrai dès que possible.',
    'contact.failed': 'Oups ! Une erreur s’est produite.',
    'contact.tryAgain': 'Veuillez réessayer plus tard.',

    // Form
    'contact.form.name': 'Nom',
    'contact.form.namePlaceholder': 'Entrez votre nom',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'Entrez votre email',
    'contact.form.subject': 'Sujet',
    'contact.form.subjectPlaceholder': 'Entrez un sujet (facultatif)',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Écrivez votre message ici',

    // Errors
    'contact.errors.nameRequired': 'Le nom est requis.',
    'contact.errors.emailRequired': 'L’email est requis.',
    'contact.errors.emailInvalid': 'Veuillez entrer une adresse email valide.',
    'contact.errors.messageRequired': 'Le message est requis.',


  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prevLanguage => prevLanguage === 'en' ? 'fr' : 'en');
  };
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
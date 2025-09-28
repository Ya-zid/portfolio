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
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero section
    'hero.hello': 'Hello, I\'m',
    'hero.building': 'Building intelligent systems.',
    'hero.specializing': 'Specializing in AI and ML.',
    'hero.viewProjects': 'View Projects',
    'hero.contactMe': 'Contact Me',

    'about.title': 'About Me',
    'about.subtitle': 'Curiosity-driven. Detail-focused. Future-oriented.',
    'about.status': 'Eager to collaborate',
    'about.viewResume': 'VIEW RESUME',
    'about.paragraph1': 'Hello, I\'m Yazid — an AI engineer-in-training At ENSIA Algiers, with hands-on experience in telecom systems, full-stack development, and machine learning. I\'m driven by a deep interest in building intelligent, scalable solutions that bridge theory and real-world application.',
    'about.paragraph2': 'My mindset is a mix of precision and big-picture thinking. I\'m deeply curious, always learning, and drawn to projects that require both analytical depth and strategic foresight. Whether exploring AI, cognitive science, or design, I value thoughtful execution and purpose-driven work.',
    'about.paragraph3': 'Currently, I\'m pursuing international research opportunities and collaborations in AI. My program at ENSIA has equipped me with a strong foundation in AI, data science, and problem-solving.',
    'about.paragraph4': 'I\'m motivated by impact — not just building things that work, but building things that matter. If that resonates with you, we\'re already aligned.',

        // Projects section
    'projects.title': 'Projects',
    'projects.subtitle': 'Explore some of my recent work in AI and machine learning.',
    'projects.viewLive': 'Live Demo',
    'projects.viewCode': 'View Code',
    'projects.accessTitle': 'Repository Access',
    'projects.privateRepo': 'This project\'s source code is stored in a private organization repository and cannot be publicly shared.',
    'projects.contactForDetails': 'Feel free to contact me for more details about the implementation or to discuss potential collaboration.',
    'projects.close': 'Close',
    'projects.contactMe': 'Contact Me',
    'projects.all': 'All',
    
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
    'experience.subtitle': 'My professional journey in AI and machine learning.',
    'experience.keyAchievements': 'Key Achievements',
    'experience.showMore': 'Show More',
    'experience.showLess': 'Show Less',

    // AT Project Manager Experience
    'experience.atpm.role': 'Project Manager - Startup Incubator',
    'experience.atpm.company': 'Algérie Télécom',
    'experience.atpm.location': 'Algiers, Algeria',
    'experience.atpm.period': 'Jun 2025 – Present',
    'experience.atpm.description': 'Leading startup mentorship and incubation programs at Algérie Télécom\'s innovation hub, guiding entrepreneurs through various growth phases, organizing events, and fostering a thriving startup ecosystem.',
    'experience.atpm.achievement1': 'Mentoring and guiding startups through ideation, development, and scaling phases',
    'experience.atpm.achievement2': 'Organizing and coordinating startup events, workshops, and networking sessions',
    'experience.atpm.achievement3': 'Providing strategic guidance and helping startups navigate technical and business challenges',
    'experience.atpm.highlight1': 'Startup ecosystem development and mentorship',
    'experience.atpm.highlight2': 'Event management and strategic consulting',

    // Base360 Experience
    'experience.base360.role': 'AI Engineer',
    'experience.base360.company': 'Base360 / Flex Living',
    'experience.base360.location': 'Remote',
    'experience.base360.period': 'Jun 2024 – Sep 2024',
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
    'skills.title': 'Skills & Technologies',
    'skills.subtitle': 'My technical toolkit and areas of expertise.',
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
    'contact.title': 'Contact Me',
    'contact.subtitle': 'Let’s get in touch — I’d love to hear from you.',
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
    'hero.hello': 'Bonjour, je suis',
    'hero.building': 'Je développe des systèmes intelligents.',
    'hero.specializing': 'Spécialisé en IA et ML.',
    'hero.viewProjects': 'Voir les Projets',
    'hero.contactMe': 'Me Contacter',
    

    'about.title': 'À Propos de Moi',
    'about.subtitle': 'Motivé par la curiosité. Attaché aux détails. Orienté vers l\'avenir.',
    'about.status': 'Enthousiaste pour collaborer',
    'about.viewResume': 'VOIR CV',
    'about.paragraph1': 'Bonjour, je suis Yazid — un ingénieur en IA en formation à l\'ENSIA Alger, avec une expérience pratique dans les systèmes de télécommunication, le développement full-stack et l\'apprentissage automatique. Je suis animé par un profond intérêt pour la création de solutions intelligentes et évolutives qui relient la théorie et l\'application réelle.',
    'about.paragraph2': 'Mon état d\'esprit est un mélange de précision et de vision globale. Je suis profondément curieux, toujours en apprentissage, et attiré par des projets qui nécessitent à la fois une profondeur analytique et une vision stratégique. Que ce soit en explorant l\'IA, les sciences cognitives ou le design, je valorise l\'exécution réfléchie et le travail axé sur l\'objectif.',
    'about.paragraph3': 'Actuellement, je recherche des opportunités de recherche et de collaboration internationales en IA. Mon programme à l\'ENSIA m\'a doté d\'une solide formation en IA, en science des données et en résolution de problèmes.',
    'about.paragraph4': 'Je suis motivé par l\'impact — pas seulement construire des choses qui fonctionnent, mais construire des choses qui comptent. Si cela vous parle, nous sommes déjà alignés.',

    'projects.title': 'Projets',
    'projects.subtitle': 'Découvrez certains de mes travaux récents en IA et en apprentissage automatique.',
    'projects.viewLive': 'Démo en Direct',
    'projects.viewCode': 'Voir le Code',
    'projects.accessTitle': 'Accès au Dépôt',
    'projects.privateRepo': 'Le code source de ce projet est stocké dans un dépôt privé d\'organisation et ne peut pas être partagé publiquement.',
    'projects.contactForDetails': 'N\'hésitez pas à me contacter pour plus de détails sur l\'implémentation ou pour discuter d\'une éventuelle collaboration.',
    'projects.close': 'Fermer',
    'projects.contactMe': 'Me Contacter',
    'projects.all': 'Tous',
    
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
    'experience.subtitle': 'Mon parcours professionnel en IA et en apprentissage automatique.',
    'experience.keyAchievements': 'Réalisations Clés',
    'experience.showMore': 'Voir Plus',
    'experience.showLess': 'Voir Moins',

    // AT Project Manager Experience
    'experience.atpm.role': 'Chef de Projet - Incubateur de Startups',
    'experience.atpm.company': 'Algérie Télécom',
    'experience.atpm.location': 'Alger, Algérie',
    'experience.atpm.period': 'Juin 2025 – Présent',
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
    'experience.base360.period': 'Juin 2024 – Sep 2024',
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
    'skills.title': 'Compétences & Technologies',
    'skills.subtitle': 'Mon ensemble d\'outils techniques et domaines d\'expertise.',
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
    'contact.title': 'Me Contacter',
    'contact.subtitle': 'Entrons en contact — j’aimerais avoir de vos nouvelles.',
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
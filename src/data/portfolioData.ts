export interface Project {
  id: string;
  title: string;
  category: "mobile" | "web" | "saas" | "ai";
  categoryLabel: string;
  statusBadge?: string;
  role: string;
  summary: string;
  description: string;
  technologies: string[];
  features: string[];
  metrics?: string;
  playStoreUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  focusses: string[];
  finalYearProject: {
    title: string;
    details: string[];
  };
  coursework: string[];
}

export const portfolioData = {
  personal: {
    name: "Abdul Smeed Ahmad",
    monogram: "ASA",
    headline: "Software Engineer & Flutter / Full-Stack Developer",
    location: "Rawalpindi, Pakistan",
    email: "ahmedsmeed3@gmail.com",
    phone: "+92-341-4630055",
    phoneClean: "+923414630055",
    linkedin: "https://linkedin.com/in/abdulsmeed",
    linkedinHandle: "in/abdulsmeed",
    github: "https://github.com/abdulsmeed",
    availability: "Available for Full-time Roles & High-Impact Contracts",
    resumeDownloadUrl: "/Abdul_Smeed_Ahmad_Resume.pdf",
    profileImage: "/images/profile.jpg",
    roles: [
      "Software Engineer",
      "Flutter & Mobile Architect",
      "Full-Stack Next.js Developer",
      "Cross-Platform Systems Engineer",
      "Applied AI & Cloud Solutions Specialist"
    ],
    valueProposition:
      "Results-driven Software Engineer with proven experience designing and delivering scalable cross-platform mobile and full-stack web applications using Flutter, Dart, Next.js, and Clean Architecture principles.",
    secondaryProposition:
      "Advanced practitioner of modern AI development platforms (Antigravity AI, LLM prompt engineering, and automated code refactoring) to optimize system architecture, generate robust APIs, and accelerate end-to-end software delivery."
  },

  stats: [
    { value: "3+", label: "Years Experience", description: "Mobile & Full-Stack delivery" },
    { value: "5+", label: "Enterprise Systems", description: "Production apps, CRMs & SaaS" },
    { value: "60 FPS", label: "Smooth Performance", description: "Frame-rate & memory profiling" },
    { value: "100%", label: "Clean Architecture", description: "Maintainable MVVM & modular patterns" }
  ],

  about: {
    paragraphs: [
      "I am a passionate Software Engineer specializing in architecting resilient, production-ready mobile and web applications. My engineering philosophy revolves around Clean Architecture, strict separation of concerns, and reusable widget paradigms that guarantee both code readability and high-throughput reliability.",
      "Throughout my tenure at Techozon Software House and enterprise client engagements, I have spearheaded the end-to-end delivery of complex multi-tier platforms—including real-time vehicle rental fleet management, modern Next.js CRM remodeling, and cloud-synced POS inventory systems.",
      "As an advanced practitioner of modern AI development platforms such as Antigravity AI, I integrate structured prompt engineering and automated code refactoring workflows to rapidly model schemas, test high-complexity API contracts, and cut turnaround times on complex engineering challenges without sacrificing architectural purity."
    ],
    pillars: [
      {
        title: "Clean Architecture & Scalability",
        description: "Strict domain-driven layering, robust state machines with Bloc/Riverpod, and clean abstraction separating UI, business logic, and data sources."
      },
      {
        title: "Full-Stack SaaS & Mobile Mastery",
        description: "Unified web and cross-platform apps built with Flutter and Next.js, backed by scalable Supabase, Firebase, MySQL, and PostgreSQL backends."
      },
      {
        title: "Mission-Critical Integrations",
        description: "End-to-end multi-currency Stripe payment processing, Google Maps live fleet dispatch telemetry, and low-latency real-time synchronization."
      },
      {
        title: "AI-Augmented Engineering Speed",
        description: "Utilizing Antigravity AI and LLM workflows to automate boilerplate generation, optimize complex SQL joins, and expedite bug resolution."
      }
    ]
  },

  skillCategories: [
    {
      id: "core-mobile",
      title: "Core & Mobile Frameworks",
      icon: "smartphone",
      description: "Cross-platform mobile application development and clean design patterns",
      skills: [
        { name: "Flutter", highlight: true },
        { name: "Dart", highlight: true },
        { name: "Clean Architecture", highlight: true },
        { name: "MVVM Pattern" },
        { name: "Widget Lifecycle" },
        { name: "Python" },
        { name: "C / C++" },
        { name: "Java" }
      ]
    },
    {
      id: "state-management",
      title: "State Management & Architecture",
      icon: "layers",
      description: "Predictable state containers, reactivity, and modular lifecycle control",
      skills: [
        { name: "Bloc Pattern", highlight: true },
        { name: "Provider", highlight: true },
        { name: "Riverpod", highlight: true },
        { name: "GetX" },
        { name: "Repository Pattern" },
        { name: "Dependency Injection" }
      ]
    },
    {
      id: "frontend-web",
      title: "Frontend & Full-Stack Web",
      icon: "layout",
      description: "Modern SSR/SSG web interfaces, React ecosystems, and performant styling",
      skills: [
        { name: "Next.js (App Router)", highlight: true },
        { name: "React", highlight: true },
        { name: "TypeScript" },
        { name: "JavaScript (ES6+)" },
        { name: "HTML5 / Vanilla CSS" },
        { name: "Responsive UI/UX" }
      ]
    },
    {
      id: "backend-cloud",
      title: "Backend, Cloud & Databases",
      icon: "database",
      description: "Distributed database schemas, cloud infrastructure, and low-latency storage",
      skills: [
        { name: "Supabase", highlight: true },
        { name: "Firebase (Auth, Firestore, RTDB)", highlight: true },
        { name: "Cloud Storage" },
        { name: "MySQL", highlight: true },
        { name: "PostgreSQL" },
        { name: "SQLite (Local Persistence)" },
        { name: "Python Flask" }
      ]
    },
    {
      id: "apis-integrations",
      title: "APIs & Third-Party Services",
      icon: "globe",
      description: "Enterprise payment gateways, geospatial tracking, and RESTful architectures",
      skills: [
        { name: "RESTful API Design & Integration", highlight: true },
        { name: "Stripe SDK & Payment Gateways", highlight: true },
        { name: "Google Maps Platform", highlight: true },
        { name: "Live Geolocation Services" },
        { name: "Dynamic Routing & Geofencing" }
      ]
    },
    {
      id: "ai-devops",
      title: "AI Tools & DevOps Practices",
      icon: "cpu",
      description: "Modern AI acceleration, computer vision models, and delivery pipelines",
      skills: [
        { name: "Antigravity AI Platform", highlight: true },
        { name: "LLM Prompt Engineering", highlight: true },
        { name: "Computer Vision ML (ASL & BSL)", highlight: true },
        { name: "Git & Version Control" },
        { name: "Postman API Testing" },
        { name: "CI/CD Pipelines" },
        { name: "Performance & Memory Profiling" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "atv-buggy-ecosystem",
      title: "ATV & Buggy Rental Ecosystem",
      category: "mobile",
      categoryLabel: "Flutter Mobile & Cloud",
      statusBadge: "Production Suite",
      role: "Lead Mobile Architect",
      summary: "End-to-end multi-platform fleet and rental management ecosystem composed of Consumer Booking App, Supervisor Fleet App, and Business CRM.",
      description:
        "Engineered a production rental ecosystem serving high-volume vehicle reservations and fleet operations. Built consumer booking flows with digital waivers, real-time vehicle slot reservations, and Stripe payment processing. Included dedicated supervisor tooling for live GPS fleet dispatching and a comprehensive internal operations CRM.",
      technologies: ["Flutter", "Dart", "Firebase", "Stripe SDK", "Google Maps Platform", "Clean Architecture"],
      features: [
        "Consumer App: Seamless booking flows, vehicle slot reservation, digital liability waivers, and Stripe checkout.",
        "Supervisor App: Real-time fleet oversight, supervisor-to-vehicle dispatching, and dynamic geofencing.",
        "Business CRM: Sales lead tracking, automated customer appointment scheduling, and revenue analytics."
      ],
      metrics: "Multi-currency Stripe payments & real-time GPS fleet tracking",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.atvandbuggy.app.tourist&pcampaignid=web_share",
      featured: true
    },
    {
      id: "rikskampen-fitness-crm",
      title: "Rikskampen X – Fitness Platform & CRM",
      category: "web",
      categoryLabel: "Next.js Full-Stack",
      statusBadge: "Active Architecture Overhaul",
      role: "Full-Stack System Architect",
      summary: "Architectural rewrite of an enterprise legacy fitness CRM into a high-performance modern Next.js and MySQL web application.",
      description:
        "Leading the complete architectural rewrite of an existing legacy fitness CRM from scratch. Designing normalized relational schemas and high-throughput RESTful APIs to track participant fitness milestones, competition pipelines, coaching schedules, and member accounts with real-time analytics.",
      technologies: ["Next.js (App Router)", "MySQL", "REST APIs", "Antigravity AI", "TypeScript", "Vanilla CSS"],
      features: [
        "Relational schema design optimized for high-volume participant fitness metrics and competition pipelines.",
        "Accelerated full-stack component scaffolding, complex SQL joins, and automated test data with Antigravity AI.",
        "Dynamic member dashboards and administrative management consoles for real-time engagement and reporting."
      ],
      metrics: "Next-gen architectural rewrite from legacy system",
      featured: true
    },
    {
      id: "hybrid-saas-pos",
      title: "Hybrid SaaS & POS Inventory System",
      category: "saas",
      categoryLabel: "Cloud SaaS & POS",
      statusBadge: "Multi-Tenant Platform",
      role: "Lead Cloud & SaaS Engineer",
      summary: "Multi-tenant cloud platform unified with an offline-ready POS frontend for retail stock control and capacity-dynamic appointment booking.",
      description:
        "Architected a scalable multi-tenant SaaS application leveraging Next.js and Supabase. Engineered dual inventory logic supporting unit-count retail goods alongside capacity-dynamic appointment slots. Built and exposed high-throughput Client RESTful APIs for programmatic third-party inventory synchronization.",
      technologies: ["Next.js", "Supabase", "PostgreSQL", "Client REST APIs", "Antigravity AI"],
      features: [
        "Dual inventory logic reconciling physical unit-count merchandise with time-constrained booking appointments.",
        "High-throughput Client REST APIs allowing external client systems to manage, query, and sync data programmatically.",
        "AI-driven schema modeling, API contract testing, and simulated edge-case stress test workflows."
      ],
      metrics: "Unified multi-tenant cloud backend with offline-ready POS",
      featured: true
    },
    {
      id: "jtime-workplace",
      title: "Jtime – Workplace & Productivity App",
      category: "mobile",
      categoryLabel: "Flutter & SQLite",
      statusBadge: "Local-First Mobile",
      role: "Mobile App Developer",
      summary: "Automated work-hour tracking, milestone logging, and task management mobile application with local-first SQLite persistence.",
      description:
        "Developed a responsive cross-platform productivity and time-logging application in Flutter. Implemented local-first SQLite persistence for uninterrupted offline tracking and engineered responsive layouts ensuring consistent rendering across diverse phone and tablet viewports.",
      technologies: ["Flutter", "Dart", "REST APIs", "SQLite", "Bloc Pattern"],
      features: [
        "Automated work-hour tracking and real-time milestone productivity logging.",
        "Zero-latency local-first data persistence using optimized SQLite queries.",
        "Adaptive UI supporting diverse screen viewports across Android and iOS devices."
      ],
      metrics: "Zero-latency local SQLite persistence with tablet support",
      featured: false
    },
    {
      id: "sign-language-ai",
      title: "Sign Language Translation App (FYP)",
      category: "ai",
      categoryLabel: "Computer Vision & AI",
      statusBadge: "ML Research & Mobile",
      role: "ML & Mobile Lead (Team of 4)",
      summary: "Real-time American & British Sign Language (ASL & BSL) recognition mobile application powered by Computer Vision and Flask REST endpoints.",
      description:
        "Researched, trained, and fine-tuned Computer Vision ML models for real-time translation of American Sign Language (ASL) and British Sign Language (BSL) for deaf and mute individuals. Built Python Flask REST APIs serving low-latency inference endpoints integrated directly into a responsive Flutter mobile client.",
      technologies: ["Computer Vision ML", "Python Flask", "Flutter", "Dart", "RESTful APIs"],
      features: [
        "Trained & fine-tuned CV models for real-time recognition of both ASL and BSL gesture sets.",
        "Low-latency Python Flask REST API server delivering real-time inference predictions.",
        "Clean, accessible Flutter interface with instant visual and audio transcription assistance."
      ],
      metrics: "Real-time low-latency ASL/BSL inference on mobile",
      featured: false
    }
  ] as Project[],

  experience: [
    {
      company: "Techozon Software House",
      role: "Flutter Developer",
      location: "Rawalpindi, Pakistan",
      period: "Jul 2023 – Present",
      type: "Full-Time",
      description:
        "Architecting and delivering production-ready mobile and web applications with strict adherence to Clean Architecture, robust Firebase infrastructure, and automated AI engineering workflows.",
      highlights: [
        "Architected and deployed production-ready mobile and web applications using Flutter, strictly adhering to Clean Architecture and reusable widget paradigms.",
        "Implemented full-lifecycle Firebase services (Authentication, Firestore, Realtime Database, Cloud Storage) supporting low-latency data synchronization for operational workflows.",
        "Integrated Stripe SDK for end-to-end multi-currency payment processing, booking confirmations, and payout tracking.",
        "Embedded Google Maps API and location-based services for live fleet dispatching, dynamic routing, and geofencing.",
        "Leveraged Antigravity AI alongside structured prompt engineering workflows to rapidly generate boilerplate code, test complex API payloads, and expedite bug resolution.",
        "Optimized app rendering performance, frame rates (60 FPS), and state rebuilds, significantly reducing memory consumption and improving API response caching across production apps."
      ],
      technologies: [
        "Flutter",
        "Dart",
        "Clean Architecture",
        "Firebase",
        "Stripe SDK",
        "Google Maps Platform",
        "Antigravity AI",
        "REST APIs"
      ]
    }
  ] as ExperienceItem[],

  education: [
    {
      degree: "Bachelor of Science in Computer Science (BSCS)",
      institution: "PMAS-Arid Agriculture University",
      location: "Rawalpindi, Pakistan",
      period: "2019 – 2023",
      focusses: ["Software Engineering", "Mobile Architecture", "Applied Machine Learning"],
      finalYearProject: {
        title: "Sign Language Translation & Communication App for Deaf & Mute Individuals",
        details: [
          "Led a team of 4 to build an accessible communication bridge for speech and hearing-impaired communities.",
          "Trained & fine-tuned Computer Vision ML models for real-time recognition of American Sign Language (ASL) and British Sign Language (BSL).",
          "Built Python Flask REST APIs to serve low-latency inference endpoints and integrated model predictions directly into a responsive Flutter mobile client."
        ]
      },
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (C++, Java)",
        "Database Management Systems",
        "Software Engineering Principles",
        "Computer Networks"
      ]
    }
  ] as EducationItem[]
};

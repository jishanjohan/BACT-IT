import type { ServiceInterest } from "@/lib/inquiries";

export interface ServiceItem {
  title: string;
  description: string;
  features: string[];
}

export interface ServiceInfo {
  name: ServiceInterest;
  title: string;
  slug: string;
  short: string;
  description: string;
  items: ServiceItem[];
  customization: string;
  image: string;
  imageAlt: string;
}

export const services: ServiceInfo[] = [
  {
    name: "Software Solutions",
    title: "Software Solutions with AI Integration",
    slug: "software-solutions",
    short: "Develop and implement software that streamlines business operations and improves productivity.",
    description:
      "Develop and implement software that streamlines business operations and improves productivity — with AI integration available across every system.",
    items: [
      {
        title: "ERP, HRM and Hospital Management Systems (HMS)",
        description: "Core systems that bring departments, people and patient services onto one connected platform.",
        features: [
          "ERP: finance, procurement, sales, inventory and multi-branch reporting",
          "HRM: employee records, attendance, leave, payroll and performance",
          "HMS: patient registration, appointments, billing, pharmacy and lab records",
          "Role-based access and management dashboards",
        ],
      },
      {
        title: "Inventory and e-commerce platforms",
        description: "Track stock and sell online from one connected system.",
        features: [
          "Real-time stock levels across warehouses and outlets",
          "Purchase orders, suppliers and low-stock alerts",
          "Online storefront with product catalog, cart and checkout",
          "Order, delivery and returns management",
        ],
      },
      {
        title: "Learning Management Systems (LMS)",
        description: "Deliver and manage learning for institutions and corporate teams.",
        features: [
          "Course creation with video, documents and quizzes",
          "Enrolment, attendance and progress tracking",
          "Assessments, grading and certificates",
          "Support for live classes and online learning",
        ],
      },
      {
        title: "Accounting, CRM and POS applications",
        description: "Everyday applications for finance, customer relationships and sales counters.",
        features: [
          "Accounting: ledgers, invoices, expenses, VAT/tax and financial statements",
          "CRM: leads, customer history, follow-ups and sales pipeline",
          "POS: fast billing, barcode scanning, receipts and daily sales reports",
          "Data sync between POS, inventory and accounts",
        ],
      },
      {
        title: "Custom software and business process automation",
        description: "Software built around your process when off-the-shelf tools don't fit.",
        features: [
          "Requirement analysis and workflow mapping",
          "Web and mobile applications built to your process",
          "Automated approvals, notifications and reports",
          "Integration with your existing systems through APIs",
        ],
      },
    ],
    customization:
      "Every system is configured around your workflows, user roles, branding and reporting needs. Any of them can be extended with AI features such as smart reports, chatbots and predictive analytics.",
    image: "https://images.pexels.com/photos/4955393/pexels-photo-4955393.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Programming code on a developer's screen",
  },
  {
    name: "ICT Infrastructure",
    title: "ICT Infrastructure Solutions",
    slug: "ict-infrastructure",
    short: "Design, deploy and support reliable IT infrastructure for modern organizations.",
    description: "Design, deploy and support reliable IT infrastructure for modern organizations.",
    items: [
      {
        title: "Enterprise networking and structured cabling",
        description: "Fast, organized and secure connectivity across your offices.",
        features: [
          "LAN, WAN and Wi-Fi network design",
          "Structured copper and fiber cabling",
          "Switching, routing and firewall setup",
          "Network documentation and labelling",
        ],
      },
      {
        title: "Data center design and implementation",
        description: "Purpose-built server rooms and data centers.",
        features: [
          "Rack, power and cooling planning",
          "UPS, backup power and environmental monitoring",
          "Physical security and access control",
          "Migration and commissioning",
        ],
      },
      {
        title: "Servers, storage and virtualization",
        description: "Compute and storage capacity that grows with you.",
        features: [
          "Server sizing, supply and installation",
          "NAS/SAN storage and backup solutions",
          "Virtualization to consolidate workloads",
          "High availability and disaster recovery planning",
        ],
      },
      {
        title: "IP surveillance and CCTV solutions",
        description: "Monitor your premises with modern IP camera systems.",
        features: [
          "Site survey and camera placement planning",
          "IP cameras, NVRs and video storage",
          "Remote and mobile viewing",
          "Integration with access control",
        ],
      },
      {
        title: "Infrastructure maintenance and technical support",
        description: "Keep systems running smoothly after go-live.",
        features: [
          "Preventive maintenance visits",
          "Help desk and on-site troubleshooting",
          "Hardware and software updates",
          "Support plans matched to your operations",
        ],
      },
    ],
    customization:
      "Every infrastructure project starts with a site assessment, so the design, equipment and support plan match your premises, users and budget.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=75",
    imageAlt: "Enterprise server racks in a data center",
  },
  {
    name: "Cybersecurity",
    title: "Cybersecurity Solutions",
    slug: "cybersecurity",
    short: "Protect business systems, networks, devices and sensitive information against evolving cyber threats.",
    description: "Protect business systems, networks, devices and sensitive information against evolving cyber threats.",
    items: [
      {
        title: "Network and information security",
        description: "Safeguard your network perimeter and business data.",
        features: [
          "Firewall, VPN and secure remote access",
          "Network segmentation and access policies",
          "Data protection and backup policies",
          "Security policy development",
        ],
      },
      {
        title: "Endpoint security and protection",
        description: "Protect every laptop, desktop and server.",
        features: [
          "Antivirus and EDR deployment",
          "Device encryption and patch management",
          "USB and application control",
          "Centralized endpoint monitoring",
        ],
      },
      {
        title: "Application security and vulnerability assessment",
        description: "Find weaknesses before attackers do.",
        features: [
          "Vulnerability scanning of systems and web applications",
          "Penetration testing",
          "Secure code and configuration review",
          "Prioritized remediation reports",
        ],
      },
      {
        title: "Zero Trust security architecture",
        description: "Never trust, always verify — for every user and device.",
        features: [
          "Identity management and multi-factor authentication",
          "Least-privilege access controls",
          "Micro-segmentation",
          "Continuous verification",
        ],
      },
      {
        title: "Security Operations Center (SOC) solutions",
        description: "Centralized visibility into security events.",
        features: [
          "SIEM setup and log collection",
          "Threat detection rules and alerts",
          "SOC design and process setup",
          "Security dashboards and reporting",
        ],
      },
      {
        title: "Security audits, monitoring and incident response",
        description: "Know where you stand and be ready when something happens.",
        features: [
          "Security and compliance audits",
          "Ongoing monitoring and reviews",
          "Incident response planning",
          "Investigation and recovery support",
        ],
      },
    ],
    customization:
      "Security measures are chosen based on your risk profile, industry requirements and existing systems, so protection fits the way your organization works.",
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=800&q=75",
    imageAlt: "Padlock on a computer keyboard representing cybersecurity",
  },
  {
    name: "AI Solutions",
    title: "AI-Driven Solutions",
    slug: "ai-solutions",
    short: "Integrate AI into business processes and build infrastructure to support intelligent applications.",
    description: "Integrate AI into business processes and build infrastructure to support intelligent applications.",
    items: [
      {
        title: "AI integration with ERP, HRM and other business systems",
        description: "Add intelligence to the systems you already use.",
        features: [
          "Smart search and natural-language questions on business data",
          "Automated document and data-entry processing",
          "AI-assisted reports and summaries",
          "Recommendations inside existing workflows",
        ],
      },
      {
        title: "AI agents, chatbots and workflow automation",
        description: "Assistants that answer questions, take action and automate routine work.",
        features: [
          "Customer and employee chatbots for web and messaging",
          "AI agents that complete multi-step tasks",
          "Automated approvals, routing and notifications",
          "Human review and control where it matters",
        ],
      },
      {
        title: "AI infrastructure planning and setup",
        description: "The right foundation for AI workloads.",
        features: [
          "GPU server and cloud resource planning",
          "Data pipeline and storage setup",
          "Model hosting environments",
          "Cost and performance optimization",
        ],
      },
      {
        title: "Business intelligence and predictive analytics",
        description: "Turn data into decisions.",
        features: [
          "Interactive dashboards and KPIs",
          "Sales, demand and trend forecasting",
          "Automated scheduled reports",
          "Data cleaning and modelling",
        ],
      },
      {
        title: "Private AI deployments and enterprise AI solutions",
        description: "AI that keeps your data in-house.",
        features: [
          "On-premise or private-cloud AI models",
          "Data privacy and access controls",
          "Integration with internal knowledge bases",
          "Governance and usage policies",
        ],
      },
    ],
    customization:
      "AI use cases are identified together with your team, then built around your data, systems, permissions and business rules.",
    image: "https://images.pexels.com/photos/8386437/pexels-photo-8386437.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Robotic hand touching a digital AI network",
  },
  {
    name: "IT Training",
    title: "Professional IT Training",
    slug: "it-training",
    short: "Build practical technical skills through structured learning and career-oriented training programs.",
    description: "Build practical technical skills through structured learning and career-oriented training programs.",
    items: [
      { title: "Networking", description: "Foundation to professional networking skills.", features: ["CompTIA A+", "CCNA", "CCNP"] },
      { title: "Server Administration", description: "Manage and maintain business servers.", features: ["Windows Server", "Linux"] },
      { title: "Cybersecurity", description: "Practical security skills for modern threats.", features: ["CEH", "CHFI", "SOC training"] },
      {
        title: "Advanced Certifications",
        description: "Preparation for senior security and audit credentials.",
        features: ["CISSP", "CISA", "CISM", "Lead Auditor preparation"],
      },
      { title: "Data Analytics", description: "Analyze and visualize business data.", features: ["Power BI", "Advanced Excel", "VBA", "Big Data"] },
      { title: "Programming", description: "Write software in widely used languages.", features: ["C", "C++", "Python", "Java"] },
      { title: "Database Administration", description: "Learn to manage and maintain business databases.", features: [] },
      { title: "Cloud", description: "Work with the leading cloud platforms.", features: ["Azure", "AWS", "GCP"] },
    ],
    customization:
      "Training is available for individuals and as programs for organizations that want to upskill their teams. Ask us for current schedules and course details.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=75",
    imageAlt: "Students attending a professional IT training class",
  },
  {
    name: "Study Abroad",
    title: "Study Abroad Consultancy",
    slug: "study-abroad",
    short: "Support for students exploring international education opportunities.",
    description:
      "Support students exploring international education opportunities through guidance tailored to their academic background and goals.",
    items: [
      {
        title: "Study opportunities in Canada",
        description: "Explore programs and institutions in Canada.",
        features: ["Options based on your academic background", "General entry expectations", "Planning your timeline"],
      },
      {
        title: "University options across European countries",
        description: "Discover study options across Europe.",
        features: ["Compare options across European countries", "Programs aligned with your field", "Help choosing a destination"],
      },
      {
        title: "Program and university selection",
        description: "Find programs that fit your profile and goals.",
        features: ["Profile and interest review", "Shortlisting programs and universities", "Clear comparisons to help you decide"],
      },
      {
        title: "Application and document guidance",
        description: "Prepare a complete, well-organized application.",
        features: ["Document checklist", "Statement of purpose and CV guidance", "Application form support"],
      },
      {
        title: "Admission and visa application support",
        description: "Guidance through the admission and visa steps.",
        features: ["Admission follow-up guidance", "Visa application document preparation", "Interview preparation guidance"],
      },
    ],
    customization:
      "Guidance is tailored to each student's academic background and goals. Admission and visa decisions are made by the relevant institutions and authorities.",
    image: "https://images.unsplash.com/photo-1788436793629-d1d5abf44692?auto=format&fit=crop&w=800&q=75",
    imageAlt: "Graduate walking through a university courtyard abroad",
  },
  {
    name: "Digital Marketing",
    title: "Digital Marketing Solutions",
    slug: "digital-marketing",
    short: "Strengthen your online presence and connect with your target audience.",
    description: "Strengthen your online presence and connect with your target audience.",
    items: [
      {
        title: "Business website design and development",
        description: "A professional website that represents your brand.",
        features: [
          "Responsive design for mobile and desktop",
          "Content management so you can update pages",
          "Contact forms and enquiry tools",
          "Fast, secure hosting setup",
        ],
      },
      {
        title: "Website maintenance and management",
        description: "Keep your website secure and up to date.",
        features: ["Updates, backups and security patches", "Content updates", "Performance and uptime monitoring"],
      },
      {
        title: "Social media page management",
        description: "A consistent, active presence on social platforms.",
        features: ["Page setup and branding", "Content calendar and posting", "Community engagement and reporting"],
      },
      {
        title: "Digital content and campaign management",
        description: "Content and campaigns that reach the right audience.",
        features: ["Graphics, video and copywriting", "Paid ad campaign setup and management", "Campaign performance reports"],
      },
      {
        title: "Search engine optimization (SEO)",
        description: "Help customers find you on search engines.",
        features: ["Keyword research", "On-page and technical SEO", "Local search optimization", "Ranking and traffic reports"],
      },
    ],
    customization:
      "Plans are built around your brand, audience, goals and budget, with reporting so you can see what's working.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=75",
    imageAlt: "Laptop showing digital marketing analytics dashboard",
  },
];

export const industries = [
  { name: "Government & Public Sector", description: "Enterprise applications, infrastructure and secure digital services." },
  { name: "Corporate & Enterprise", description: "ERP, automation, AI integration and IT infrastructure." },
  { name: "Healthcare & Education", description: "Hospital systems, learning platforms and training." },
  { name: "Retail & E-commerce", description: "Online stores, inventory, POS and business analytics." },
  { name: "IT & Telecom", description: "Networking, data centers, security and monitoring." },
  { name: "SMEs & Startups", description: "Affordable digital solutions designed to scale." },
];

export const differentiators = [
  {
    title: "Integrated technology services",
    description: "Software, infrastructure, cybersecurity, AI and training under one technology partner.",
  },
  {
    title: "Security-focused approach",
    description: "Solutions designed with reliability, security and business continuity in mind.",
  },
  {
    title: "Customized solutions",
    description: "Technology selected and developed around each client's specific needs.",
  },
  {
    title: "Scalable and future-ready",
    description: "Flexible solutions that can evolve with your organization's requirements.",
  },
];

export interface TrainingTrack {
  title: string;
  heading: string;
  courses: string;
  why: string;
  learn: string[];
  benefits: string[];
  careers: string[];
  keywords: string[];
}

export const trainingTracks: TrainingTrack[] = [
  {
    title: "Networking",
    heading: "Networking Training — CompTIA A+, CCNA & CCNP",
    courses: "CompTIA A+ · CCNA · CCNP",
    why: "Every organization runs on a network. Networking skills are the foundation of an IT career and are in steady demand at banks, telecoms, ISPs and enterprises in Bangladesh and abroad.",
    learn: [
      "Computer hardware, operating systems and troubleshooting (CompTIA A+)",
      "IP addressing, subnetting, switching and routing fundamentals",
      "VLANs, OSPF, EIGRP, BGP and wireless networking",
      "Network security basics, ACLs and VPNs",
      "Hands-on labs with Cisco routers, switches and simulators",
    ],
    benefits: [
      "Globally recognized vendor certifications",
      "Practical lab-based learning from industry practitioners",
      "A clear path from beginner to professional level",
    ],
    careers: ["Network Engineer", "IT Support Specialist", "System & Network Administrator", "NOC Engineer", "Network Consultant"],
    keywords: ["CCNA training in Dhaka", "CCNP course Bangladesh", "CompTIA A+ course", "networking course Bangladesh", "Cisco certification training"],
  },
  {
    title: "Server Administration",
    heading: "Server Administration Training — Windows Server & Linux",
    courses: "Windows Server · Linux",
    why: "Servers host the email, files, applications and websites businesses depend on. Skilled administrators keep them secure, fast and available, which makes this a reliable, well-paid specialism.",
    learn: [
      "Installing and configuring Windows Server and Linux distributions",
      "Active Directory, DNS, DHCP, Group Policy and file services",
      "Linux command line, users, permissions and shell scripting",
      "Web, mail and database server setup",
      "Backup, monitoring, patching and virtualization basics",
    ],
    benefits: [
      "Skills used daily in data centers and corporate IT",
      "Preparation for Microsoft and Linux certifications",
      "Hands-on practice on real server environments",
    ],
    careers: ["System Administrator", "Windows Server Administrator", "Linux Administrator", "Infrastructure Engineer", "Data Center Engineer"],
    keywords: ["Windows Server training Bangladesh", "Linux course in Dhaka", "RHCSA preparation", "server administration course", "system admin training"],
  },
  {
    title: "Cybersecurity",
    heading: "Cybersecurity Training — CEH, CHFI & SOC Analyst",
    courses: "CEH · CHFI · SOC training",
    why: "Cyber attacks on banks, government and businesses are rising every year, and skilled security professionals are in short supply. Cybersecurity is one of the fastest-growing IT careers worldwide.",
    learn: [
      "Ethical hacking methods, reconnaissance and vulnerability assessment",
      "Penetration testing of networks, web applications and systems",
      "Digital forensics and incident investigation (CHFI)",
      "Security Operations Center (SOC) monitoring with SIEM tools",
      "Threat detection, incident response and security best practices",
    ],
    benefits: [
      "Industry-recognized EC-Council certification preparation",
      "Practical labs that simulate real attacks and defenses",
      "Training aligned with the needs of banks and government agencies",
    ],
    careers: ["Ethical Hacker / Penetration Tester", "SOC Analyst", "Cybersecurity Analyst", "Digital Forensic Investigator", "Security Consultant"],
    keywords: ["CEH course in Bangladesh", "ethical hacking training Dhaka", "cybersecurity course Bangladesh", "SOC analyst training", "CHFI certification"],
  },
  {
    title: "Advanced Certifications",
    heading: "Advanced Security & Audit Certifications — CISSP, CISA, CISM & Lead Auditor",
    courses: "CISSP · CISA · CISM · Lead Auditor preparation",
    why: "Senior security and audit credentials open the door to leadership roles. They are highly valued by banks, regulators, auditors and multinational companies, and command premium salaries.",
    learn: [
      "Security and risk management, governance and compliance",
      "Information systems audit, control and assurance (CISA)",
      "Information security program management (CISM)",
      "Security architecture, asset security and operations (CISSP)",
      "ISO 27001 Lead Auditor principles and audit practice",
    ],
    benefits: [
      "Structured exam preparation with practice questions",
      "Guidance from experienced security and audit professionals",
      "Credentials recognized by employers worldwide",
    ],
    careers: ["Chief Information Security Officer (CISO)", "IT Auditor", "Information Security Manager", "Risk & Compliance Manager", "ISO 27001 Lead Auditor"],
    keywords: ["CISSP training Bangladesh", "CISA course Dhaka", "CISM certification", "ISO 27001 Lead Auditor training", "IT audit course"],
  },
  {
    title: "Data Analytics",
    heading: "Data Analytics Training — Power BI, Advanced Excel, VBA & Big Data",
    courses: "Power BI · Advanced Excel · VBA · Big Data",
    why: "Businesses make better decisions with data. Analytics skills help professionals in any field, from finance and sales to HR, turn raw numbers into clear reports and insights.",
    learn: [
      "Advanced Excel formulas, pivot tables and data cleaning",
      "Automating repetitive tasks with Excel VBA macros",
      "Building interactive Power BI dashboards and reports",
      "Data modeling, DAX and data visualization best practices",
      "Introduction to Big Data concepts and tools",
    ],
    benefits: [
      "Skills you can apply at work immediately",
      "Useful for both IT and non-IT professionals",
      "Project-based learning with real business datasets",
    ],
    careers: ["Data Analyst", "Business Intelligence (BI) Analyst", "MIS Executive", "Reporting Analyst", "Business Analyst"],
    keywords: ["Power BI course in Bangladesh", "Advanced Excel training Dhaka", "Excel VBA course", "data analytics course Bangladesh", "Big Data training"],
  },
  {
    title: "Programming",
    heading: "Programming Courses — C, C++, Python & Java",
    courses: "C · C++ · Python · Java",
    why: "Programming is the core skill behind software, apps, automation and AI. Learning to code opens careers in software development, freelancing and technology startups.",
    learn: [
      "Programming fundamentals, logic and problem solving",
      "Data structures, algorithms and object-oriented programming",
      "Python for automation, data and AI foundations",
      "Java for enterprise and application development",
      "Writing, testing and debugging real projects",
    ],
    benefits: [
      "Beginner-friendly with a step-by-step learning path",
      "Hands-on coding exercises and mini projects",
      "A strong base for software, AI and freelancing careers",
    ],
    careers: ["Software Developer", "Python Developer", "Java Developer", "Automation Engineer", "Freelance Programmer"],
    keywords: ["Python course in Dhaka", "Java training Bangladesh", "C++ programming course", "programming course for beginners", "learn coding Bangladesh"],
  },
  {
    title: "Database Administration",
    heading: "Database Administration Training",
    courses: "Database Administration",
    why: "Every application stores its data in a database. Database administrators keep that data secure, available and fast, a critical role in banks, hospitals, telecoms and software companies.",
    learn: [
      "Relational database concepts and SQL",
      "Installing, configuring and managing database servers",
      "Users, roles, security and access control",
      "Backup, recovery and high availability",
      "Performance monitoring and query tuning",
    ],
    benefits: [
      "Specialist skills with consistent employer demand",
      "Practical labs on real database environments",
      "Preparation for vendor database certifications",
    ],
    careers: ["Database Administrator (DBA)", "SQL Developer", "Database Engineer", "Data Engineer", "Application Support Engineer"],
    keywords: ["database administration course Bangladesh", "SQL training Dhaka", "Oracle DBA training", "SQL Server course", "DBA course"],
  },
  {
    title: "Cloud",
    heading: "Cloud Computing Training — Microsoft Azure, AWS & Google Cloud",
    courses: "Azure · AWS · GCP",
    why: "Organizations are moving their systems to the cloud. Cloud skills are among the most in-demand and best-paid in IT, both locally and for remote work with international companies.",
    learn: [
      "Cloud computing concepts and service models (IaaS, PaaS, SaaS)",
      "Compute, storage, networking and identity on Azure, AWS and GCP",
      "Deploying and managing virtual machines and applications",
      "Cloud security, cost management and best practices",
      "Preparation for associate-level cloud certifications",
    ],
    benefits: [
      "Training across the three leading cloud platforms",
      "Hands-on labs in real cloud consoles",
      "Skills suited to remote and international jobs",
    ],
    careers: ["Cloud Engineer", "Cloud Administrator", "DevOps Engineer", "Solutions Architect", "Cloud Support Engineer"],
    keywords: ["AWS training in Bangladesh", "Azure certification course Dhaka", "Google Cloud training", "cloud computing course Bangladesh", "DevOps course"],
  },
];

export const contactDetails = {
  email: "info@bactit.com",
  website: "www.bactit.com",
};

export const offices = [
  { country: "Bangladesh", address: "CNS Tower, Panthapath, Dhaka, Bangladesh", phone: "+8801990-937354", tel: "+8801990937354" },
  { country: "USA", address: "9741 80 Street, Ozone Park, NY 11416, USA", phone: "+1 (917) 880 5320", tel: "+19178805320" },
  { country: "Australia", address: "20 King Edward St, Rockdale, Sydney, Australia", phone: "+61 480 580 007", tel: "+61480580007" },
];

export const whatsapp = {
  display: "+8801990-937354",
  href: "https://wa.me/8801990937354",
};

export const socialLinks = {
  facebook: "https://www.facebook.com/BactITofBangladesh",
  instagram: "https://www.instagram.com/bact_it",
  linkedin: "https://www.linkedin.com/company/bact-it/",
};

export const clients = [
  { name: "Bangladesh Army", short: "BA" },
  { name: "Bangladesh Police", short: "BP" },
  { name: "Banking sector", short: "BK" },
  { name: "BTRC", short: "BTRC" },
];

export const partners = ["Microsoft", "Dell", "Dahua"];

export const testimonials = [
  { quote: "Bact IT Training Institute is a good place to learn IT skills.", name: "MD. Billal", role: "Bear My Brand" },
  {
    quote: "They went above and beyond to ensure my project was successful. Highly recommend.",
    name: "Mr. Rifat",
    role: "Student",
  },
  {
    quote: "We got a good service and excellent training from here. Hope it will continue.",
    name: "Mr. Sami",
    role: "Digital Marketing Expert",
  },
  {
    quote:
      "I had a great experience with Bact IT Training Institute. The service was quick, and the billing was transparent. I have no doubt that I will come back again. Highly recommend.",
    name: "Bact IT learner",
    role: "Training participant",
  },
];

export const jobPlacement = {
  title: "Job Placement",
  description:
    "Acquire exclusive opportunities to work in local and international marketplaces as an expert freelancer. BACT IT creates opportunities by adding value to your career.",
};

export interface Leader {
  name: string;
  role: string;
  initials: string;
  bio: string[];
  message: string[];
  link?: { label: string; href: string };
}

export const leadership: Leader[] = [
  {
    name: "Zaynal Abedin",
    role: "Chairman, Bact IT",
    initials: "ZA",
    bio: [],
    message: [
      "At BACT IT of Bangladesh, we believe in building a smarter, more empowered future through technology. When we started this journey, our vision was simple—to make advanced IT education accessible to everyone, regardless of background or location.",
      "Today, that vision drives us to deliver globally competitive training in programming, cybersecurity, data analytics, and beyond—blending practical skills with real-world solutions. Our mission is not just to train individuals but to ignite innovation, foster digital confidence, and create opportunities in every corner of Bangladesh.",
      "Whether you are a student, a professional, or an organization—BACT IT is here to walk with you into the future of technology.",
    ],
  },
  {
    name: "Aminur Rahman",
    role: "Vice-Chairman & Country Head (USA)",
    initials: "AR",
    bio: [
      "Aminur Rahman serves as the Co-Chairman and Country Head (USA) at BACT IT of Bangladesh. Currently based in the United States, he is a seasoned IT professional working with a renowned global tech company. With years of experience in the international technology landscape, he brings strategic insight, leadership, and global perspective to our team.",
      "Despite his professional commitments abroad, Mr. Rahman remains deeply committed to the development of Bangladesh’s tech talent. His involvement with BACT IT reflects his passion for bridging global expertise with local potential. Through his guidance, we continue to align our training standards with international benchmarks and expand our reach beyond borders.",
    ],
    message: [
      "With my experience working in a globally recognized IT company in the United States, I have seen how rapidly the tech industry is evolving—and how crucial it is to build a workforce that is skilled, adaptable, and globally competitive. That is exactly what BACT IT stands for.",
      "My role with BACT IT allows me to give back to the country by helping create opportunities, share global insights, and ensure that our training and services meet international standards. Together, we aim to empower individuals, strengthen our IT ecosystem, and make Bangladesh a strong name in the global tech arena.",
    ],
  },
  {
    name: "Jubayer Ahmed Hridoy",
    role: "Co-Founder, BACT IT",
    initials: "JH",
    bio: [
      "Jubayer Ahmed Hridoy, Co-Founder of BACT IT of Bangladesh, is a brilliant mind shaped by science, driven by purpose, and guided by vision. A meritorious student from a science background, Hridoy is currently pursuing his higher studies in IT Management at the University of Technology Sydney (UTS), Australia.",
      "Even while studying abroad, his heart remains connected to Bangladesh. As an emerging entrepreneur, he co-founded BACT IT with a mission to bridge the gap between global tech standards and local talent. His dedication, curiosity, and leadership continue to inspire our journey toward making world-class IT education accessible for all.",
    ],
    message: [
      "At BACT IT, our vision is to provide industry-relevant, globally-aligned IT education and services that enable our students and clients to compete confidently on both local and international platforms. We are committed to building a learning environment that encourages innovation, practical skills, and lifelong learning.",
      "I believe that with the right guidance, access, and mindset, anyone in Bangladesh can become a leader in the digital world—and BACT IT is here to make that vision a reality.",
    ],
    link: { label: "Facebook profile", href: "https://www.facebook.com/jubayer.ahmed.hridoy.22397" },
  },
  {
    name: "Toufiqur Rahaman Jishan",
    role: "Founder & CEO, BACT IT",
    initials: "TJ",
    bio: [],
    message: [],
    link: { label: "LinkedIn profile", href: "https://www.linkedin.com/in/md-toufiqur-rahaman-jishan-125794ab/" },
  },
];

export const companyFullName = "Business Application & Communication Technology";

export const flagshipProduct = {
  shortName: "BAIDA",
  name: "Business Automation & AI Integration For Data Analytics",
  description:
    "BACT IT helps organizations move beyond disconnected software systems by connecting existing business applications and turning operational data into actionable intelligence.",
  capabilities: [
    {
      title: "API & Integration Gateway",
      description:
        "Connect ERP, HRM, HRIS, inventory, e-commerce and other applications through secure APIs and integration workflows.",
    },
    {
      title: "Unified Data Layer",
      description:
        "Bring data from multiple systems together in a structured environment for reporting, analytics and intelligent decision support.",
    },
    {
      title: "Business Intelligence",
      description: "Transform operational data into interactive dashboards, KPIs, reports and management insights.",
    },
    {
      title: "AI-Powered Analytics",
      description:
        "Use AI to identify patterns, generate insights, support forecasting and improve business decision-making.",
    },
    {
      title: "Intelligent Automation",
      description: "Automate repetitive workflows, notifications, reports and cross-system business processes.",
    },
    {
      title: "Controlled AI Agents",
      description:
        "Enable governed AI-assisted workflows while maintaining business rules, permissions and security controls.",
    },
  ],
};

export interface FinderResult {
  title: string;
  description: string;
  exploreTo: string;
  exploreLabel: string;
  service: ServiceInterest;
}

export interface FinderGoal {
  id: string;
  label: string;
  result: FinderResult;
}

export interface FinderAudience {
  id: string;
  label: string;
  hint: string;
  question: string;
  goals: FinderGoal[];
}

const serviceResult = (slug: string): FinderResult => {
  const service = services.find((item) => item.slug === slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  return {
    title: service.title,
    description: service.short,
    exploreTo: `/services/${service.slug}`,
    exploreLabel: `Explore ${service.title}`,
    service: service.name,
  };
};

const trainingResult = (track: string, courses: string): FinderResult => ({
  title: `IT Training: ${track}`,
  description: `Learning areas include ${courses}. Ask us for current schedules and course details.`,
  exploreTo: "/courses",
  exploreLabel: "View training tracks",
  service: "IT Training",
});

const studyResult = (destination: string): FinderResult => ({
  title: `Study Abroad: ${destination}`,
  description:
    "Get guidance on program and university selection, applications, documents, and admission and visa application support.",
  exploreTo: "/study-abroad",
  exploreLabel: "Explore study abroad",
  service: "Study Abroad",
});

export const finderAudiences: FinderAudience[] = [
  {
    id: "organization",
    label: "An organization or business",
    hint: "Companies, institutions, public sector and startups",
    question: "What would you like to achieve?",
    goals: [
      { id: "software", label: "Build or upgrade business software", result: serviceResult("software-solutions") },
      {
        id: "data",
        label: "Connect our systems and turn data into insights",
        result: {
          title: "BAIDA: our flagship product",
          description: flagshipProduct.description,
          exploreTo: "/flagship-product",
          exploreLabel: "Explore BAIDA",
          service: "BAIDA Platform",
        },
      },
      { id: "infrastructure", label: "Set up or improve networks and infrastructure", result: serviceResult("ict-infrastructure") },
      { id: "security", label: "Protect our systems and data", result: serviceResult("cybersecurity") },
      { id: "ai", label: "Use AI and automation in our work", result: serviceResult("ai-solutions") },
      { id: "marketing", label: "Grow our website and online presence", result: serviceResult("digital-marketing") },
      { id: "team-training", label: "Train our team in IT skills", result: serviceResult("it-training") },
    ],
  },
  {
    id: "learner",
    label: "A professional or learner",
    hint: "Build skills and prepare for certifications",
    question: "Which area interests you most?",
    goals: [
      { id: "networking", label: "Networking and server administration", result: trainingResult("Networking & servers", "CompTIA A+, CCNA, CCNP, Windows Server and Linux") },
      { id: "cyber", label: "Cybersecurity and advanced certifications", result: trainingResult("Cybersecurity", "CEH, CHFI, SOC training, CISSP, CISA, CISM and Lead Auditor preparation") },
      { id: "analytics", label: "Data analytics", result: trainingResult("Data analytics", "Power BI, Advanced Excel, VBA and Big Data") },
      { id: "programming", label: "Programming and databases", result: trainingResult("Programming", "C, C++, Python, Java and Database Administration") },
      { id: "cloud", label: "Cloud platforms", result: trainingResult("Cloud", "Azure, AWS and GCP") },
    ],
  },
  {
    id: "student",
    label: "A student planning to study abroad",
    hint: "Explore options in Canada and Europe",
    question: "Where are you thinking of studying?",
    goals: [
      { id: "canada", label: "Canada", result: studyResult("Canada") },
      { id: "europe", label: "A European country", result: studyResult("Europe") },
      { id: "unsure", label: "I'm not sure yet", result: studyResult("Finding the right fit") },
    ],
  },
];
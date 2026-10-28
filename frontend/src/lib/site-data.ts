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
      { title: "Data Analytics", description: "Analyze and visualize business data.", features: ["Power BI", "Advanced Excel", "VBA Excel", "Big Data"] },
      { title: "Programming", description: "Write software in widely used languages.", features: ["C", "C++", "Python", "Java", "C#"] },
      { title: "Database Administration", description: "Learn to manage and maintain business databases.", features: ["SQL fundamentals", "Oracle", "SQL Server"] },
      { title: "Cloud", description: "Work with the leading cloud platforms.", features: ["Azure", "AWS", "GCP"] },
      { title: "Microsoft Office", description: "Essential office productivity skills.", features: ["Word", "Excel", "PowerPoint", "Outlook & Microsoft 365"] },
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
  { title: "Customized solutions", description: "Solutions aligned with your business requirements, workflows, roles and reporting needs, not one-size-fits-all software." },
  { title: "Integrated capabilities", description: "Software, IT infrastructure, cybersecurity, cloud and AI from one technology partner, designed to work together." },
  { title: "Business process automation", description: "Automate repetitive manual work such as approvals, notifications and reports, so your team can focus on what matters." },
  { title: "Data-driven insights", description: "Dashboards, reports and analytics that turn your business data into clearer, better-informed decisions." },
  { title: "Scalable by design", description: "Solutions planned to grow with your organization, from a single branch to multiple locations and more users." },
  { title: "Integration with existing systems", description: "Connect new solutions with the software you already use through APIs, where technically feasible." },
  { title: "Security-conscious development", description: "Role-based access control, secure authentication and protection of sensitive data built into how we develop." },
  { title: "Implementation & ongoing support", description: "Professional implementation, technical guidance, user training and ongoing support options after go-live." },
  { title: "For organizations of every kind", description: "Solutions for SMEs, enterprises, educational institutions, healthcare organizations and public-sector bodies, where appropriate." },
];

export interface TrackCourse {
  name: string;
  hours: number;
  span: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  why: string;
  topics: string[];
  audience: string;
}

export interface TrainingTrack {
  title: string;
  slug: string;
  seoTitle: string;
  heading: string;
  courses: string;
  courseList: TrackCourse[];
  why: string;
  learn: string[];
  benefits: string[];
  careers: string[];
  keywords: string[];
}

export const trainingTracks: TrainingTrack[] = [
  {
    title: "Networking",
    slug: "networking-ccna-ccnp-training",
    seoTitle: "CCNA, CCNP & CompTIA A+ Networking Training in Dhaka, Bangladesh",
    heading: "Networking Training — CompTIA A+, CCNA & CCNP",
    courses: "CompTIA A+ · CCNA · CCNP",
    courseList: [
      { name: "CompTIA A+", hours: 40, span: "6 weeks", level: "Beginner", description: "CompTIA A+ training in Dhaka for beginners: computer hardware, Windows, mobile devices, networking basics and troubleshooting. The ideal first course for IT support and help desk jobs in Bangladesh.", why: "CompTIA A+ is the industry's most recognized entry-level IT certification. It proves you can install, configure and troubleshoot computers, operating systems and basic networks, making it the ideal first step into an IT support career in Bangladesh or abroad.", topics: ["PC hardware, components and peripherals", "Windows installation, configuration and troubleshooting", "Mobile devices, printers and basic networking", "Security basics and safe operating procedures", "Help desk practices and customer support"], audience: "Beginners, students and anyone starting an IT support or help desk career." },
      { name: "CCNA", hours: 60, span: "8 weeks", level: "Intermediate", description: "CCNA training in Dhaka with Cisco lab practice: IP addressing, subnetting, switching, routing, VLANs, wireless, network security and automation basics. Prepares you for the Cisco CCNA certification exam.", why: "CCNA (Cisco Certified Network Associate) is the world's most popular networking certification. Employers across Bangladesh, from banks and ISPs to telecoms, ask for CCNA because it proves you can build, run and troubleshoot real enterprise networks.", topics: ["IP addressing, IPv4/IPv6 and subnetting", "Switching, VLANs and inter-VLAN routing", "Static routing and OSPF", "Wireless, network security and ACLs", "Network automation basics and Cisco lab practice"], audience: "IT support staff, graduates and anyone who wants a career as a network engineer." },
      { name: "CCNP", hours: 80, span: "10 weeks", level: "Advanced", description: "CCNP Enterprise course in Bangladesh for working network engineers: advanced routing (OSPF, EIGRP, BGP), enterprise switching, SD-WAN, QoS and network troubleshooting on real Cisco labs.", why: "CCNP Enterprise is the professional-level Cisco certification for experienced engineers. It validates advanced routing, switching and enterprise design skills and is a strong step towards senior network engineer and consultant roles.", topics: ["Advanced OSPF, EIGRP and BGP routing", "Enterprise switching, STP and EtherChannel", "SD-WAN, QoS and network virtualization", "Network assurance, security and automation", "Troubleshooting complex enterprise networks"], audience: "CCNA-certified or experienced network engineers aiming for senior roles." },
    ],
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
    slug: "server-administration-windows-linux-training",
    seoTitle: "Windows Server & Linux Administration Training in Dhaka, Bangladesh",
    heading: "Server Administration Training — Windows Server & Linux",
    courses: "Windows Server · Linux",
    courseList: [
      { name: "Windows Server", hours: 48, span: "6 weeks", level: "Intermediate", description: "Windows Server administration training in Dhaka: installation, Active Directory, DNS, DHCP, Group Policy, file and print services, Hyper-V and backup. Hands-on Microsoft server labs for system admin careers.", why: "Most organizations in Bangladesh run Microsoft Windows Server for users, email, files and applications. Windows Server skills let you manage Active Directory, keep systems secure and support the IT backbone of any office.", topics: ["Windows Server installation and roles", "Active Directory, users and Group Policy", "DNS, DHCP and file and print services", "Hyper-V virtualization and storage", "Backup, patching and monitoring"], audience: "IT support staff and junior admins moving into system administration." },
      { name: "Linux", hours: 48, span: "6 weeks", level: "Intermediate", description: "Linux administration course in Bangladesh (RHCSA-aligned): command line, users and permissions, storage, networking, services, shell scripting and security on Red Hat and Ubuntu servers.", why: "Linux powers most web servers, cloud platforms and security tools in the world. Linux administration (RHCSA-aligned) skills are essential for system admins, DevOps, cloud and cybersecurity careers.", topics: ["Linux command line and file system", "Users, groups and permissions", "Package management, services and processes", "Networking, firewall and SSH", "Shell scripting and automation"], audience: "IT professionals, developers and anyone targeting server, cloud or DevOps roles." },
    ],
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
    slug: "cybersecurity-ceh-chfi-soc-training",
    seoTitle: "CEH Ethical Hacking, CHFI & SOC Analyst Training in Dhaka, Bangladesh",
    heading: "Cybersecurity Training — CEH, CHFI & SOC Analyst",
    courses: "CEH · CHFI · SOC training",
    courseList: [
      { name: "CEH", hours: 40, span: "5 weeks", level: "Intermediate", description: "CEH ethical hacking course in Dhaka (EC-Council aligned): footprinting, scanning, system hacking, malware, web application attacks, wireless hacking and penetration testing in a safe lab.", why: "CEH (Certified Ethical Hacker) teaches you to think like a hacker so you can protect systems. It is one of the most requested cybersecurity certifications by banks, government agencies and security firms.", topics: ["Footprinting, scanning and enumeration", "System hacking and privilege escalation", "Malware, sniffing and social engineering", "Web application and wireless attacks", "Penetration testing methodology and reporting"], audience: "Network and system admins, IT professionals and students entering cybersecurity." },
      { name: "CHFI", hours: 40, span: "5 weeks", level: "Advanced", description: "CHFI computer hacking forensic investigator training in Bangladesh: digital evidence collection, disk and memory forensics, network and email investigation, and cybercrime reporting.", why: "CHFI (Computer Hacking Forensic Investigator) trains you to investigate cybercrime and collect digital evidence properly. Forensic skills are increasingly needed by law enforcement, banks and corporate security teams.", topics: ["Computer forensics investigation process", "Disk, file system and memory forensics", "Network, email and log investigation", "Mobile and cloud forensics basics", "Evidence handling and forensic reporting"], audience: "Security analysts, IT auditors and professionals in investigation roles." },
      { name: "SOC training", hours: 48, span: "6 weeks", level: "Intermediate", description: "SOC analyst training in Dhaka: security monitoring with SIEM tools, log analysis, threat detection, alert triage and incident response, preparing you for Security Operations Center jobs.", why: "A Security Operations Center (SOC) monitors an organization's systems 24/7 to detect and stop attacks. SOC analyst training prepares you for one of the most in-demand entry points into a cybersecurity career.", topics: ["SOC roles, tools and workflows", "SIEM log collection and analysis", "Threat detection and alert triage", "Incident response procedures", "Threat intelligence and reporting"], audience: "IT graduates, network admins and anyone aiming to become a SOC analyst." },
    ],
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
    slug: "cissp-cisa-cism-lead-auditor-training",
    seoTitle: "CISSP, CISA, CISM & ISO 27001 Lead Auditor Training in Bangladesh",
    heading: "Advanced Security & Audit Certifications — CISSP, CISA, CISM & Lead Auditor",
    courses: "CISSP · CISA · CISM · Lead Auditor preparation",
    courseList: [
      { name: "CISSP", hours: 40, span: "5 weeks", level: "Advanced", description: "CISSP certification training in Bangladesh covering all eight (ISC)² domains: security and risk management, asset security, architecture, network security, IAM, testing, operations and software security.", why: "CISSP from (ISC)² is the gold-standard certification for senior security professionals and managers. It demonstrates broad expertise across security architecture, management and operations, and opens doors to leadership roles worldwide.", topics: ["Security and risk management", "Asset security and security architecture", "Communication and network security", "Identity and access management (IAM)", "Security assessment, operations and software security"], audience: "Experienced security professionals, IT managers and aspiring CISOs." },
      { name: "CISA", hours: 32, span: "4 weeks", level: "Advanced", description: "CISA certification course in Dhaka (ISACA): information systems auditing, IT governance, systems acquisition and development, operations and protection of information assets, with exam practice.", why: "CISA from ISACA is the globally recognized certification for IT auditors. Banks, audit firms and regulators value CISA professionals who can assess IT controls, governance and risk.", topics: ["Information systems audit process", "Governance and management of IT", "Systems acquisition, development and implementation", "IT operations and business resilience", "Protection of information assets"], audience: "IT auditors, internal auditors, risk and compliance professionals." },
      { name: "CISM", hours: 32, span: "4 weeks", level: "Advanced", description: "CISM certification training in Bangladesh (ISACA): information security governance, risk management, security program development and incident management for security managers.", why: "CISM from ISACA is designed for people who manage information security programs. It focuses on governance, risk and incident management, which are key skills for security manager roles.", topics: ["Information security governance", "Information security risk management", "Security program development and management", "Incident management", "Aligning security with business goals"], audience: "Security managers, IT managers and professionals moving into security leadership." },
      { name: "Lead Auditor preparation", hours: 40, span: "5 days", level: "Advanced", description: "ISO 27001 Lead Auditor training in Bangladesh: ISMS requirements, audit planning, conducting and reporting audits, and leading an audit team, with certification exam preparation.", why: "ISO/IEC 27001 is the international standard for information security management. Lead Auditors plan and lead ISMS audits, a skill in demand among banks, telecoms and companies seeking certification.", topics: ["ISO 27001 ISMS requirements and controls", "Audit principles and planning", "Conducting audits and collecting evidence", "Reporting findings and nonconformities", "Leading an audit team and certification exam preparation"], audience: "Auditors, compliance officers, security and quality professionals." },
    ],
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
    slug: "data-analytics-power-bi-excel-training",
    seoTitle: "Power BI, Advanced Excel & Data Analytics Course in Dhaka, Bangladesh",
    heading: "Data Analytics Training — Power BI, Advanced Excel, VBA Excel & Big Data",
    courses: "Power BI · Advanced Excel · VBA Excel · Big Data",
    courseList: [
      { name: "Power BI", hours: 30, span: "4 weeks", level: "Beginner", description: "Power BI course in Dhaka: connect and clean data with Power Query, build data models, write DAX measures and design interactive business dashboards and reports.", why: "Microsoft Power BI is the leading business intelligence tool. It lets you turn raw data into interactive dashboards that managers use to make decisions, one of the most requested skills in data and MIS roles.", topics: ["Getting and cleaning data with Power Query", "Data modeling and relationships", "DAX measures and calculations", "Interactive dashboards and visuals", "Publishing and sharing reports"], audience: "Office professionals, analysts, MIS staff and anyone working with business data." },
      { name: "Advanced Excel", hours: 24, span: "3 weeks", level: "Beginner", description: "Advanced Excel training in Bangladesh: lookup functions (XLOOKUP, VLOOKUP), pivot tables, charts, conditional formatting, data validation and dashboards for office professionals.", why: "Excel is used in every office, but most people only use a fraction of it. Advanced Excel skills save hours each week and are expected in finance, banking, sales, HR and administration roles.", topics: ["XLOOKUP, VLOOKUP, INDEX and MATCH", "Pivot tables and pivot charts", "Conditional formatting and data validation", "What-if analysis and advanced formulas", "Excel dashboards and reports"], audience: "Office staff, accountants, analysts and students who already know basic Excel." },
      { name: "VBA Excel", hours: 24, span: "3 weeks", level: "Intermediate", description: "Excel VBA macro course in Dhaka: record and write macros, loops, user forms and automation of repetitive reports to save hours of manual work every week.", why: "VBA (Visual Basic for Applications) lets you automate repetitive Excel work. With VBA macros, reports that take hours can run in seconds, which makes you far more productive and valuable at work.", topics: ["Recording and editing macros", "VBA variables, loops and conditions", "Working with ranges, sheets and workbooks", "User forms and buttons", "Automating real reports end to end"], audience: "Advanced Excel users, analysts and finance and MIS professionals." },
      { name: "Big Data", hours: 40, span: "5 weeks", level: "Advanced", description: "Big Data training in Bangladesh: Hadoop and Spark fundamentals, data pipelines, distributed processing and working with large datasets for analytics and data engineering roles.", why: "Organizations now collect more data than traditional tools can handle. Big Data skills with Hadoop and Spark prepare you for data engineering and large-scale analytics roles.", topics: ["Big Data concepts and the 5 Vs", "Hadoop ecosystem and HDFS", "Apache Spark for distributed processing", "Data pipelines and ingestion", "Working with large datasets for analytics"], audience: "Developers, data analysts and IT professionals moving into data engineering." },
    ],
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
    slug: "programming-python-java-c-courses",
    seoTitle: "Python, Java, C#, C & C++ Programming Courses in Dhaka, Bangladesh",
    heading: "Programming Courses — C, C++, Python, Java & C#",
    courses: "C · C++ · Python · Java · C#",
    courseList: [
      { name: "C", hours: 36, span: "6 weeks", level: "Beginner", description: "C programming course in Dhaka for beginners: variables, control flow, functions, arrays, pointers and memory, building strong programming logic and problem-solving skills.", why: "C is the foundation of modern programming. Learning C builds strong logic and an understanding of how computers really work, making every other language easier to learn.", topics: ["Variables, data types and operators", "Conditions, loops and functions", "Arrays and strings", "Pointers and memory management", "Problem solving and mini projects"], audience: "Complete beginners, students and anyone starting to learn programming." },
      { name: "C++", hours: 40, span: "6 weeks", level: "Intermediate", description: "C++ programming course in Bangladesh: object-oriented programming, classes, inheritance, templates and the STL, with practical exercises for software development and competitive programming.", why: "C++ adds object-oriented programming to C and is used in software, games, systems and competitive programming. It strengthens your design skills and is widely taught in universities.", topics: ["Classes and objects", "Inheritance and polymorphism", "Templates and the STL", "File handling and exceptions", "Object-oriented projects"], audience: "Students who know C basics and aspiring software or game developers." },
      { name: "Python", hours: 48, span: "8 weeks", level: "Beginner", description: "Python course in Dhaka from basics to projects: syntax, data structures, functions, OOP, file handling, automation scripts and an introduction to data analysis and AI libraries.", why: "Python is the world's most popular programming language for beginners, automation, data science and AI. Its simple syntax lets you build useful programs quickly, and it is in high demand for jobs and freelancing.", topics: ["Python syntax, variables and data types", "Lists, dictionaries and functions", "Object-oriented programming in Python", "Files, modules and automation scripts", "Introduction to data analysis and AI libraries"], audience: "Beginners, students, office professionals and aspiring data or AI specialists." },
      { name: "Java", hours: 60, span: "8 weeks", level: "Intermediate", description: "Java programming training in Bangladesh: core Java, OOP, collections, exception handling, JDBC and building desktop and backend applications for enterprise developer jobs.", why: "Java runs enterprise systems, banking software and Android apps. Its reliability and huge job market make Java one of the safest choices for a long-term software development career.", topics: ["Core Java syntax and OOP", "Collections and generics", "Exception handling and file I/O", "JDBC database connectivity", "Building real Java applications"], audience: "Students and developers targeting enterprise or backend development jobs." },
      { name: "C#", hours: 48, span: "6 weeks", level: "Intermediate", description: "C# programming course in Dhaka with .NET: C# syntax, object-oriented programming, collections, LINQ, and building desktop, web API and business applications on Microsoft .NET.", why: "C# with Microsoft .NET is used to build business applications, web APIs, desktop software and games (Unity). Many companies in Bangladesh and abroad build their systems on .NET, so C# developers are in steady demand.", topics: ["C# syntax, types and OOP", "Collections, generics and LINQ", "Async programming and error handling", "Building web APIs with ASP.NET Core", "Working with databases using Entity Framework"], audience: "Beginner-to-intermediate programmers and developers targeting .NET jobs." },
    ],
    why: "Programming is the core skill behind software, apps, automation and AI. Learning to code opens careers in software development, freelancing and technology startups.",
    learn: [
      "Programming fundamentals, logic and problem solving",
      "Data structures, algorithms and object-oriented programming",
      "Python for automation, data and AI foundations",
      "Java and C# (.NET) for enterprise and application development",
      "Writing, testing and debugging real projects",
    ],
    benefits: [
      "Beginner-friendly with a step-by-step learning path",
      "Hands-on coding exercises and mini projects",
      "A strong base for software, AI and freelancing careers",
    ],
    careers: ["Software Developer", "Python Developer", "Java Developer", ".NET / C# Developer", "Automation Engineer", "Freelance Programmer"],
    keywords: ["Python course in Dhaka", "Java training Bangladesh", "C# .NET course Dhaka", "C++ programming course", "programming course for beginners", "learn coding Bangladesh"],
  },
  {
    title: "Database Administration",
    slug: "database-administration-training",
    seoTitle: "Oracle DBA & SQL Server Administration Training in Dhaka, Bangladesh",
    heading: "Database Administration Training — Oracle & SQL Server",
    courses: "SQL Fundamentals · Oracle · SQL Server",
    courseList: [
      { name: "SQL & Database Fundamentals", hours: 24, span: "3 weeks", level: "Beginner", description: "SQL and database fundamentals course in Dhaka: relational database concepts, tables, keys, SELECT queries, joins, grouping and writing practical SQL for reports and applications.", why: "Almost every application stores its data in a database, and SQL is the language used to work with it. SQL is a core skill for developers, analysts and DBAs alike.", topics: ["Relational database concepts", "Tables, keys and relationships", "SELECT, filtering and sorting", "Joins, grouping and aggregate functions", "Insert, update, delete and basic design"], audience: "Beginners, analysts, developers and anyone starting a database career." },
      { name: "Oracle Database Administration", hours: 48, span: "6 weeks", level: "Advanced", description: "Oracle DBA training in Bangladesh: Oracle Database architecture, installation, users and security, storage, RMAN backup and recovery, and performance tuning for enterprise systems.", why: "Oracle Database runs many banking, telecom and government systems. Oracle DBAs keep these critical databases secure, available and fast, which makes it one of the best-paid database specializations.", topics: ["Oracle architecture and installation", "Users, roles, privileges and security", "Tablespaces and storage management", "RMAN backup and recovery", "Performance monitoring and tuning"], audience: "Developers and IT professionals with SQL knowledge aiming for DBA roles." },
      { name: "SQL Server Administration", hours: 40, span: "5 weeks", level: "Intermediate", description: "Microsoft SQL Server administration course in Dhaka: installation, databases and security, backup and restore, maintenance plans, high availability basics and query performance.", why: "Microsoft SQL Server is widely used for business applications, ERP and reporting. SQL Server administration skills let you manage, protect and optimize these databases in any Microsoft environment.", topics: ["SQL Server installation and configuration", "Databases, logins and security", "Backup, restore and maintenance plans", "High availability basics", "Query performance and indexing"], audience: "SQL users, developers and system admins working with Microsoft systems." },
    ],
    why: "Every application stores its data in a database. Database administrators keep that data secure, available and fast, a critical role in banks, hospitals, telecoms and software companies.",
    learn: [
      "Relational database concepts and SQL",
      "Installing, configuring and managing Oracle and SQL Server databases",
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
    keywords: ["Oracle DBA training Bangladesh", "SQL Server administration course Dhaka", "database administration course Bangladesh", "SQL training Dhaka", "DBA course"],
  },
  {
    title: "Cloud",
    slug: "cloud-aws-azure-gcp-training",
    seoTitle: "AWS, Azure & Google Cloud Training in Dhaka, Bangladesh",
    heading: "Cloud Computing Training — Microsoft Azure, AWS & Google Cloud",
    courses: "Azure · AWS · GCP",
    courseList: [
      { name: "Azure", hours: 40, span: "5 weeks", level: "Intermediate", description: "Microsoft Azure administrator training in Dhaka (AZ-104 aligned): virtual machines, storage, virtual networks, identity with Entra ID, monitoring and cost management.", why: "Microsoft Azure is a leading cloud platform, especially for organizations already using Microsoft products. Azure administrator (AZ-104 aligned) skills are in high demand for cloud and infrastructure roles.", topics: ["Azure portal, subscriptions and governance", "Virtual machines and virtual networks", "Storage accounts and backup", "Identity with Microsoft Entra ID", "Monitoring and cost management"], audience: "System admins, network engineers and IT professionals moving to the cloud." },
      { name: "AWS", hours: 40, span: "5 weeks", level: "Intermediate", description: "AWS Solutions Architect Associate training in Bangladesh: EC2, S3, VPC, IAM, RDS, load balancing and designing secure, scalable and cost-effective cloud architectures.", why: "Amazon Web Services (AWS) is the world's largest cloud platform. AWS Solutions Architect Associate skills are among the most valued in IT and suit both local jobs and remote work for international companies.", topics: ["EC2, S3 and core AWS services", "VPC networking and security groups", "IAM users, roles and policies", "RDS, load balancing and auto scaling", "Designing secure, cost-effective architectures"], audience: "IT professionals, developers and admins planning a cloud career." },
      { name: "GCP", hours: 36, span: "5 weeks", level: "Intermediate", description: "Google Cloud training in Bangladesh (Associate Cloud Engineer aligned): Compute Engine, Cloud Storage, VPC, IAM, GKE basics and deploying applications on GCP.", why: "Google Cloud Platform (GCP) is growing fast for data, AI and modern applications. Associate Cloud Engineer skills let you deploy and manage workloads on Google Cloud.", topics: ["GCP projects, billing and IAM", "Compute Engine and Cloud Storage", "VPC networking", "Google Kubernetes Engine (GKE) basics", "Deploying and monitoring applications"], audience: "Cloud beginners, developers and engineers working with data and AI workloads." },
    ],
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
  {
    title: "Microsoft Office",
    slug: "microsoft-office-training",
    seoTitle: "Microsoft Office Course in Dhaka, Bangladesh | Word, Excel, PowerPoint & Outlook",
    heading: "Microsoft Office Training — Word, Excel, PowerPoint & Outlook",
    courses: "Word · Excel · PowerPoint · Outlook & Microsoft 365",
    courseList: [
      { name: "Microsoft Word", hours: 12, span: "2 weeks", level: "Beginner", description: "Microsoft Word course in Dhaka: professional documents, formatting, styles, tables, letters, CVs, mail merge and report layout for office and academic work.", why: "Microsoft Word is used to create almost every letter, report and CV. Knowing Word properly helps you produce professional documents quickly, which is an essential skill for every office job.", topics: ["Formatting text, paragraphs and styles", "Tables, images and page layout", "Headers, footers and page numbers", "Mail merge for letters and labels", "Professional CVs, letters and reports"], audience: "Students, job seekers and office staff." },
      { name: "Microsoft Excel", hours: 16, span: "2 weeks", level: "Beginner", description: "Microsoft Excel basics course in Bangladesh: worksheets, formulas, functions (SUM, IF, COUNTIF), sorting, filtering and charts for everyday office tasks. Continue with Advanced Excel and VBA Excel.", why: "Excel is the most widely used office tool for numbers, lists and reports. Basic Excel skills are expected in nearly every job and are the first step towards Advanced Excel and data analytics.", topics: ["Worksheets, cells and formatting", "Basic formulas and functions (SUM, IF, COUNTIF)", "Sorting, filtering and tables", "Charts and simple reports", "Printing and page setup"], audience: "Beginners, students and office staff new to Excel." },
      { name: "Microsoft PowerPoint", hours: 8, span: "1 week", level: "Beginner", description: "Microsoft PowerPoint training in Dhaka: design clear, professional presentations with layouts, images, charts, transitions and confident slide delivery.", why: "Presentations are part of business meetings, classes and job interviews. PowerPoint skills help you communicate ideas clearly and present with confidence.", topics: ["Slide layouts, themes and design", "Images, icons, charts and SmartArt", "Animations and transitions", "Presenter notes and slide shows", "Presentation tips and delivery"], audience: "Students, teachers, sales and office professionals." },
      { name: "Outlook & Microsoft 365", hours: 8, span: "1 week", level: "Beginner", description: "Outlook and Microsoft 365 course in Bangladesh: professional email, calendar and meetings, plus Teams, OneDrive and SharePoint for online collaboration.", why: "Most organizations now work with Microsoft 365 for email, meetings and file sharing. These skills help you communicate professionally and collaborate effectively in a modern workplace.", topics: ["Professional email in Outlook", "Calendar, meetings and tasks", "Microsoft Teams chat and meetings", "OneDrive file storage and sharing", "SharePoint basics for team collaboration"], audience: "Office staff, new employees and anyone working in a Microsoft 365 workplace." },
    ],
    why: "Microsoft Office skills are expected in almost every office job, from banks and corporate offices to schools and NGOs. Confident use of Word, Excel, PowerPoint and Outlook makes you faster, more professional and more employable.",
    learn: [
      "Creating and formatting professional documents in Word",
      "Excel formulas, functions, tables and charts",
      "Designing and presenting slides in PowerPoint",
      "Managing email, calendars and meetings in Outlook",
      "Collaborating with Teams, OneDrive and SharePoint (Microsoft 365)",
    ],
    benefits: [
      "Beginner-friendly, practical, hands-on lessons",
      "Skills used daily in almost every office job",
      "A strong base for Advanced Excel, Power BI and data analytics",
    ],
    careers: ["Office Executive", "Administrative Assistant", "Data Entry Operator", "Front Desk & Customer Service Officer", "Office Coordinator"],
    keywords: ["Microsoft Office course in Dhaka", "MS Office training Bangladesh", "computer office application course", "MS Word Excel PowerPoint course", "Microsoft 365 training"],
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
  // Optional headshot (e.g. "/leadership/jishan.jpg" in frontend/public); initials are shown until one is added.
  photo?: string;
}

export const leadership: Leader[] = [
  {
    name: "Zaynal Abedin",
    role: "Chairman, Bact IT",
    initials: "ZA",
    bio: [],
    message: [
      "At BACT IT, we see technology as the engine of business growth. Our vision is to help organizations work smarter today while preparing Bangladesh’s new generation to lead the technology of tomorrow.",
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
      "From my experience in the global tech industry, I know that the future belongs to those who adapt quickly. BACT IT brings international standards to local businesses and gives young people the skills to compete anywhere in the world.",
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
      "Our new generation is full of talent. It only needs the right direction. At BACT IT, we turn curiosity into career-ready skills in AI, cloud, cybersecurity and software, so young people can build the future, not just follow it.",
    ],
    link: { label: "Facebook profile", href: "https://www.facebook.com/jubayer.ahmed.hridoy.22397" },
  },
  {
    name: "Toufiqur Rahaman Jishan",
    role: "Founder & CEO, BACT IT",
    initials: "TJ",
    bio: [
      "Toufiqur Rahaman Jishan is the Founder and Chief Executive Officer of BACT IT. He leads the company’s overall vision and strategy across technology services, professional IT training and study abroad guidance, with a focus on connecting global technology standards with local talent and businesses in Bangladesh.",
    ],
    message: [
      "We built BACT IT to be a practical technology partner for business, delivering software, security and AI that solve real problems. Every solution we create and every learner we train is a step towards a smarter, future-ready Bangladesh.",
    ],
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
      { id: "analytics", label: "Data analytics", result: trainingResult("Data analytics", "Power BI, Advanced Excel, VBA Excel and Big Data") },
      { id: "programming", label: "Programming and databases", result: trainingResult("Programming", "C, C++, Python, Java and Database Administration") },
      { id: "cloud", label: "Cloud platforms", result: trainingResult("Cloud", "Azure, AWS and GCP") },
      { id: "office", label: "Microsoft Office skills", result: trainingResult("Microsoft Office", "Word, Excel, PowerPoint, Outlook and Microsoft 365") },
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
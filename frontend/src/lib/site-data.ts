import type { ServiceInterest } from "@/lib/inquiries";

export interface ServiceInfo {
  name: ServiceInterest;
  slug: string;
  short: string;
  description: string;
  items: string[];
  icon: string;
}

export const services: ServiceInfo[] = [
  {
    name: "Software Solutions",
    slug: "software-solutions",
    short: "Software built around the way your organization works.",
    description: "Business applications and custom software designed to connect processes, people, and information.",
    items: [
      "ERP, HRM and Hospital Management Systems (HMS)",
      "Inventory and e-commerce platforms",
      "Learning Management Systems (LMS)",
      "Accounting, CRM and POS applications",
      "Custom software and business process automation",
    ],
    icon: "⌘",
  },
  {
    name: "ICT Infrastructure",
    slug: "ict-infrastructure",
    short: "Reliable foundations for connected, secure operations.",
    description: "Plan and support the infrastructure that keeps your teams and systems connected.",
    items: [
      "Enterprise networking and structured cabling",
      "Data center design and implementation",
      "Servers, storage and virtualization",
      "IP surveillance and CCTV solutions",
      "Infrastructure maintenance and technical support",
    ],
    icon: "⌁",
  },
  {
    name: "Cybersecurity",
    slug: "cybersecurity",
    short: "Practical security built into your technology decisions.",
    description: "Strengthen the security posture of your network, applications, endpoints, and operations.",
    items: [
      "Network and information security",
      "Endpoint security and protection",
      "Application security and vulnerability assessment",
      "Zero Trust security architecture",
      "Security Operations Center (SOC) solutions",
      "Security audits, monitoring and incident response",
    ],
    icon: "◈",
  },
  {
    name: "AI Solutions",
    slug: "ai-solutions",
    short: "Bring useful intelligence and automation into your workflows.",
    description: "Explore AI integration and analytics in ways that support your business systems and teams.",
    items: [
      "AI integration with ERP, HRM and other business systems",
      "AI agents, chatbots and workflow automation",
      "AI infrastructure planning and setup",
      "Business intelligence and predictive analytics",
      "Private AI deployments and enterprise AI solutions",
    ],
    icon: "✳",
  },
  {
    name: "IT Training",
    slug: "it-training",
    short: "Professional learning paths across in-demand technology fields.",
    description: "Explore professional IT training categories and ask the team for current course information.",
    items: [
      "Networking: CompTIA A+, CCNA and CCNP",
      "Server Administration: Windows Server and Linux",
      "Cybersecurity: CEH, CHFI and SOC training",
      "Advanced Certifications: CISSP, CISA, CISM and Lead Auditor preparation",
      "Data Analytics: Power BI, Advanced Excel, VBA and Big Data",
      "Programming: C, C++, Python, Java and Database Administration",
      "Cloud: Azure, AWS and GCP",
    ],
    icon: "⌘",
  },
  {
    name: "Study Abroad",
    slug: "study-abroad",
    short: "Guidance for exploring study options in Canada and Europe.",
    description: "Get support exploring program options, preparing applications, and understanding the next steps.",
    items: [
      "Study opportunities in Canada",
      "University options across European countries",
      "Program and university selection",
      "Application and document guidance",
      "Admission and visa application support",
    ],
    icon: "↗",
  },
  {
    name: "Digital Marketing",
    slug: "digital-marketing",
    short: "Build and maintain a stronger digital presence.",
    description: "Digital services that help organizations manage their website, content, and online channels.",
    items: [
      "Business website design and development",
      "Website maintenance and management",
      "Social media page management",
      "Digital content and campaign management",
      "Search engine optimization (SEO)",
    ],
    icon: "↗",
  },
];

export const industries = [
  "Government & public sector",
  "Healthcare providers",
  "Education",
  "Retail & e-commerce",
  "IT & telecommunications",
  "SMEs & startups",
  "Enterprise organizations",
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

export const trainingTracks = [
  { title: "Networking", courses: "CompTIA A+ · CCNA · CCNP" },
  { title: "Server administration", courses: "Windows Server · Linux" },
  { title: "Cybersecurity", courses: "CEH · CHFI · SOC training" },
  { title: "Advanced certifications", courses: "CISSP · CISA · CISM · Lead Auditor" },
  { title: "Data analytics", courses: "Power BI · Advanced Excel · VBA · Big Data" },
  { title: "Programming", courses: "C · C++ · Python · Java · Database Administration" },
  { title: "Cloud", courses: "Azure · AWS · GCP" },
];

export const contactDetails = {
  email: "info@bactit.com",
  website: "www.bactit.com",
};
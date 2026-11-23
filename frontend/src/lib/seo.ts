import { contactDetails, offices, services, socialLinks, trainingTracks } from "@/lib/site-data";
import { findSolution } from "@/lib/solutions-data";

export const SITE_URL = "https://www.bactit.com";
export const SITE_NAME = "BACT IT";
export const OG_IMAGE = `${SITE_URL}/logo-horizontal.png`;

export interface PageSeo {
  title: string;
  description: string;
  keywords: string[];
  noindex?: boolean;
}

const brandKeywords = [
  "BACT IT",
  "Business Application & Communication Technology",
  "IT company in Bangladesh",
  "IT company in Dhaka",
  "IT company in Australia",
  "IT company in USA",
  "best IT company",
  "global IT solutions provider",
  "আইটি কোম্পানি বাংলাদেশ",
  "আইটি কোম্পানি ঢাকা",
  "সেরা আইটি কোম্পানি",
];

const pages: Record<string, PageSeo> = {
  "/": {
    title: "BACT IT | Software, Cyber Security, Training, Infrastructure Solutions",
    description:
      "BACT IT provides software development, cyber security, IT training and infrastructure solutions for businesses in Bangladesh, USA, Australia and worldwide. Get in touch today.",
    keywords: [
      ...brandKeywords,
      "best software company",
      "software development company",
      "custom software development",
      "web design and development company",
      "website development company",
      "cyber security company",
      "cyber security solutions",
      "IT infrastructure solutions",
      "ICT infrastructure",
      "best IT training company",
      "IT training in Bangladesh",
      "IT training in Australia",
      "best IT services in Bangladesh",
      "best IT services in USA",
      "best IT services in Australia",
      "best IT services worldwide",
      "web design company in Bangladesh",
      "web design company in USA",
      "web design company in Australia",
      "offshore software development",
      "সফটওয়্যার কোম্পানি বাংলাদেশ",
      "সফটওয়্যার কোম্পানি ঢাকা",
      "ওয়েব ডিজাইন কোম্পানি বাংলাদেশ",
      "ওয়েবসাইট ডেভেলপমেন্ট কোম্পানি",
      "সাইবার সিকিউরিটি কোম্পানি",
      "আইটি ট্রেনিং বাংলাদেশ",
      "আইটি ইনফ্রাস্ট্রাকচার সলিউশন",
    ],
  },
  "/about": {
    title: "About BACT IT | Trusted IT Solutions Company in Bangladesh, Australia & USA",
    description:
      "Meet BACT IT, Business Application & Communication Technology. A trusted technology partner for government, banking and enterprise clients in Bangladesh, the USA and Australia.",
    keywords: [...brandKeywords, "about BACT IT", "IT solutions provider Bangladesh", "IT solutions provider Australia", "IT solutions provider USA", "technology partner Dhaka", "Toufiqur Rahaman Jishan"],
  },
  "/services": {
    title: "IT Services | Software, Website Development, Cybersecurity & AI in Bangladesh, Australia & USA — BACT IT",
    description:
      "Explore BACT IT services: custom software and ERP, website design and development, ICT infrastructure and networking, cybersecurity, AI integration, IT training, study abroad guidance and digital marketing in Bangladesh, Australia and the USA.",
    keywords: [...brandKeywords, "IT services Bangladesh", "IT services Australia", "IT services USA", "managed IT services Dhaka", "software development Bangladesh", "software development Australia", "software development USA", "website development company", "network solutions Bangladesh", "digital transformation Bangladesh", "আইটি সার্ভিস"],
  },
  "/flagship-product": {
    title: "BAIDA Data Analytics Platform | Business Intelligence by BACT IT",
    description:
      "BAIDA by BACT IT turns disconnected systems into actionable intelligence with dashboards, data analytics and AI-driven business insights for organizations in Bangladesh, Australia, the USA and beyond.",
    keywords: [...brandKeywords, "BAIDA", "data analytics platform Bangladesh", "business intelligence software", "BI dashboard Bangladesh", "AI analytics"],
  },
  "/industries": {
    title: "Industries We Serve | Banking, Government, Healthcare IT — BACT IT",
    description:
      "BACT IT delivers technology for banking and finance, government and defence, healthcare, education, telecom and enterprise organizations in Bangladesh, Australia and the USA.",
    keywords: [...brandKeywords, "banking IT solutions Bangladesh", "government IT solutions Bangladesh", "hospital management software Bangladesh", "education software Bangladesh"],
  },
  "/courses": {
    title: "Best Networking, Cybersecurity & Online IT Training | Bangladesh, Australia & USA — BACT IT",
    description:
      "Professional networking, cybersecurity and cloud training, online and onsite, for students in Bangladesh, Australia and the USA: CCNA, CCNP, CEH, CHFI, CISSP, CISA, Linux, Windows Server, AWS, Azure, Python, Power BI and more, with job placement support.",
    keywords: [
      ...brandKeywords,
      "best networking training in Bangladesh",
      "best networking training in Australia",
      "best networking training in USA",
      "best cybersecurity training in Bangladesh",
      "best cybersecurity training in Australia",
      "best cybersecurity training in USA",
      "best online IT training in Bangladesh",
      "best online IT training in Australia",
      "best online IT training in USA",
      "online CCNA training",
      "online cybersecurity course",
      "online CISSP training",
      "best IT training company in Bangladesh",
      "IT training in Bangladesh",
      "IT training center Dhaka",
      "CCNA training Dhaka",
      "CEH course Bangladesh",
      "AWS Azure training Bangladesh",
      "Python course Dhaka",
      "Power BI course Bangladesh",
      "আইটি ট্রেনিং",
      "নেটওয়ার্কিং কোর্স",
      "সাইবার সিকিউরিটি কোর্স",
      "কম্পিউটার কোর্স ঢাকা",
      ...trainingTracks.flatMap((track) => track.keywords.slice(0, 2)),
    ],
  },
  "/study-abroad": {
    title: "Study Abroad Consultancy in Bangladesh | USA, Australia, UK, Europe — BACT IT",
    description:
      "Study abroad guidance from Bangladesh: university selection, admission, scholarship and student visa support for the USA, Australia, UK, Canada and Europe.",
    keywords: [...brandKeywords, "study abroad consultancy Bangladesh", "study in Australia from Bangladesh", "study in USA from Bangladesh", "student visa consultant Dhaka", "scholarship guidance Bangladesh", "বিদেশে পড়াশোনা", "স্টুডেন্ট ভিসা"],
  },
  "/contact": {
    title: "Contact BACT IT | Software, Cyber Security, Training, Infrastructure Solutions",
    description:
      "Contact BACT IT in Dhaka, Bangladesh (+880 1990-937354), Sydney, Australia or New York, USA for software, website development, cybersecurity, IT training and study abroad enquiries.",
    keywords: [...brandKeywords, "contact BACT IT", "IT company Panthapath Dhaka", "IT support Dhaka", "IT company Ozone Park NY", "IT company Rockdale Sydney"],
  },
};

const serviceKeywords: Record<string, string[]> = {
  "software-solutions": ["best software company in Bangladesh", "best software company in Australia", "best software company in USA", "ERP software Bangladesh", "CRM software Bangladesh", "HRM software Bangladesh", "inventory management software", "school management software", "LMS software Bangladesh", "business intelligence Bangladesh", "software development company Bangladesh", "hospital management system Bangladesh", "POS software Bangladesh", "custom software Dhaka", "website design and development company", "সফটওয়্যার ডেভেলপমেন্ট"],
  "ict-infrastructure": ["ICT infrastructure Bangladesh", "network solutions Dhaka", "data center Bangladesh", "structured cabling Dhaka", "CCTV installation Dhaka", "server and storage solutions Bangladesh"],
  cybersecurity: ["cybersecurity company Bangladesh", "cybersecurity company Australia", "cybersecurity company USA", "cyber security services Dhaka", "penetration testing Bangladesh", "SOC services Bangladesh", "VAPT Bangladesh", "সাইবার সিকিউরিটি"],
  "ai-solutions": ["AI-powered business solutions", "RAG knowledge assistant", "AI agent development", "predictive analytics Bangladesh", "AI workflow automation", "AI solutions Bangladesh", "AI solutions Australia", "AI solutions USA", "AI integration services", "chatbot development Bangladesh", "machine learning company Dhaka", "AI automation for business"],
  "it-training": ["best IT training company in Bangladesh", "best IT training in Australia", "best IT training in USA", "best networking training", "best cybersecurity training", "best online IT training", "professional IT training", "IT training in Bangladesh", "IT training center Dhaka", "CompTIA A+ course Dhaka", "CCNA training Dhaka", "CCNP course Bangladesh", "Linux course Dhaka", "CEH course Bangladesh", "SOC analyst training", "best CISSP training", "CISSP CISA CISM training", "Power BI course Bangladesh", "Python course Dhaka", "Java C# course Dhaka", "Oracle DBA training", "SQL Server course", "AWS Azure GCP training", "Microsoft Office course Dhaka", "আইটি ট্রেনিং"],
  "study-abroad": ["study abroad consultancy Bangladesh", "student visa consultant Dhaka", "study in Australia from Bangladesh", "study in USA from Bangladesh", "বিদেশে পড়াশোনা"],
  "digital-marketing": ["best digital marketing company", "digital marketing agency Bangladesh", "digital marketing agency Australia", "digital marketing agency USA", "SEO services Dhaka", "social media marketing Bangladesh", "website design Dhaka", "ডিজিটাল মার্কেটিং"],
};const privatePage: PageSeo = { title: "BACT IT | Staff area", description: "BACT IT staff area.", keywords: [], noindex: true };
const notFound: PageSeo = { ...pages["/services"], noindex: true };

export function getPageSeo(pathname: string): PageSeo {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  if (["/admin", "/sign-in", "/sign-up"].some((p) => path.startsWith(p))) return privatePage;

  const solutionMatch = path.match(/^\/services\/([^/]+)\/([^/]+)$/);
  if (solutionMatch) {
    const found = findSolution(solutionMatch[1], solutionMatch[2]);
    if (!found) return notFound;
    return {
      title: `${found.item.seoTitle} | BACT IT`,
      description: `${found.item.short} ${found.item.what}`.slice(0, 300),
      keywords: [...found.item.keywords, found.item.title, ...brandKeywords],
    };
  }

  const serviceMatch = path.match(/^\/services\/([^/]+)$/);
  if (serviceMatch) {
    const service = services.find((s) => s.slug === serviceMatch[1]);
    if (!service) return notFound;
    return {
      title: `${service.title} in Bangladesh, Australia & USA | BACT IT`,
      description: `${service.description} BACT IT serves clients in Dhaka (Bangladesh), Sydney (Australia) and New York (USA).`.slice(0, 300),
      keywords: [...(serviceKeywords[service.slug] ?? []), service.name, ...brandKeywords],
    };
  }

  const trackMatch = path.match(/^\/courses\/([^/]+)$/);
  if (trackMatch) {
    const track = trainingTracks.find((t) => t.slug === trackMatch[1]);
    if (!track) return { ...pages["/courses"], noindex: true };
    return {
      title: `${track.seoTitle} | Online & Onsite – Bangladesh, Australia & USA | BACT IT`,
      description: `Best ${track.title} training, online and onsite, for Bangladesh, Australia & USA: ${track.courseList.map((c) => `${c.name} course (${c.hours} hours)`).join(", ")}. ${track.why}`.slice(0, 300),
      keywords: [
        ...track.keywords,
        ...track.courseList.map((c) => `${c.name} course in Dhaka`),
        ...track.courseList.map((c) => `online ${c.name} training`),
        `${track.title} training`,
        `best ${track.title} training in Bangladesh`,
        `best ${track.title} training in Australia`,
        `best ${track.title} training in USA`,
        `online ${track.title} training`,
        "IT training in Bangladesh",
        "IT training center Dhaka",
        ...brandKeywords,
      ],
    };
  }

  return pages[path] ?? { ...pages["/"], noindex: true };
}

export function courseJsonLd(pathname: string) {
  const slug = pathname.match(/^\/courses\/([^/]+)\/?$/)?.[1];
  const track = slug ? trainingTracks.find((t) => t.slug === slug) : undefined;
  if (!track) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: track.heading,
    description: track.why,
    url: canonicalUrl(pathname),
    keywords: track.keywords.join(", "),
    teaches: track.learn,
    provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    hasPart: track.courseList.map((course) => ({
      "@type": "Course",
      name: `${course.name} Training`,
      description: course.description,
      educationalLevel: course.level,
      timeRequired: `PT${course.hours}H`,
      provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: ["Onsite", "Online"],
        courseWorkload: `PT${course.hours}H`,
        location: "Dhaka, Bangladesh",
      },
    })),
  };
}

export function canonicalUrl(pathname: string): string {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : "/";
  return `${SITE_URL}${path === "/" ? "/" : path}`;
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  alternateName: "Business Application & Communication Technology",
  url: SITE_URL,
  logo: OG_IMAGE,
  email: contactDetails.email,
  sameAs: [socialLinks.facebook, socialLinks.instagram, socialLinks.linkedin],
  areaServed: ["Bangladesh", "United States", "Australia", "Worldwide"],
  location: offices.map((office) => ({
    "@type": "LocalBusiness",
    name: `${SITE_NAME} ${office.country}`,
    address: office.address,
    telephone: office.tel,
    image: OG_IMAGE,
    url: SITE_URL,
  })),
};

export function serviceJsonLd(pathname: string) {
  const nested = pathname.match(/^\/services\/([^/]+)\/([^/]+)\/?$/);
  if (nested) {
    const found = findSolution(nested[1], nested[2]);
    if (!found) return null;
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      name: found.item.heading,
      description: found.item.what,
      serviceType: found.item.title,
      url: canonicalUrl(pathname),
      keywords: found.item.keywords.join(", "),
      provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      areaServed: ["Bangladesh", "United States", "Australia"],
    };
  }

  const slug = pathname.match(/^\/services\/([^/]+)\/?$/)?.[1];
  const service = slug ? services.find((s) => s.slug === slug) : undefined;
  if (!service) return null;

  const catalog =
    service.slug === "it-training"
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Professional IT training courses",
            itemListElement: trainingTracks.flatMap((track) =>
              track.courseList.map((course) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Course",
                  name: `${course.name} Training`,
                  description: course.description,
                  timeRequired: `PT${course.hours}H`,
                  educationalLevel: course.level,
                  provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
                },
              })),
            ),
          },
        }
      : {};

  return {
    ...catalog,
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: service.name,
    url: canonicalUrl(pathname),
    provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    areaServed: ["Bangladesh", "United States", "Australia"],
  };
}
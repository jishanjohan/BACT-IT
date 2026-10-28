import { contactDetails, offices, services, socialLinks, trainingTracks } from "@/lib/site-data";
import { findSolution } from "@/lib/solutions-data";

// Public production domain — used for canonical URLs, sitemap and social previews.
export const SITE_URL = "https://www.bactit.com";
export const SITE_NAME = "BACT IT";
export const OG_IMAGE = `${SITE_URL}/logo-horizontal.png`;

export interface PageSeo {
  title: string;
  description: string;
  keywords: string[];
  noindex?: boolean;
}

// Shared brand + location terms, Bangladesh first, then USA & Australia, plus common Bangla searches.
const brandKeywords = [
  "BACT IT",
  "Business Application & Communication Technology",
  "IT company in Bangladesh",
  "IT company in Dhaka",
  "আইটি কোম্পানি বাংলাদেশ",
];

const pages: Record<string, PageSeo> = {
  "/": {
    title: "BACT IT | IT Company in Dhaka, Bangladesh — Software, Cybersecurity & AI",
    description:
      "BACT IT is a leading IT company in Dhaka, Bangladesh with offices in New York and Sydney. Software development, ERP, ICT infrastructure, cybersecurity, AI solutions, IT training and study abroad guidance.",
    keywords: [
      ...brandKeywords,
      "best IT company in Bangladesh",
      "software company in Dhaka",
      "IT solutions Bangladesh",
      "cybersecurity company Bangladesh",
      "AI solutions Bangladesh",
      "IT services New York",
      "IT services Sydney",
      "সফটওয়্যার কোম্পানি ঢাকা",
    ],
  },
  "/about": {
    title: "About BACT IT | Trusted IT Solutions Company in Bangladesh",
    description:
      "Meet BACT IT, Business Application & Communication Technology. A trusted technology partner for government, banking and enterprise clients in Bangladesh, the USA and Australia.",
    keywords: [...brandKeywords, "about BACT IT", "IT solutions provider Bangladesh", "technology partner Dhaka", "Toufiqur Rahaman Jishan"],
  },
  "/services": {
    title: "IT Services in Bangladesh | Software, Networking, Cybersecurity & AI — BACT IT",
    description:
      "Explore BACT IT services: custom software and ERP, ICT infrastructure and networking, cybersecurity, AI integration, IT training, study abroad guidance and digital marketing in Bangladesh.",
    keywords: [
      ...brandKeywords,
      "IT services Bangladesh",
      "managed IT services Dhaka",
      "software development Bangladesh",
      "network solutions Bangladesh",
      "digital transformation Bangladesh",
      "আইটি সার্ভিস",
    ],
  },
  "/flagship-product": {
    title: "BAIDA Data Analytics Platform | Business Intelligence by BACT IT",
    description:
      "BAIDA by BACT IT turns disconnected systems into actionable intelligence with dashboards, data analytics and AI-driven business insights for organizations in Bangladesh and beyond.",
    keywords: [...brandKeywords, "BAIDA", "data analytics platform Bangladesh", "business intelligence software", "BI dashboard Bangladesh", "AI analytics"],
  },
  "/industries": {
    title: "Industries We Serve | Banking, Government, Healthcare IT — BACT IT",
    description:
      "BACT IT delivers technology for banking and finance, government and defence, healthcare, education, telecom and enterprise organizations in Bangladesh.",
    keywords: [...brandKeywords, "banking IT solutions Bangladesh", "government IT solutions Bangladesh", "hospital management software Bangladesh", "education software Bangladesh"],
  },
  "/courses": {
    title: "IT Training & Certification Courses in Dhaka | CCNA, CEH, Cloud — BACT IT",
    description:
      "Professional IT training in Dhaka, Bangladesh: CompTIA A+, CCNA, CCNP, CEH, CHFI, CISSP, CISA, Linux, Windows Server, AWS, Azure, Python, Power BI and more, with job placement support.",
    keywords: [
      ...brandKeywords,
      "IT training in Bangladesh",
      "IT training center Dhaka",
      "CCNA training Dhaka",
      "CEH course Bangladesh",
      "cybersecurity course Bangladesh",
      "AWS Azure training Bangladesh",
      "Python course Dhaka",
      "Power BI course Bangladesh",
      "আইটি ট্রেনিং",
      "কম্পিউটার কোর্স ঢাকা",
      ...trainingTracks.flatMap((track) => track.keywords.slice(0, 2)),
    ],
  },
  "/study-abroad": {
    title: "Study Abroad Consultancy in Bangladesh | USA, Australia, UK, Europe — BACT IT",
    description:
      "Study abroad guidance from Bangladesh: university selection, admission, scholarship and student visa support for the USA, Australia, UK, Canada and Europe.",
    keywords: [
      ...brandKeywords,
      "study abroad consultancy Bangladesh",
      "study in Australia from Bangladesh",
      "study in USA from Bangladesh",
      "student visa consultant Dhaka",
      "scholarship guidance Bangladesh",
      "বিদেশে পড়াশোনা",
      "স্টুডেন্ট ভিসা",
    ],
  },
  "/portfolio": {
    title: "Projects & Portfolio | IT Solutions Delivered by BACT IT",
    description:
      "See the capabilities and projects BACT IT delivers across software, ICT infrastructure, cybersecurity and AI for clients in Bangladesh and abroad.",
    keywords: [...brandKeywords, "BACT IT projects", "IT projects Bangladesh", "software portfolio Bangladesh"],
  },
  "/contact": {
    title: "Contact BACT IT | IT Company in Dhaka, New York & Sydney",
    description:
      "Contact BACT IT in Dhaka, Bangladesh (+880 1990-937354), New York, USA or Sydney, Australia for software, cybersecurity, IT training and study abroad enquiries.",
    keywords: [...brandKeywords, "contact BACT IT", "IT company Panthapath Dhaka", "IT support Dhaka", "IT company Ozone Park NY", "IT company Rockdale Sydney"],
  },
};

const serviceKeywords: Record<string, string[]> = {
  "software-solutions": ["ERP software Bangladesh", "CRM software Bangladesh", "HRM software Bangladesh", "inventory management software", "school management software", "LMS software Bangladesh", "business intelligence Bangladesh", "software development company Bangladesh", "ERP software Bangladesh", "HRM software Bangladesh", "hospital management system Bangladesh", "POS software Bangladesh", "custom software Dhaka", "সফটওয়্যার ডেভেলপমেন্ট"],
  "ict-infrastructure": ["ICT infrastructure Bangladesh", "network solutions Dhaka", "data center Bangladesh", "structured cabling Dhaka", "CCTV installation Dhaka", "server and storage solutions Bangladesh"],
  cybersecurity: ["cybersecurity company Bangladesh", "cyber security services Dhaka", "penetration testing Bangladesh", "SOC services Bangladesh", "VAPT Bangladesh", "সাইবার সিকিউরিটি"],
  "ai-solutions": ["AI-powered business solutions", "RAG knowledge assistant", "AI agent development", "predictive analytics Bangladesh", "AI workflow automation", "AI solutions Bangladesh", "AI integration services", "chatbot development Bangladesh", "machine learning company Dhaka", "AI automation for business"],
  "it-training": ["IT training in Bangladesh", "IT training center Dhaka", "CompTIA A+ course Dhaka", "CCNA training Dhaka", "CCNP course Bangladesh", "Linux course Dhaka", "CEH course Bangladesh", "SOC analyst training", "CISSP CISA CISM training", "Power BI course Bangladesh", "Python course Dhaka", "Java C# course Dhaka", "Oracle DBA training", "SQL Server course", "AWS Azure GCP training", "Microsoft Office course Dhaka", "আইটি ট্রেনিং"],
  "study-abroad": ["study abroad consultancy Bangladesh", "student visa consultant Dhaka", "study in Australia from Bangladesh", "study in USA from Bangladesh", "বিদেশে পড়াশোনা"],
  "digital-marketing": ["digital marketing agency Bangladesh", "SEO services Dhaka", "social media marketing Bangladesh", "website design Dhaka", "ডিজিটাল মার্কেটিং"],
};

const privatePage: PageSeo = {
  title: "BACT IT | Staff area",
  description: "BACT IT staff area.",
  keywords: [],
  noindex: true,
};

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
      title: `${service.title} in Bangladesh | BACT IT`,
      description: `${service.description} BACT IT serves clients in Dhaka, Bangladesh, the USA and Australia.`.slice(0, 300),
      keywords: [...(serviceKeywords[service.slug] ?? []), service.name, ...brandKeywords],
    };
  }
  const trackMatch = path.match(/^\/courses\/([^/]+)$/);
  if (trackMatch) {
    const track = trainingTracks.find((t) => t.slug === trackMatch[1]);
    if (!track) return { ...pages["/courses"], noindex: true };
    return {
      title: `${track.seoTitle} | BACT IT`,
      description: `${track.title} training in Dhaka, Bangladesh: ${track.courseList.map((c) => `${c.name} course (${c.hours} hours)`).join(", ")}. ${track.why}`.slice(0, 300),
      keywords: [...track.keywords, ...track.courseList.map((c) => `${c.name} course in Dhaka`), `${track.title} training`, "IT training in Bangladesh", "IT training center Dhaka", ...brandKeywords],
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

// Organization + office locations as schema.org structured data.
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  alternateName: "Business Application & Communication Technology",
  url: SITE_URL,
  logo: OG_IMAGE,
  email: contactDetails.email,
  sameAs: [socialLinks.facebook, socialLinks.instagram, socialLinks.linkedin],
  areaServed: ["Bangladesh", "United States", "Australia"],
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

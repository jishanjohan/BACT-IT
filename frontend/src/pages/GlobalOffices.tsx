import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import PageIntro from "@/components/PageIntro";
import SectionHeading from "@/components/SectionHeading";
import { contactDetails, offices, whatsapp } from "@/lib/site-data";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";

const officeImage =
  "https://images.unsplash.com/photo-1580894899378-92e56886cd4d?auto=format&fit=crop&w=1300&q=85";

type ServiceItem = { name: string; to?: string };
type ServiceGroup = { title: string; to?: string; items: ServiceItem[] };

type CountryContent = {
  slug: string;
  countryNames: string[];
  countryLabel: string;
  city: string;
  eyebrow: string;
  title: string;
  description: string;
  imageAlt: string;
  storyTitle: string;
  storyParagraphs: string[];
  reasons: { title: string; description: string }[];
};

const sw = "/services/software-solutions";
const ai = "/services/ai-solutions";
const cyber = "/services/cybersecurity";

const serviceGroups: ServiceGroup[] = [
  {
    title: "Custom Software with AI Features",
    to: sw,
    items: [
      { name: "ERP Solutions", to: `${sw}/erp-software` },
      { name: "CRM Solutions", to: `${sw}/crm-software` },
      { name: "HRM & HRIS Solutions", to: `${sw}/hrm-hris-software` },
      { name: "Inventory & Warehouse Management", to: `${sw}/inventory-warehouse-management-software` },
      { name: "E-commerce Solutions", to: `${sw}/ecommerce-website-development` },
      { name: "POS & Accounting Software", to: `${sw}/pos-accounting-software` },
      { name: "School & Learning Management Systems", to: `${sw}/school-management-lms-software` },
      { name: "Learning Management Software (LMS)", to: `${sw}/learning-management-system-lms` },
      { name: "Hospital Management Systems", to: `${sw}/hospital-management-software` },
      { name: "Custom Software Development", to: `${sw}/custom-software-development` },
      { name: "Business Intelligence & Data Analytics", to: `${sw}/business-intelligence-data-analytics` },
    ],
  },
  {
    title: "AI Solutions",
    to: ai,
    items: [
      { name: "AI Engineering", to: ai },
      { name: "AI Automation", to: `${ai}/ai-workflow-automation` },
      { name: "AI Agent Development", to: `${ai}/ai-agents-development` },
      { name: "AI Chatbots & Virtual Assistants", to: `${ai}/ai-chatbot-development` },
      { name: "AI Workflow Integration", to: `${ai}/ai-erp-crm-hrm-integration` },
      { name: "Predictive Analytics & Forecasting", to: `${ai}/predictive-analytics-forecasting` },
      { name: "AI-Powered Business Search", to: `${ai}/ai-business-search` },
      { name: "Intelligent Document Processing", to: `${ai}/intelligent-document-processing` },
      { name: "AI Reporting & Summarization", to: `${ai}/ai-reporting-summarization` },
      { name: "AI Business Insights", to: `${ai}/ai-business-insights` },
      { name: "Knowledge Assistants with RAG", to: `${ai}/rag-knowledge-assistant` },
      { name: "AI-Powered Customer Support", to: `${ai}/ai-customer-support` },
      { name: "Data Analytics & Visualization", to: `${ai}/ai-data-analytics-visualization` },
    ],
  },
  {
    title: "Digital Solutions",
    items: [
      { name: "Website Design & Development" },
      { name: "Website Maintenance & Management" },
      { name: "Social Platform Management" },
      { name: "Digital Content & Campaign Management" },
      { name: "Search Engine Optimization (SEO, AEO & GEO)" },
    ],
  },
  {
    title: "Cyber Security Solutions",
    to: cyber,
    items: [
      { name: "Vulnerability Assessment & Penetration Testing (VAPT)", to: cyber },
      { name: "Network Traffic Monitoring", to: cyber },
    ],
  },
  {
    title: "IT Training",
    to: "/courses",
    items: [
      { name: "Networking", to: "/courses/networking-ccna-ccnp-training" },
      { name: "Server Administration", to: "/courses/server-administration-windows-linux-training" },
      { name: "Cybersecurity", to: "/courses/cybersecurity-ceh-chfi-soc-training" },
      { name: "Advanced Certifications", to: "/courses/cissp-cisa-cism-lead-auditor-training" },
      { name: "Data Analytics", to: "/courses/data-analytics-power-bi-excel-training" },
      { name: "Programming", to: "/courses/programming-python-java-c-courses" },
      { name: "Database Administration", to: "/courses/database-administration-training" },
      { name: "Cloud", to: "/courses/cloud-aws-azure-gcp-training" },
      { name: "Microsoft Office", to: "/courses/microsoft-office-training" },
    ],
  },
];

const australia: CountryContent = {
  slug: "australia",
  countryNames: ["australia"],
  countryLabel: "Australia",
  city: "Sydney",
  eyebrow: "BACT IT Australia",
  title: "Software, Web Design & Development, IT Training and Cyber Security Solutions Company in Australia",
  description:
    "Custom software, AI solutions, digital solutions, cyber security and IT training for Australian businesses, from our office in Sydney.",
  imageAlt: "BACT IT team planning a software and IT services project for an Australian business",
  storyTitle: "A Sydney-Based Partner With a Global Development Team",
  storyParagraphs: [
    "BACT IT (Business Application & Communication Technology) is a custom software development company and cutting-edge IT solutions and services provider, helping businesses across Australia build modern websites, custom software and secure IT systems, as well as providing cyber security solutions.",
    "Our office in Sydney gives you a local point of contact, while our engineering team in Dhaka, Bangladesh, gives you the capacity to deliver faster and at a competitive cost.",
    "We work with businesses in Sydney, Melbourne, Brisbane, Perth, Adelaide and across Australia, from local retailers and clinics to schools, logistics firms and growing startups. Our team understands Australian business needs, including data privacy, secure systems and reliable support across Australian time zones.",
  ],
  reasons: [
    { title: "A Local Office in Sydney", description: "A point of contact in Australia for meetings, planning and support." },
    {
      title: "Cost-Effective Delivery",
      description: "Our development team in Dhaka lets us offer competitive pricing without cutting corners on quality.",
    },
    {
      title: "Progress Outside Your Business Hours",
      description: "The time difference between Australia and Bangladesh means work can continue while your office is closed.",
    },
    { title: "One Partner for Everything", description: "Software, AI, digital solutions, security and training from a single team." },
  ],
};

const usa: CountryContent = {
  slug: "usa",
  countryNames: ["usa", "us", "united states", "united states of america"],
  countryLabel: "USA",
  city: "New York",
  eyebrow: "BACT IT USA",
  title: "Software, Web Design & Development, IT Training and Cyber Security Solutions Company in the USA",
  description:
    "Custom software, AI solutions, digital solutions, cyber security and IT training for US companies, from our office in New York.",
  imageAlt: "BACT IT team building custom software and AI projects for US companies",
  storyTitle: "A New York-Based Partner With a Global Development Team",
  storyParagraphs: [
    "BACT IT (Business Application & Communication Technology) is a custom software development company and cutting-edge IT solutions and services provider, helping businesses across the USA build modern websites, custom software and secure IT systems, as well as providing cyber security solutions.",
    "Our office in New York gives you a local point of contact, while our engineering team in Dhaka, Bangladesh, gives you the capacity to deliver faster and at a competitive cost.",
    "From New York to California, Texas, Florida and across the United States, we help startups, small businesses and enterprises turn ideas into working software. US companies choose us for offshore development pricing combined with clear communication, regular progress updates and meetings scheduled around US business hours.",
  ],
  reasons: [
    { title: "An Office in New York", description: "A point of contact in the USA for meetings, planning and support." },
    {
      title: "Cost-Effective Delivery",
      description: "Our development team in Dhaka lets us offer competitive pricing without cutting corners on quality.",
    },
    {
      title: "Round-the-Clock Progress",
      description: "Because Dhaka is on the other side of the world, development can move forward overnight.",
    },
    { title: "One Partner for Everything", description: "Software, AI, digital solutions, security and training from a single team." },
  ],
};

function findOffice(content: CountryContent) {
  return offices.find((office) => content.countryNames.includes(office.country.trim().toLowerCase()));
}

function CountryPage({ content }: { content: CountryContent }) {
  const office = findOffice(content);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BACT IT",
    alternateName: "Business Application & Communication Technology",
    url: "https://www.bactit.com",
    logo: "https://www.bactit.com/logo-horizontal.png",
    email: contactDetails.email,
    areaServed: content.countryLabel,
    ...(office && {
      address: { "@type": "PostalAddress", streetAddress: office.address, addressCountry: content.countryLabel },
    }),
  };

  return (
    <div data-testid={`${content.slug}-page`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <PageIntro
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        testId={`${content.slug}-page-intro`}
        image={officeImage}
        imageAlt={content.imageAlt}
        actionLabel="Book a Free Consultation"
        actionTo="/contact"
      />

      <section className="section-block about-story" data-testid={`${content.slug}-story-section`}>
        <div className="page-container about-story-grid">
          <div className="about-story-aside">
            <span className="eyebrow">{content.city} Office</span>
            <p>Business Application &amp; Communication Technology</p>
          </div>
          <div className="about-story-copy">
            <h2>{content.storyTitle}</h2>
            {content.storyParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <Link to="/contact" className="text-action">
              Talk to Our {content.city} Team <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-block about-principles" data-testid={`${content.slug}-services-section`}>
        <div className="page-container">
          <SectionHeading
            eyebrow="Our Services"
            title={`IT Services for Businesses in ${content.countryLabel}`}
            description="One connected partner for software, AI, digital solutions, security and training."
            testId={`${content.slug}-services-heading`}
          />
          <div className="principles-grid">
            {serviceGroups.map((group, index) => (
              <article key={group.title} className="principle-card">
                <span>0{index + 1}</span>
                <h3>{group.to ? <Link to={group.to}>{group.title}</Link> : group.title}</h3>
                <ul className="country-service-list">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      {item.to ? (
                        <Link to={item.to} className="country-service-item">
                          {item.name}
                        </Link>
                      ) : (
                        <span className="country-service-item">{item.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block about-principles" data-testid={`${content.slug}-reasons-section`}>
        <div className="page-container">
          <SectionHeading
            eyebrow="Why BACT IT"
            title={`Why Businesses in ${content.countryLabel} Choose BACT IT`}
            description="Local communication, global delivery capacity and a single accountable team."
            testId={`${content.slug}-reasons-heading`}
          />
          <div className="principles-grid">
            {content.reasons.map((item, index) => (
              <article key={item.title} className="principle-card">
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block about-story" data-testid={`${content.slug}-office-section`}>
        <div className="page-container about-story-grid">
          <div className="about-story-aside">
            <span className="eyebrow">Contact</span>
            <p>BACT IT {content.countryLabel}</p>
          </div>
          <div className="about-story-copy">
            <h2>Visit or Contact Our {content.city} Office</h2>
            {office && (
              <p>
                <MapPin size={16} aria-hidden="true" /> {office.address}
              </p>
            )}
            <p>
              <a href={whatsapp.href} target="_blank" rel="noreferrer">
                <SiWhatsapp size={16} aria-hidden="true" /> WhatsApp {whatsapp.display}
              </a>
            </p>
            <p>
              <a href={`mailto:${contactDetails.email}`}>
                <Mail size={16} aria-hidden="true" /> {contactDetails.email}
              </a>
            </p>
            <Link to="/contact" className="text-action">
              Book a Free Consultation <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export function AustraliaPage() {
  return <CountryPage content={australia} />;
}

export function UsaPage() {
  return <CountryPage content={usa} />;
}
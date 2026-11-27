import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import PageIntro from "@/components/PageIntro";
import SectionHeading from "@/components/SectionHeading";
import { contactDetails, offices, whatsapp } from "@/lib/site-data";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";

const officeImage =
  "https://images.unsplash.com/photo-1580894899378-92e56886cd4d?auto=format&fit=crop&w=1300&q=85";

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
  services: { title: string; description: string }[];
  reasons: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

const australia: CountryContent = {
  slug: "australia",
  countryNames: ["australia"],
  countryLabel: "Australia",
  city: "Sydney",
  eyebrow: "BACT IT Australia",
  title: "Software, Web Design & Development, IT Training and Cyber Security Solutions Company in Australia",
  description:
    "Web design, custom software, cyber security, IT infrastructure and IT training for Australian businesses, from our office in Sydney.",
  imageAlt: "BACT IT team planning a web design and IT services project for an Australian business",
  storyTitle: "A Sydney-Based Partner With a Global Development Team",
  storyParagraphs: [
    "BACT IT (Business Application & Communication Technology) is a web design company and global IT solutions provider helping businesses across Australia build modern websites, custom software and secure IT systems.",
    "Our office in Sydney gives you a local point of contact, while our engineering team in Dhaka, Bangladesh, gives you the capacity to deliver faster and at a competitive cost.",
  ],
  services: [
    {
      title: "Website Design and Development",
      description:
        "Fast, mobile-friendly and SEO-ready websites for small businesses, startups and enterprises across Sydney, Melbourne, Brisbane and the rest of Australia.",
    },
    {
      title: "Custom Software and AI Solutions",
      description:
        "Business applications, AI agents, workflow automation and predictive analytics built around the way your team works.",
    },
    {
      title: "Cyber Security Solutions",
      description: "Security assessments, vulnerability testing and protection to keep your business and customer data safe.",
    },
    {
      title: "IT Infrastructure Solutions",
      description: "Server, network and cloud setup and support for growing Australian businesses.",
    },
    {
      title: "IT Training in Australia",
      description: "Practical training in server administration, cyber security and modern IT skills for teams and individuals.",
    },
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
    { title: "One Partner for Everything", description: "Website, software, security, infrastructure and training from a single team." },
  ],
  faqs: [
    {
      question: "Does BACT IT have an office in Australia?",
      answer: "Yes. BACT IT has an office in Sydney, Australia, supported by its headquarters and engineering team in Dhaka, Bangladesh.",
    },
    {
      question: "What IT services does BACT IT offer in Australia?",
      answer:
        "BACT IT offers website design and development, custom software and AI solutions, cyber security, IT infrastructure and IT training for Australian businesses.",
    },
    {
      question: "Does BACT IT work with small businesses in Australia?",
      answer: "Yes. BACT IT works with small businesses, startups and larger organisations across Australia.",
    },
    {
      question: "Can we meet BACT IT in person in Australia?",
      answer: "Yes. Meetings can be arranged through the Sydney office, and BACT IT also works fully online.",
    },
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
    "Custom software, AI solutions, web design and cyber security for US companies, from our office in New York with an offshore engineering team in Dhaka.",
  imageAlt: "BACT IT team building custom software and web design projects for US companies",
  storyTitle: "Offshore Value With Onshore Communication",
  storyParagraphs: [
    "BACT IT (Business Application & Communication Technology) is a custom software development and web design company delivering some of the best IT services in the USA for startups and growing businesses.",
    "Our New York office keeps you close to your project, while our offshore engineering team in Dhaka, Bangladesh, gives you the capacity to build faster and at a lower cost.",
  ],
  services: [
    {
      title: "AI Agents and Automation",
      description: "AI agents, workflow automation and predictive analytics that cut manual work and help teams make faster decisions.",
    },
    {
      title: "Custom Software Development",
      description: "Web applications, internal tools, dashboards and enterprise software built to fit your processes.",
    },
    {
      title: "Website Design and Development",
      description: "High-performance, conversion-focused websites built for search visibility from day one.",
    },
    {
      title: "Cyber Security Services",
      description:
        "Vulnerability assessment and penetration testing (VAPT), security reviews and hardening for your applications and infrastructure.",
    },
    {
      title: "IT Infrastructure and Training",
      description: "Server, network and cloud support, plus hands-on technical training for your staff.",
    },
  ],
  reasons: [
    {
      title: "An Office in New York",
      description: "A presence in the United States, combined with the cost advantages of offshore software development.",
    },
    {
      title: "Round-the-Clock Progress",
      description: "Because Dhaka is on the other side of the world, development can move forward overnight.",
    },
    {
      title: "Full-Stack Capability",
      description: "Strategy, design, development, security and support from one team, so you do not need several vendors.",
    },
    { title: "Transparent Process", description: "Clear estimates, regular demos and direct access to the people building your product." },
  ],
  faqs: [
    {
      question: "Does BACT IT have an office in the USA?",
      answer: "Yes. BACT IT has an office in New York, USA, supported by its headquarters and engineering team in Dhaka, Bangladesh.",
    },
    {
      question: "What services does BACT IT offer to US companies?",
      answer:
        "BACT IT offers custom software development, AI agents and automation, website design and development, cyber security and IT infrastructure services to US companies.",
    },
    {
      question: "Is BACT IT an offshore software development company?",
      answer:
        "Yes. BACT IT combines an office in New York with an offshore engineering team in Dhaka, giving US companies offshore pricing with onshore communication.",
    },
    {
      question: "How does BACT IT communicate with US clients?",
      answer: "Through scheduled video calls, email, WhatsApp and your preferred project tools, with meetings planned around US business hours.",
    },
  ],
};

function findOffice(content: CountryContent) {
  return offices.find((office) => content.countryNames.includes(office.country.trim().toLowerCase()));
}

function CountryPage({ content }: { content: CountryContent }) {
  const office = findOffice(content);
  const pageUrl = `https://www.bactit.com/${content.slug}`;

  const structuredData = [
    {
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
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      url: pageUrl,
      mainEntity: content.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

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
            description="One connected partner for software, websites, security, infrastructure and training."
            testId={`${content.slug}-services-heading`}
          />
          <div className="principles-grid">
            {content.services.map((item, index) => (
              <article key={item.title} className="principle-card">
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
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

      <section className="section-block about-story" data-testid={`${content.slug}-faq-section`}>
        <div className="page-container">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description={`Answers to common questions about working with BACT IT in ${content.countryLabel}.`}
            testId={`${content.slug}-faq-heading`}
          />
          <div className="about-story-copy">
            {content.faqs.map((faq) => (
              <div key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
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
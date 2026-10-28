import { ArrowUpRight, Boxes, Layers3, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import PageIntro from "@/components/PageIntro";

const capabilityAreas = [
  { title: "Business applications", description: "ERP, CRM, HRM, education and custom software capabilities.", icon: Layers3 },
  { title: "Secure infrastructure", description: "Networks, data centers, cloud foundations and security capabilities.", icon: ShieldCheck },
  { title: "Digital enablement", description: "AI integration, training and digital marketing capabilities.", icon: Boxes },
];

export default function Portfolio() {
  return (
    <div data-testid="portfolio-page">
      <PageIntro
        eyebrow="Projects & portfolio"
        title="Capabilities, ready for the right challenge."
        description="This portfolio framework introduces the areas BACT IT works across. Project examples will be added when verified case studies are available."
        testId="portfolio-page-intro"
      />
      <section className="section-block portfolio-framework-section" data-testid="portfolio-framework-section">
        <div className="page-container">
          <div className="portfolio-note" data-testid="portfolio-honesty-note">
            <span data-testid="portfolio-honesty-icon"><Boxes size={22} /></span>
            <div>
              <span className="eyebrow" data-testid="portfolio-honesty-eyebrow">A growing portfolio</span>
              <h2 data-testid="portfolio-honesty-title">Real work deserves real stories.</h2>
              <p data-testid="portfolio-honesty-description">
                Specific client projects, results, and endorsements have not been provided, so we’re not presenting unverified examples as completed work.
              </p>
            </div>
          </div>
          <div className="portfolio-capabilities" data-testid="portfolio-capabilities-list">
            {capabilityAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <article key={area.title} className="portfolio-capability" data-testid={`portfolio-capability-${index + 1}`}>
                  <span data-testid={`portfolio-capability-${index + 1}-icon`}><Icon size={21} /></span>
                  <h3 data-testid={`portfolio-capability-${index + 1}-title`}>{area.title}</h3>
                  <p data-testid={`portfolio-capability-${index + 1}-description`}>{area.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="closing-cta" data-testid="portfolio-contact-cta">
        <div className="page-container closing-cta-inner">
          <div>
            <span className="eyebrow" data-testid="portfolio-contact-eyebrow">Have a project in mind?</span>
            <h2 data-testid="portfolio-contact-title">Let’s discuss the opportunity.</h2>
          </div>
          <Link to="/contact" className="button button-primary" data-testid="portfolio-contact-link">
            Contact our team <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
import { ArrowUpRight, Bot, Cable, Database, LineChart, Sparkles, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import { flagshipProduct } from "@/lib/site-data";

const capabilityIcons = [Cable, Database, LineChart, Sparkles, Workflow, Bot];
const enquiryLink = `/contact?service=${encodeURIComponent("BAIDA Platform")}`;

export default function FlagshipProduct() {
  return (
    <div data-testid="flagship-page">
      <section className="flagship-hero" data-testid="flagship-hero-section">
        <div className="page-container flagship-hero-inner">
          <span className="hero-kicker" data-testid="flagship-hero-kicker">
            <span className="status-dot" aria-hidden="true" />
            Our flagship product
          </span>
          <h1 data-testid="flagship-hero-title">
            <em>{flagshipProduct.shortName}</em>
            <span>{flagshipProduct.name}</span>
          </h1>
          <p data-testid="flagship-hero-description">{flagshipProduct.description}</p>
          <div className="hero-actions">
            <Link to={enquiryLink} className="button button-primary" data-testid="flagship-hero-enquiry-link">
              Ask about BAIDA <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <a href="#capabilities" className="button button-quiet" data-testid="flagship-hero-capabilities-link">
              See capabilities <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="section-block flagship-capabilities" id="capabilities" data-testid="flagship-capabilities-section">
        <div className="page-container">
          <SectionHeading
            eyebrow="What BAIDA does"
            title="From disconnected systems to actionable intelligence."
            description="Six connected capabilities that link your existing applications, unify your data and put AI to work under your controls."
            testId="flagship-capabilities-heading"
          />
          <div className="flagship-grid" data-testid="flagship-capabilities-grid">
            {flagshipProduct.capabilities.map((item, index) => {
              const Icon = capabilityIcons[index];
              return (
                <article className="flagship-card" key={item.title} data-testid={`flagship-capability-${index + 1}`}>
                  <div className="flagship-card-top">
                    <span className="flagship-card-icon" data-testid={`flagship-capability-${index + 1}-icon`}>
                      <Icon size={21} />
                    </span>
                    <span className="flagship-card-number" data-testid={`flagship-capability-${index + 1}-number`}>
                      0{index + 1}
                    </span>
                  </div>
                  <h3 data-testid={`flagship-capability-${index + 1}-title`}>{item.title}</h3>
                  <p data-testid={`flagship-capability-${index + 1}-description`}>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="detail-cta" data-testid="flagship-contact-cta">
        <div className="page-container detail-cta-inner">
          <div>
            <span className="eyebrow eyebrow-light" data-testid="flagship-contact-eyebrow">See BAIDA for your organization</span>
            <h2 data-testid="flagship-contact-title">Let’s talk about connecting your systems and data.</h2>
          </div>
          <Link to={enquiryLink} className="button button-primary" data-testid="flagship-contact-link">
            Start a BAIDA enquiry <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}

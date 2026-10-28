import { ArrowDownRight, ArrowUpRight, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { differentiators, industries, services } from "@/lib/site-data";

const teamImage =
  "https://images.unsplash.com/photo-1582005450386-52b25f82d9bb?auto=format&fit=crop&w=1400&q=85";

export default function Home() {
  return (
    <div className="home-page" data-testid="home-page">
      <section className="home-hero" data-testid="home-hero-section">
        <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
        <div className="page-container hero-grid">
          <div className="hero-copy">
            <span className="hero-kicker" data-testid="home-hero-kicker">
              <span className="status-dot" aria-hidden="true" />
              YOUR TRUSTED TECHNOLOGY PARTNER
            </span>
            <h1 data-testid="home-hero-title">
              Empowering business through <em>technology.</em>
            </h1>
            <p className="hero-description" data-testid="home-hero-description">
              Empowering Businesses Through Technology, Security &amp; AI. We deliver intelligent
              software, secure IT infrastructure, cybersecurity, AI integration, professional IT
              training, study abroad guidance, and digital marketing solutions to help businesses grow.
            </p>
            <div className="hero-actions" data-testid="home-hero-actions">
              <Link to="/services" className="button button-primary" data-testid="home-explore-services-link">
                Explore our services <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
              <Link to="/contact" className="button button-quiet" data-testid="home-contact-team-link">
                Talk to our team <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="hero-proofline" data-testid="home-hero-proofline">
              <span data-testid="home-hero-proof-icon"><ShieldCheck size={17} /></span>
              <p data-testid="home-hero-proof-copy">One connected partner for your technology needs</p>
            </div>
          </div>
          <div className="hero-visual" data-testid="home-hero-visual">
            <div className="hero-image-frame" data-testid="home-hero-image-frame">
              <img
                src={teamImage}
                alt="Colleagues collaborating around a laptop in a technology workspace"
                data-testid="home-hero-image"
              />
              <div className="hero-image-shade" aria-hidden="true" />
              <div className="hero-image-label" data-testid="home-hero-image-label">
                <span data-testid="home-hero-image-label-kicker">BACT IT</span>
                <strong data-testid="home-hero-image-label-copy">Technology that moves you forward.</strong>
              </div>
            </div>
            <div className="floating-capability" data-testid="home-capability-note">
              <span className="capability-icon" data-testid="home-capability-icon"><Workflow size={19} /></span>
              <div>
                <span data-testid="home-capability-label">Integrated by design</span>
                <strong data-testid="home-capability-copy">Connect. Secure. Grow.</strong>
              </div>
              <Sparkles className="capability-spark" size={17} aria-hidden="true" />
            </div>
            <div className="hero-index" data-testid="home-hero-index">01 <span>/</span> 07</div>
          </div>
        </div>
        <a href="#services" className="hero-scroll" data-testid="home-scroll-services-link">
          <span data-testid="home-scroll-services-copy">Scroll to explore</span>
          <ArrowDownRight size={17} aria-hidden="true" />
        </a>
      </section>

      <section className="section-block services-overview" id="services" data-testid="home-services-section">
        <div className="page-container">
          <div className="section-topline">
            <SectionHeading
              eyebrow="What we do"
              title="Technology for the whole journey."
              description="From a solid digital foundation to a smarter way of working, find the expertise your organization needs."
              testId="home-services-heading"
            />
            <Link to="/services" className="text-action section-top-action" data-testid="home-all-services-link">
              View all services <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="services-grid" data-testid="home-services-grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} testId={`home-service-card-${service.slug}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="why-section" data-testid="home-why-section">
        <div className="page-container why-grid">
          <div className="why-lead">
            <span className="eyebrow eyebrow-light" data-testid="home-why-eyebrow">Why BACT IT</span>
            <h2 data-testid="home-why-title">Technology that connects, automates and secures your business.</h2>
            <p data-testid="home-why-description">
              A thoughtful, security-focused approach helps keep your technology aligned with the
              needs of your organization today and as they change.
            </p>
            <Link to="/about" className="button button-outline-light" data-testid="home-about-link">
              About BACT IT <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="differentiator-list" data-testid="home-differentiators-list">
            {differentiators.map((item, index) => (
              <article className="differentiator-item" key={item.title} data-testid={`home-differentiator-${index + 1}`}>
                <span data-testid={`home-differentiator-${index + 1}-number`}>0{index + 1}</span>
                <div>
                  <h3 data-testid={`home-differentiator-${index + 1}-title`}>{item.title}</h3>
                  <p data-testid={`home-differentiator-${index + 1}-description`}>{item.description}</p>
                </div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block industries-preview" data-testid="home-industries-section">
        <div className="page-container industries-preview-grid">
          <SectionHeading
            eyebrow="Who we support"
            title="Built for the work you do."
            description="Technology approaches shaped for the different needs of organizations and learners."
            testId="home-industries-heading"
          />
          <div className="industry-tags" data-testid="home-industry-list">
            {industries.map((industry, index) => (
              <span key={industry} data-testid={`home-industry-${index + 1}`}>{industry}</span>
            ))}
          </div>
          <Link to="/industries" className="text-action" data-testid="home-industries-link">
            Explore industries <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="closing-cta" data-testid="home-closing-cta-section">
        <div className="page-container closing-cta-inner">
          <div>
            <span className="eyebrow" data-testid="home-closing-eyebrow">Let’s build something smarter together</span>
            <h2 data-testid="home-closing-title">Have a challenge in mind?</h2>
          </div>
          <Link to="/contact" className="button button-primary" data-testid="home-closing-contact-link">
            Start a conversation <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageIntro from "@/components/PageIntro";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/site-data";

export default function Services() {
  return (
    <div data-testid="services-page">
      <PageIntro
        eyebrow="Our services"
        title="Technology services, connected around your goals."
        description="Explore seven areas of expertise spanning business software, infrastructure, security, AI, professional development and digital presence."
        testId="services-page-intro"
        actionLabel="Discuss a requirement"
        actionTo="/contact"
      />
      <section className="section-block services-catalog" data-testid="services-catalog-section">
        <div className="page-container">
          <div className="catalog-intro-row" data-testid="services-catalog-intro-row">
            <p data-testid="services-catalog-intro-copy">Choose a service to see the areas we can help with.</p>
            <Link to="/contact" className="text-action" data-testid="services-catalog-contact-link">
              Talk through your needs <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="services-grid services-grid-large" data-testid="services-catalog-grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} testId={`services-catalog-card-${service.slug}`} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
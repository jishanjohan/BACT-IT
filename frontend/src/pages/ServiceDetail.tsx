import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import PageIntro from "@/components/PageIntro";
import { services } from "@/lib/site-data";

const infrastructureImage =
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1500&q=85";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <section className="section-block not-found-page" data-testid="service-not-found-page">
        <div className="page-container">
          <span className="eyebrow" data-testid="service-not-found-eyebrow">Service information</span>
          <h1 data-testid="service-not-found-title">We couldn’t find that service.</h1>
          <Link to="/services" className="text-action" data-testid="service-not-found-link">
            <ArrowLeft size={16} aria-hidden="true" /> Back to all services
          </Link>
        </div>
      </section>
    );
  }

  const enquiryLink = `/contact?service=${encodeURIComponent(service.name)}`;

  return (
    <div data-testid={`service-detail-page-${service.slug}`}>
      <PageIntro
        eyebrow="BACT IT services"
        title={service.name}
        description={service.description}
        testId={`service-detail-intro-${service.slug}`}
        image={service.slug === "ict-infrastructure" ? infrastructureImage : undefined}
        imageAlt={service.slug === "ict-infrastructure" ? "Enterprise server racks in a data center" : undefined}
        actionLabel="Enquire about this service"
        actionTo={enquiryLink}
      />
      <section className="section-block service-detail-body" data-testid={`service-detail-body-${service.slug}`}>
        <div className="page-container detail-content-grid">
          <div className="detail-lead">
            <span className="eyebrow" data-testid={`service-detail-eyebrow-${service.slug}`}>How we can help</span>
            <h2 data-testid={`service-detail-heading-${service.slug}`}>Explore the areas within {service.name.toLowerCase()}.</h2>
            <p data-testid={`service-detail-description-${service.slug}`}>{service.description}</p>
          </div>
          <div className="detail-list" data-testid={`service-detail-list-${service.slug}`}>
            {service.items.map((item, index) => (
              <div className="detail-list-item" key={item} data-testid={`service-detail-item-${service.slug}-${index + 1}`}>
                <span data-testid={`service-detail-item-icon-${service.slug}-${index + 1}`}><Check size={16} /></span>
                <p data-testid={`service-detail-item-copy-${service.slug}-${index + 1}`}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="detail-cta" data-testid={`service-detail-cta-${service.slug}`}>
        <div className="page-container detail-cta-inner">
          <div>
            <span className="eyebrow eyebrow-light" data-testid={`service-detail-cta-eyebrow-${service.slug}`}>A good place to start</span>
            <h2 data-testid={`service-detail-cta-title-${service.slug}`}>Let’s talk about what your team needs.</h2>
          </div>
          <Link to={enquiryLink} className="button button-primary" data-testid={`service-detail-contact-link-${service.slug}`}>
            Start an enquiry <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
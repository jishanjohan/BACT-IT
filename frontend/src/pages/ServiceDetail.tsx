import { ArrowLeft, ArrowUpRight, Check, Mail, SlidersHorizontal } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import PageIntro from "@/components/PageIntro";
import { contactDetails, services } from "@/lib/site-data";

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
  const isInfrastructure = service.slug === "ict-infrastructure";

  return (
    <div data-testid={`service-detail-page-${service.slug}`}>
      <PageIntro
        eyebrow="BACT IT services"
        title={service.title}
        description={service.description}
        testId={`service-detail-intro-${service.slug}`}
        image={isInfrastructure ? infrastructureImage : undefined}
        imageAlt={isInfrastructure ? "Enterprise server racks in a data center" : undefined}
        actionLabel="Enquire about this service"
        actionTo={enquiryLink}
      />
      <section className="section-block service-detail-body" data-testid={`service-detail-body-${service.slug}`}>
        <div className="page-container">
          <div className="detail-head">
            <span className="eyebrow" data-testid={`service-detail-eyebrow-${service.slug}`}>What’s included</span>
            <h2 data-testid={`service-detail-heading-${service.slug}`}>
              Explore what we offer in {service.title.toLowerCase()}.
            </h2>
          </div>
          <div className="detail-cards" data-testid={`service-detail-list-${service.slug}`}>
            {service.items.map((item, index) => (
              <article className="detail-card" key={item.title} data-testid={`service-detail-item-${service.slug}-${index + 1}`}>
                <span className="detail-card-number" data-testid={`service-detail-item-number-${service.slug}-${index + 1}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 data-testid={`service-detail-item-title-${service.slug}-${index + 1}`}>{item.title}</h3>
                <p data-testid={`service-detail-item-copy-${service.slug}-${index + 1}`}>{item.description}</p>
                {item.features.length > 0 && (
                  <ul data-testid={`service-detail-item-features-${service.slug}-${index + 1}`}>
                    {item.features.map((feature) => (
                      <li key={feature}>
                        <Check size={15} aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
          <div className="customization-note" data-testid={`service-detail-customization-${service.slug}`}>
            <span className="customization-icon" aria-hidden="true">
              <SlidersHorizontal size={20} />
            </span>
            <div>
              <h3 data-testid={`service-detail-customization-title-${service.slug}`}>Customized for each client</h3>
              <p data-testid={`service-detail-customization-copy-${service.slug}`}>{service.customization}</p>
            </div>
            <div className="customization-actions">
              <Link to={enquiryLink} className="text-action" data-testid={`service-detail-customization-link-${service.slug}`}>
                Discuss your requirements <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
              <a
                href={`mailto:${contactDetails.email}?subject=${encodeURIComponent(`Requirements: ${service.title}`)}`}
                className="customization-email"
                data-testid={`service-detail-customization-email-${service.slug}`}
              >
                <Mail size={15} aria-hidden="true" /> {contactDetails.email}
              </a>
            </div>
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

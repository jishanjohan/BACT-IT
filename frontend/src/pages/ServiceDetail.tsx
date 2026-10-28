import { ArrowLeft, ArrowUpRight, Check, Mail, Phone, SlidersHorizontal } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import { Link, useParams } from "react-router-dom";
import PageIntro from "@/components/PageIntro";
import { contactDetails, offices, services, whatsapp } from "@/lib/site-data";

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
          <Link to="/#services" className="text-action" data-testid="service-not-found-link">
            <ArrowLeft size={16} aria-hidden="true" /> Back to Services
          </Link>
        </div>
      </section>
    );
  }

  const enquiryLink = `/contact?service=${encodeURIComponent(service.name)}`;
  const isInfrastructure = service.slug === "ict-infrastructure";

  return (
    <div data-testid={`service-detail-page-${service.slug}`}>
      <nav className="service-subnav" aria-label="Services navigation" data-testid="service-subnav">
        <div className="page-container service-subnav-inner">
          <Link to="/#services" className="service-subnav-back" data-testid="service-back-to-services-button">
            <ArrowLeft size={15} aria-hidden="true" /> Back to Services
          </Link>
        </div>
      </nav>
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
              <div className="call-buttons" data-testid={`service-detail-call-buttons-${service.slug}`}>
                {offices.map((office) => (
                  <a
                    key={office.country}
                    href={`tel:${office.tel}`}
                    className="call-button"
                    title={office.phone}
                    data-testid={`service-detail-call-${office.country.toLowerCase()}-${service.slug}`}
                  >
                    <Phone size={13} aria-hidden="true" /> Call {office.country}
                  </a>
                ))}
                <a
                  href={whatsapp.href}
                  target="_blank"
                  rel="noreferrer"
                  className="call-button call-button-whatsapp"
                  data-testid={`service-detail-whatsapp-${service.slug}`}
                >
                  <SiWhatsapp size={13} aria-hidden="true" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-block other-services" data-testid="service-detail-other-services">
        <div className="page-container">
          <div className="other-services-head">
            <h2 data-testid="other-services-title">Explore other services</h2>
          </div>
          <div className="other-services-grid">
            {services
              .filter((item) => item.slug !== service.slug)
              .map((item) => (
                <Link
                  key={item.slug}
                  to={`/services/${item.slug}`}
                  className="other-service-card"
                  data-testid={`other-service-link-${item.slug}`}
                >
                  <strong>{item.title}</strong>
                  <span>{item.short}</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
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

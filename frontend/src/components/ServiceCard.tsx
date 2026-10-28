import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ServiceInfo } from "@/lib/site-data";

export default function ServiceCard({ service, testId }: { service: ServiceInfo; testId: string }) {
  return (
    <article className="service-card" data-testid={testId}>
      <Link
        to={`/services/${service.slug}`}
        className="service-card-media"
        tabIndex={-1}
        aria-hidden="true"
        data-testid={`${testId}-image-link`}
      >
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          decoding="async"
          width={800}
          height={450}
          data-testid={`${testId}-image`}
        />
        <span className="service-index" data-testid={`${testId}-index`}>
          {service.slug.slice(0, 2).toUpperCase()}
        </span>
      </Link>
      <h3 data-testid={`${testId}-title`}>{service.title}</h3>
      <p data-testid={`${testId}-description`}>{service.short}</p>
      <Link
        to={`/services/${service.slug}`}
        className="text-action"
        data-testid={`${testId}-link`}
      >
        Explore service <ArrowUpRight size={16} aria-hidden="true" />
      </Link>
    </article>
  );
}

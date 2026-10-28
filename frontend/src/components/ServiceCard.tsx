import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ServiceInfo } from "@/lib/site-data";

export default function ServiceCard({ service, testId }: { service: ServiceInfo; testId: string }) {
  return (
    <article className="service-card" data-testid={testId}>
      <div className="service-card-top" data-testid={`${testId}-topline`}>
        <span className="service-glyph" aria-hidden="true" data-testid={`${testId}-icon`}>
          {service.icon}
        </span>
        <span className="service-index" data-testid={`${testId}-index`}>
          {service.slug.slice(0, 2).toUpperCase()}
        </span>
      </div>
      <h3 data-testid={`${testId}-title`}>{service.name}</h3>
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
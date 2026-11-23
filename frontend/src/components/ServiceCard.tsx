import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ServiceInfo } from "@/lib/site-data";
import { useServiceOverrides } from "@/components/ServiceContentEditor";

export default function ServiceCard({ service, testId }: { service: ServiceInfo; testId: string }) {
  const overrides = useServiceOverrides();
  const o = overrides.data?.find((x) => x.slug === service.slug);
  const image = o?.image ?? service.image;
  const title = o?.title ?? service.title;
  const short = o?.short ?? service.short;

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
          src={image}
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
      <h3 data-testid={`${testId}-title`}>{title}</h3>
      <p data-testid={`${testId}-description`}>{short}</p>
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
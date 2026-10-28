import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import PageIntro from "@/components/PageIntro";
import ResponsibleAi from "@/components/ResponsibleAi";
import SolutionDetails from "@/components/SolutionDetails";
import { AvailabilityBadge } from "@/components/SolutionAccordion";
import { findSolution } from "@/lib/solutions-data";

export default function SolutionPage() {
  const { group, slug } = useParams();
  const match = findSolution(group, slug);

  if (!match) {
    return (
      <section className="section-block not-found-page" data-testid="solution-not-found-page">
        <div className="page-container">
          <span className="eyebrow" data-testid="solution-not-found-eyebrow">Service information</span>
          <h1 data-testid="solution-not-found-title">We couldn’t find that solution.</h1>
          <Link to="/#services" className="text-action" data-testid="solution-not-found-link">
            <ArrowLeft size={16} aria-hidden="true" /> Back to Services
          </Link>
        </div>
      </section>
    );
  }

  const { config, item } = match;
  const enquiryLink = `/contact?service=${encodeURIComponent(config.enquiryService)}`;

  return (
    <div data-testid={`solution-page-${item.slug}`}>
      <nav className="service-subnav" aria-label={`${config.parentTitle} navigation`} data-testid="solution-subnav">
        <div className="page-container service-subnav-inner">
          <Link to={`/services/${config.key}#solutions`} className="service-subnav-back" data-testid="solution-back-button">
            <ArrowLeft size={15} aria-hidden="true" /> Back to {config.parentTitle}
          </Link>
          {item.availability && <AvailabilityBadge value={item.availability} testId="solution-page-availability" />}
        </div>
      </nav>
      <PageIntro
        eyebrow={`BACT IT ${config.parentTitle} · ${item.title}`}
        title={item.heading}
        description={`${item.short} ${item.what}`}
        testId="solution-page-intro"
        actionLabel={config.ctaLabel}
        actionTo={enquiryLink}
      />
      <section className="section-block track-page-body" data-testid="solution-page-body">
        <div className="page-container">
          <SolutionDetails item={item} group={config} testId="solution-page" headingLevel="h2" />
        </div>
      </section>
      {config.key === "ai-solutions" && <ResponsibleAi />}
      <section className="section-block other-services" data-testid="solution-page-others">
        <div className="page-container">
          <div className="other-services-head">
            <h2 data-testid="solution-page-others-title">Explore other {config.parentTitle.toLowerCase()}</h2>
          </div>
          <div className="other-services-grid">
            {config.items
              .filter((entry) => entry.slug !== item.slug)
              .map((entry) => (
                <Link
                  key={entry.slug}
                  to={`/services/${config.key}/${entry.slug}`}
                  className="other-service-card"
                  data-testid={`other-solution-link-${entry.slug}`}
                >
                  <strong>{entry.title}</strong>
                  <span>{entry.short}</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              ))}
          </div>
        </div>
      </section>
      <section className="detail-cta" data-testid="solution-page-cta">
        <div className="page-container detail-cta-inner">
          <div>
            <span className="eyebrow eyebrow-light" data-testid="solution-page-cta-eyebrow">A good place to start</span>
            <h2 data-testid="solution-page-cta-title">Tell us what your organization needs.</h2>
          </div>
          <Link to={enquiryLink} className="button button-primary" data-testid="solution-page-cta-link">
            {config.ctaLabel} <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}

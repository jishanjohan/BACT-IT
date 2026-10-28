import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  testId: string;
  image?: string;
  imageAlt?: string;
  actionLabel?: string;
  actionTo?: string;
}

export default function PageIntro({
  eyebrow,
  title,
  description,
  testId,
  image,
  imageAlt = "",
  actionLabel,
  actionTo = "/contact",
}: PageIntroProps) {
  return (
    <section className={`page-intro${image ? " page-intro-with-image" : ""}`} data-testid={testId}>
      <div className="page-container page-intro-grid">
        <div className="page-intro-copy">
          <span className="eyebrow" data-testid={`${testId}-eyebrow`}>{eyebrow}</span>
          <h1 data-testid={`${testId}-title`}>{title}</h1>
          <p data-testid={`${testId}-description`}>{description}</p>
          {actionLabel && (
            <Link to={actionTo} className="button button-primary" data-testid={`${testId}-action-link`}>
              {actionLabel} <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          )}
        </div>
        {image && (
          <div className="page-intro-image-wrap" data-testid={`${testId}-image-wrap`}>
            <img src={image} alt={imageAlt} data-testid={`${testId}-image`} />
          </div>
        )}
      </div>
    </section>
  );
}
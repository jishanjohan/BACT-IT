import { AlertTriangle, ArrowUpRight, Building, Check, Lightbulb, ListChecks, Tag, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";
import type { SolutionGroup, SolutionItem } from "@/lib/solutions-data";

interface SolutionDetailsProps {
  item: SolutionItem;
  group: SolutionGroup;
  testId: string;
  // h4 inside the accordion, h2 on the item's own page.
  headingLevel: "h2" | "h4";
  showPageLink?: boolean;
}

export default function SolutionDetails({ item, group, testId, headingLevel, showPageLink = false }: SolutionDetailsProps) {
  const H = headingLevel;
  const isAi = group.key === "ai-solutions";
  return (
    <>
      <div className="solution-intro-grid">
        <div className="training-track-why" data-testid={`${testId}-what`}>
          <H>{isAi ? "What it does" : `What is ${item.title.replace(/ Solutions$/, "")}?`}</H>
          <p>{item.what}</p>
        </div>
        <div className="training-track-why solution-why" data-testid={`${testId}-why`}>
          <H>{isAi ? "Why it matters" : "Why businesses need it"}</H>
          <p>{item.why}</p>
        </div>
      </div>
      <div className="training-track-columns">
        <div className="training-track-block" data-testid={`${testId}-features`}>
          <H><ListChecks size={16} aria-hidden="true" /> Key features</H>
          <ul>
            {item.features.map((feature) => (
              <li key={feature}><Check size={14} aria-hidden="true" />{feature}</li>
            ))}
          </ul>
        </div>
        <div className="training-track-block" data-testid={`${testId}-advantages`}>
          <H><ThumbsUp size={16} aria-hidden="true" /> {isAi ? "Business advantages" : "Advantages"}</H>
          <ul>
            {item.advantages.map((advantage) => (
              <li key={advantage}><Check size={14} aria-hidden="true" />{advantage}</li>
            ))}
          </ul>
        </div>
        {item.problems ? (
          <div className="training-track-block" data-testid={`${testId}-problems`}>
            <H><AlertTriangle size={16} aria-hidden="true" /> Problems it solves</H>
            <ul>
              {item.problems.map((problem) => (
                <li key={problem}><Check size={14} aria-hidden="true" />{problem}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="training-track-block solution-example" data-testid={`${testId}-example`}>
            <H><Lightbulb size={16} aria-hidden="true" /> Example use</H>
            <p>{item.example}</p>
          </div>
        )}
      </div>
      {item.audiences && (
        <div className="solution-audiences" data-testid={`${testId}-audiences`}>
          <H><Building size={16} aria-hidden="true" /> Who it’s for</H>
          <ul>
            {item.audiences.map((audience) => (
              <li key={audience}>{audience}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="training-track-footer">
        <div className="training-track-keywords" data-testid={`${testId}-keywords`}>
          <span className="training-track-keywords-label"><Tag size={13} aria-hidden="true" /> Related keywords</span>
          <ul>
            {item.keywords.map((keyword) => (
              <li key={keyword}>{keyword}</li>
            ))}
          </ul>
        </div>
        <div className="training-track-actions">
          {showPageLink && (
            <Link to={`/services/${group.key}/${item.slug}`} className="text-action" data-testid={`${testId}-page-link`}>
              Read more about {item.title} <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          )}
          <Link
            to={`/contact?service=${encodeURIComponent(group.enquiryService)}`}
            className="button button-primary training-track-enquire"
            data-testid={`${testId}-cta`}
          >
            {group.ctaLabel} <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </>
  );
}

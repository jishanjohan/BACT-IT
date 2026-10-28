import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SolutionDetails from "@/components/SolutionDetails";
import type { SolutionGroup } from "@/lib/solutions-data";

export function AvailabilityBadge({ value, testId }: { value: string; testId: string }) {
  return (
    <span className={`solution-availability ${value === "Available now" ? "is-available" : "is-custom"}`} data-testid={testId}>
      {value}
    </span>
  );
}

// Expandable list of software categories or AI features; panel content stays in the DOM for search engines.
export default function SolutionAccordion({ group }: { group: SolutionGroup }) {
  const [open, setOpen] = useState<number[]>([0]);
  const toggle = (index: number) =>
    setOpen((current) => (current.includes(index) ? current.filter((i) => i !== index) : [...current, index]));

  return (
    <div className="training-track-list" data-testid={`${group.key}-list`}>
      {group.items.map((item, index) => {
        const Icon = item.icon;
        const n = index + 1;
        const isOpen = open.includes(index);
        const testId = `${group.key}-item-${n}`;
        return (
          <article className={`training-track${isOpen ? " is-open" : ""}`} key={item.slug} id={item.slug} data-testid={testId}>
            <h3 className="training-track-heading">
              <button
                type="button"
                className="training-track-summary"
                aria-expanded={isOpen}
                aria-controls={`${testId}-panel`}
                onClick={() => toggle(index)}
                data-testid={`${testId}-toggle`}
              >
                <span className="training-track-icon"><Icon size={22} aria-hidden="true" /></span>
                <span className="training-track-number">{String(n).padStart(2, "0")}</span>
                <span className="training-track-copy">
                  <span className="training-track-title" data-testid={`${testId}-title`}>
                    {item.title}
                    {item.availability && <AvailabilityBadge value={item.availability} testId={`${testId}-availability`} />}
                  </span>
                  <span className="training-track-courses" data-testid={`${testId}-short`}>{item.short}</span>
                </span>
                <span className="training-track-chevron" aria-hidden="true">
                  <span className="training-track-chevron-label">{isOpen ? "Hide details" : "View details"}</span>
                  <ChevronDown size={18} />
                </span>
              </button>
            </h3>
            <div
              className="training-track-panel"
              id={`${testId}-panel`}
              role="region"
              aria-label={`${item.title} details`}
              inert={!isOpen}
              data-testid={`${testId}-panel`}
            >
              <div className="training-track-panel-inner">
                <SolutionDetails item={item} group={group} testId={testId} headingLevel="h4" showPageLink />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

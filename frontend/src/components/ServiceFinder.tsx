import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, RotateCcw } from "lucide-react";
import { finderAudiences } from "@/lib/site-data";

export default function ServiceFinder() {
  const [audienceId, setAudienceId] = useState<string | null>(null);
  const [goalId, setGoalId] = useState<string | null>(null);

  const audience = finderAudiences.find((item) => item.id === audienceId);
  const goal = audience?.goals.find((item) => item.id === goalId);
  const step = goal ? 3 : audience ? 2 : 1;

  const reset = () => {
    setAudienceId(null);
    setGoalId(null);
  };

  return (
    <div className="finder-panel" data-testid="service-finder">
      <div className="finder-progress" data-testid="service-finder-progress">
        {[1, 2, 3].map((n) => (
          <span
            key={n}
            className={`finder-progress-bar${n <= step ? " is-done" : ""}`}
            data-testid={`service-finder-progress-step-${n}`}
          />
        ))}
        <span className="finder-step-label" data-testid="service-finder-step-label">
          Step {step} of 3
        </span>
      </div>

      {step === 1 && (
        <div className="finder-step" key="step-1" data-testid="service-finder-step-audience">
          <h3 data-testid="service-finder-question">Who are you looking for help as?</h3>
          <div className="finder-options" data-testid="service-finder-audience-options">
            {finderAudiences.map((item) => (
              <button
                key={item.id}
                type="button"
                className="finder-option"
                onClick={() => setAudienceId(item.id)}
                data-testid={`service-finder-audience-${item.id}-button`}
              >
                <strong>{item.label}</strong>
                <span>{item.hint}</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && audience && (
        <div className="finder-step" key="step-2" data-testid="service-finder-step-goal">
          <button type="button" className="finder-back" onClick={reset} data-testid="service-finder-back-button">
            <ArrowLeft size={15} aria-hidden="true" /> Back
          </button>
          <h3 data-testid="service-finder-question">{audience.question}</h3>
          <div className="finder-options finder-options-compact" data-testid="service-finder-goal-options">
            {audience.goals.map((item) => (
              <button
                key={item.id}
                type="button"
                className="finder-option"
                onClick={() => setGoalId(item.id)}
                data-testid={`service-finder-goal-${item.id}-button`}
              >
                <strong>{item.label}</strong>
                <ArrowUpRight size={17} aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && goal && (
        <div className="finder-step finder-result" key="step-3" data-testid="service-finder-result">
          <span className="eyebrow" data-testid="service-finder-result-eyebrow">Our recommendation</span>
          <h3 data-testid="service-finder-result-title">{goal.result.title}</h3>
          <p data-testid="service-finder-result-description">{goal.result.description}</p>
          <div className="finder-result-actions">
            <Link
              to={`/contact?service=${encodeURIComponent(goal.result.service)}`}
              className="button button-primary"
              data-testid="service-finder-result-enquiry-link"
            >
              Send an enquiry <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <Link to={goal.result.exploreTo} className="text-action" data-testid="service-finder-result-explore-link">
              {goal.result.exploreLabel} <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <button type="button" className="finder-back" onClick={reset} data-testid="service-finder-restart-button">
            <RotateCcw size={14} aria-hidden="true" /> Start over
          </button>
        </div>
      )}
    </div>
  );
}

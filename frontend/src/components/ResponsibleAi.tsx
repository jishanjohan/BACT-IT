import { responsibleAi } from "@/lib/solutions-data";

export default function ResponsibleAi() {
  return (
    <section className="section-block responsible-ai" id="responsible-ai" data-testid="responsible-ai-section">
      <div className="page-container">
        <div className="responsible-ai-head">
          <span className="eyebrow" data-testid="responsible-ai-eyebrow">Responsible AI</span>
          <h2 data-testid="responsible-ai-title">How we implement AI responsibly.</h2>
          <p data-testid="responsible-ai-description">
            AI is a powerful assistant, not a replacement for human judgement. Every AI solution we build follows these principles.
          </p>
        </div>
        <ul className="responsible-ai-grid">
          {responsibleAi.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <li className="responsible-ai-card" key={principle.title} data-testid={`responsible-ai-item-${index + 1}`}>
                <span className="responsible-ai-icon" aria-hidden="true"><Icon size={20} /></span>
                <h3 data-testid={`responsible-ai-item-${index + 1}-title`}>{principle.title}</h3>
                <p data-testid={`responsible-ai-item-${index + 1}-description`}>{principle.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

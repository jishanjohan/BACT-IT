import {
  ArrowUpRight,
  BarChart3,
  Headset,
  Layers,
  Lock,
  Plug,
  SlidersHorizontal,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import { differentiators } from "@/lib/site-data";

const icons = [SlidersHorizontal, Layers, Workflow, BarChart3, TrendingUp, Plug, Lock, Headset, Users];

export default function WhyChoose({ testId = "why-choose" }: { testId?: string }) {
  return (
    <section className="why-section why-choose" data-testid={`${testId}-section`}>
      <div className="page-container">
        <div className="why-choose-head">
          <div className="why-lead">
            <span className="eyebrow eyebrow-light" data-testid={`${testId}-eyebrow`}>Why BACT IT</span>
            <h2 data-testid={`${testId}-title`}>Why Choose BACT IT?</h2>
            <p data-testid={`${testId}-description`}>
              We aim to deliver practical, reliable and business-focused technology: solutions built around how your
              organization actually works, implemented carefully and supported after launch.
            </p>
          </div>
          <Link to="/contact" className="button button-outline-light" data-testid={`${testId}-contact-link`}>
            Request a Consultation <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <ul className="why-choose-grid" data-testid={`${testId}-list`}>
          {differentiators.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <li className="why-choose-card" key={item.title} data-testid={`${testId}-item-${index + 1}`}>
                <span className="why-choose-icon" aria-hidden="true"><Icon size={20} /></span>
                <h3 data-testid={`${testId}-item-${index + 1}-title`}>{item.title}</h3>
                <p data-testid={`${testId}-item-${index + 1}-description`}>{item.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

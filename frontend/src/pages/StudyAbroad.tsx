import { ArrowRight, ArrowUpRight, CheckCircle2, Globe2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import PageIntro from "@/components/PageIntro";
import SectionHeading from "@/components/SectionHeading";

const studyImage =
  "https://images.unsplash.com/photo-1781092176313-8b8b1e9927c7?auto=format&fit=crop&w=1500&q=85";

const steps = [
  "Discuss your study interests and goals",
  "Explore programs and university options",
  "Get guidance with applications and documents",
  "Understand admission and visa application support",
];

export default function StudyAbroad() {
  return (
    <div data-testid="study-abroad-page">
      <PageIntro
        eyebrow="Study abroad consultancy"
        title="Explore where your studies could take you."
        description="Get guidance exploring study opportunities in Canada and university options across European countries."
        testId="study-abroad-page-intro"
        image={studyImage}
        imageAlt="Students learning together in a classroom"
        actionLabel="Ask for study guidance"
        actionTo="/contact?service=Study%20Abroad"
      />
      <section className="section-block destination-section" data-testid="study-destinations-section">
        <div className="page-container destination-layout">
          <div className="destination-lead">
            <SectionHeading
              eyebrow="Explore destinations"
              title="Start with your next chapter."
              description="Study options mentioned by BACT IT include Canada and European countries. Specific universities and programs can be discussed during an enquiry."
              testId="study-destinations-heading"
            />
          </div>
          <div className="destination-cards" data-testid="study-destination-cards">
            <article className="destination-card destination-card-blue" data-testid="study-destination-canada-card">
              <span className="destination-icon" data-testid="study-destination-canada-icon"><MapPin size={22} /></span>
              <span className="destination-number" data-testid="study-destination-canada-number">01 / DESTINATION</span>
              <h3 data-testid="study-destination-canada-title">Canada</h3>
              <p data-testid="study-destination-canada-description">Explore study opportunities and get guidance on your application journey.</p>
              <Link to="/contact?service=Study%20Abroad" className="destination-link" data-testid="study-destination-canada-link">
                Ask about Canada <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
            <article className="destination-card destination-card-orange" data-testid="study-destination-europe-card">
              <span className="destination-icon" data-testid="study-destination-europe-icon"><Globe2 size={22} /></span>
              <span className="destination-number" data-testid="study-destination-europe-number">02 / DESTINATION</span>
              <h3 data-testid="study-destination-europe-title">Europe</h3>
              <p data-testid="study-destination-europe-description">Discuss university options across European countries and find a path to explore.</p>
              <Link to="/contact?service=Study%20Abroad" className="destination-link" data-testid="study-destination-europe-link">
                Ask about Europe <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          </div>
        </div>
      </section>
      <section className="section-block guidance-section" data-testid="study-guidance-section">
        <div className="page-container guidance-grid">
          <div>
            <span className="eyebrow" data-testid="study-guidance-eyebrow">Guidance process</span>
            <h2 data-testid="study-guidance-title">A clearer path, one step at a time.</h2>
            <p data-testid="study-guidance-description">Talk with BACT IT about program selection, documents, applications and the support you are looking for.</p>
          </div>
          <div className="guidance-steps" data-testid="study-guidance-steps">
            {steps.map((step, index) => (
              <div className="guidance-step" key={step} data-testid={`study-guidance-step-${index + 1}`}>
                <span data-testid={`study-guidance-step-${index + 1}-number`}>0{index + 1}</span>
                <p data-testid={`study-guidance-step-${index + 1}-copy`}>{step}</p>
                {index < steps.length - 1 && <CheckCircle2 size={17} aria-hidden="true" />}
              </div>
            ))}
            <p className="guidance-disclaimer" data-testid="study-guidance-disclaimer">
              Admission and visa outcomes are determined by the relevant institutions and authorities. No outcome is guaranteed.
            </p>
          </div>
        </div>
      </section>
      <section className="detail-cta" data-testid="study-abroad-cta">
        <div className="page-container detail-cta-inner">
          <div>
            <span className="eyebrow eyebrow-light" data-testid="study-abroad-cta-eyebrow">Your questions are a good first step</span>
            <h2 data-testid="study-abroad-cta-title">Let’s talk about what you’re looking for.</h2>
          </div>
          <Link to="/contact?service=Study%20Abroad" className="button button-primary" data-testid="study-abroad-contact-link">
            Start an enquiry <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
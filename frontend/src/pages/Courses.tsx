import { ArrowUpRight, BookOpen, Cloud, Code2, Database, ShieldCheck, Wifi } from "lucide-react";
import { Link } from "react-router-dom";
import PageIntro from "@/components/PageIntro";
import SectionHeading from "@/components/SectionHeading";
import { trainingTracks } from "@/lib/site-data";

const trainingImage =
  "https://images.unsplash.com/photo-1781092176313-8b8b1e9927c7?auto=format&fit=crop&w=1500&q=85";
const trackIcons = [Wifi, Database, ShieldCheck, BookOpen, Database, Code2, Cloud];

export default function Courses() {
  return (
    <div data-testid="courses-page">
      <PageIntro
        eyebrow="Training & courses"
        title="Build skills for what’s next."
        description="Explore professional IT learning areas and certifications. Ask us about course availability and the latest details."
        testId="courses-page-intro"
        image={trainingImage}
        imageAlt="Learners taking part in a technology class"
        actionLabel="Ask about training"
        actionTo="/contact?service=IT%20Training"
      />
      <section className="section-block training-tracks-section" data-testid="training-tracks-section">
        <div className="page-container">
          <SectionHeading
            eyebrow="Professional IT training"
            title="Explore a learning track."
            description="The topics below are provided as areas of study. Course schedules, duration, pricing, and syllabi are available by enquiry."
            testId="training-tracks-heading"
          />
          <div className="training-track-list" data-testid="training-track-list">
            {trainingTracks.map((track, index) => {
              const Icon = trackIcons[index];
              return (
                <article className="training-track" key={track.title} data-testid={`training-track-${index + 1}`}>
                  <span className="training-track-icon" data-testid={`training-track-${index + 1}-icon`}><Icon size={22} /></span>
                  <span className="training-track-number" data-testid={`training-track-${index + 1}-number`}>0{index + 1}</span>
                  <div className="training-track-copy">
                    <h3 data-testid={`training-track-${index + 1}-title`}>{track.title}</h3>
                    <p data-testid={`training-track-${index + 1}-courses`}>{track.courses}</p>
                  </div>
                  <Link
                    to={`/contact?service=${encodeURIComponent("IT Training")}`}
                    className="text-action"
                    data-testid={`training-track-${index + 1}-enquiry-link`}
                  >
                    Ask about this <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
          <p className="catalog-note" data-testid="training-catalog-note">
            Course details may vary. Contact BACT IT for current schedules, delivery options, and requirements.
          </p>
        </div>
      </section>
      <section className="detail-cta" data-testid="courses-contact-cta">
        <div className="page-container detail-cta-inner">
          <div>
            <span className="eyebrow eyebrow-light" data-testid="courses-contact-eyebrow">Professional development</span>
            <h2 data-testid="courses-contact-title">Looking for a particular course?</h2>
          </div>
          <Link to="/contact?service=IT%20Training" className="button button-primary" data-testid="courses-contact-link">
            Send a training enquiry <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
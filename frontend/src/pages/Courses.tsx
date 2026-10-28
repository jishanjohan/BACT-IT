import { useState } from "react";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  HardDrive,
  Server,
  ShieldCheck,
  Tag,
  Wifi,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageIntro from "@/components/PageIntro";
import SectionHeading from "@/components/SectionHeading";
import Testimonials from "@/components/Testimonials";
import { jobPlacement, trainingTracks } from "@/lib/site-data";

const trainingImage =
  "https://images.unsplash.com/photo-1781092176313-8b8b1e9927c7?auto=format&fit=crop&w=1500&q=85";
const trackIcons = [Wifi, Server, ShieldCheck, BookOpen, Database, Code2, HardDrive, Cloud];

export default function Courses() {
  const [openTracks, setOpenTracks] = useState<number[]>([0]);
  const toggleTrack = (index: number) =>
    setOpenTracks((current) => (current.includes(index) ? current.filter((i) => i !== index) : [...current, index]));

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
            description="Open any track to see why it matters, what you will learn, the benefits and the careers it leads to. Schedules, duration and fees are available by enquiry."
            testId="training-tracks-heading"
          />
          <div className="training-track-list" data-testid="training-track-list">
            {trainingTracks.map((track, index) => {
              const Icon = trackIcons[index];
              const n = index + 1;
              const isOpen = openTracks.includes(index);
              return (
                <article
                  className={`training-track${isOpen ? " is-open" : ""}`}
                  key={track.title}
                  id={`track-${track.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  data-testid={`training-track-${n}`}
                >
                  <h3 className="training-track-heading">
                  <button
                    type="button"
                    className="training-track-summary"
                    aria-expanded={isOpen}
                    aria-controls={`training-track-${n}-panel`}
                    onClick={() => toggleTrack(index)}
                    data-testid={`training-track-${n}-toggle`}
                  >
                    <span className="training-track-icon" data-testid={`training-track-${n}-icon`}><Icon size={22} /></span>
                    <span className="training-track-number" data-testid={`training-track-${n}-number`}>0{n}</span>
                    <span className="training-track-copy">
                      <span className="training-track-title" data-testid={`training-track-${n}-title`}>{track.heading}</span>
                      <span className="training-track-courses" data-testid={`training-track-${n}-courses`}>{track.courses}</span>
                    </span>
                    <span className="training-track-chevron" aria-hidden="true">
                      <span className="training-track-chevron-label">{isOpen ? "Hide details" : "View details"}</span>
                      <ChevronDown size={18} />
                    </span>
                  </button>
                  </h3>
                  <div
                    className="training-track-panel"
                    id={`training-track-${n}-panel`}
                    role="region"
                    aria-label={`${track.title} course details`}
                    inert={!isOpen}
                    data-testid={`training-track-${n}-panel`}
                  >
                    <div className="training-track-panel-inner">
                      <div className="training-track-why" data-testid={`training-track-${n}-why`}>
                        <h4>Why learn {track.title.toLowerCase()}?</h4>
                        <p>{track.why}</p>
                      </div>
                      <div className="training-track-columns">
                        <div className="training-track-block" data-testid={`training-track-${n}-learn`}>
                          <h4><GraduationCap size={16} aria-hidden="true" /> What you will learn</h4>
                          <ul>
                            {track.learn.map((item) => (
                              <li key={item}><Check size={14} aria-hidden="true" />{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="training-track-block" data-testid={`training-track-${n}-benefits`}>
                          <h4><Award size={16} aria-hidden="true" /> Benefits</h4>
                          <ul>
                            {track.benefits.map((item) => (
                              <li key={item}><Check size={14} aria-hidden="true" />{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="training-track-block" data-testid={`training-track-${n}-careers`}>
                          <h4><BriefcaseBusiness size={16} aria-hidden="true" /> Career opportunities</h4>
                          <ul className="training-track-careers">
                            {track.careers.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="training-track-footer">
                        <div className="training-track-keywords" data-testid={`training-track-${n}-keywords`}>
                          <span className="training-track-keywords-label"><Tag size={13} aria-hidden="true" /> Course keywords</span>
                          <ul>
                            {track.keywords.map((keyword) => (
                              <li key={keyword}>{keyword}</li>
                            ))}
                          </ul>
                        </div>
                        <Link
                          to={`/contact?service=${encodeURIComponent("IT Training")}`}
                          className="button button-primary training-track-enquire"
                          data-testid={`training-track-${n}-enquiry-link`}
                        >
                          Enquire about {track.title} <ArrowUpRight size={16} aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="catalog-note" data-testid="training-catalog-note">
            Course details may vary. Contact BACT IT for current schedules, delivery options, and requirements.
          </p>
        </div>
      </section>
      <section className="section-block job-placement-section" data-testid="job-placement-section">
        <div className="page-container job-placement-card">
          <span className="job-placement-icon" aria-hidden="true">
            <BriefcaseBusiness size={26} />
          </span>
          <div>
            <span className="eyebrow" data-testid="job-placement-eyebrow">Career support</span>
            <h2 data-testid="job-placement-title">{jobPlacement.title}</h2>
            <p data-testid="job-placement-description">{jobPlacement.description}</p>
          </div>
          <Link to="/contact?service=IT%20Training" className="button button-primary" data-testid="job-placement-enquiry-link">
            Ask about placement <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <Testimonials testId="courses-testimonials" />
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
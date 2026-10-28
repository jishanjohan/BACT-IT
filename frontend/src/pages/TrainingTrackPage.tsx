import { ArrowLeft, ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import PageIntro from "@/components/PageIntro";
import TrainingTrackDetails from "@/components/TrainingTrackDetails";
import { jobPlacement, trainingTracks } from "@/lib/site-data";

export default function TrainingTrackPage() {
  const { slug } = useParams();
  const track = trainingTracks.find((item) => item.slug === slug);

  if (!track) {
    return (
      <section className="section-block not-found-page" data-testid="track-not-found-page">
        <div className="page-container">
          <span className="eyebrow" data-testid="track-not-found-eyebrow">Training information</span>
          <h1 data-testid="track-not-found-title">We couldn’t find that course.</h1>
          <Link to="/courses#training-tracks" className="text-action" data-testid="track-not-found-link">
            <ArrowLeft size={16} aria-hidden="true" /> Back to Training
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div data-testid={`track-page-${track.slug}`}>
      <nav className="service-subnav" aria-label="Training navigation" data-testid="track-subnav">
        <div className="page-container service-subnav-inner">
          <Link to="/courses#training-tracks" className="service-subnav-back" data-testid="track-back-to-training-button">
            <ArrowLeft size={15} aria-hidden="true" /> Back to Training
          </Link>
        </div>
      </nav>
      <PageIntro
        eyebrow={`Professional IT training · ${track.courses}`}
        title={track.heading}
        description={`${track.title} training in Dhaka, Bangladesh, by BACT IT. ${track.why}`}
        testId="track-page-intro"
        actionLabel={`Enquire about ${track.title}`}
        actionTo={`/contact?service=${encodeURIComponent("IT Training")}`}
      />
      <section className="section-block track-page-body" data-testid="track-page-body">
        <div className="page-container">
          <TrainingTrackDetails track={track} testId="track-page" headingLevel="h2" detailedCourses />
        </div>
      </section>
      <section className="section-block job-placement-section" data-testid="track-page-placement">
        <div className="page-container job-placement-card">
          <span className="job-placement-icon" aria-hidden="true">
            <BriefcaseBusiness size={26} />
          </span>
          <div>
            <span className="eyebrow" data-testid="track-page-placement-eyebrow">Career support</span>
            <h2 data-testid="track-page-placement-title">{jobPlacement.title}</h2>
            <p data-testid="track-page-placement-description">{jobPlacement.description}</p>
          </div>
          <Link to="/contact?service=IT%20Training" className="button button-primary" data-testid="track-page-placement-link">
            Ask about placement <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section className="section-block other-services" data-testid="track-page-other-tracks">
        <div className="page-container">
          <div className="other-services-head">
            <h2 data-testid="track-page-other-title">Explore other training tracks</h2>
          </div>
          <div className="other-services-grid">
            {trainingTracks
              .filter((item) => item.slug !== track.slug)
              .map((item) => (
                <Link
                  key={item.slug}
                  to={`/courses/${item.slug}`}
                  className="other-service-card"
                  data-testid={`other-track-link-${item.slug}`}
                >
                  <strong>{item.title}</strong>
                  <span>{item.courses}</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

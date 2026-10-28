import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router-dom";
import CourseExplainer from "@/components/CourseExplainer";
import { trainingTracks } from "@/lib/site-data";
import { trackIcon } from "@/lib/track-icons";

// Long-form, SEO-friendly catalog of every training track and course, stacked vertically.
export default function TrainingCatalog() {
  const totalCourses = trainingTracks.reduce((sum, track) => sum + track.courseList.length, 0);
  return (
    <div className="training-catalog" id="training-catalog" data-testid="training-catalog">
      <div className="detail-head">
        <span className="eyebrow" data-testid="training-catalog-eyebrow">Professional IT training courses</span>
        <h2 data-testid="training-catalog-title">IT training courses in Dhaka, explained from beginner to expert.</h2>
        <p className="solutions-lead" data-testid="training-catalog-lead">
          {trainingTracks.length} learning tracks and {totalCourses} courses covering networking, servers, cybersecurity, advanced
          certifications, data analytics, programming, databases, cloud and Microsoft Office. For each track you’ll find why it
          matters, then every course with why to learn it, what it covers, who it suits and its standard duration.
        </p>
        <Link to="/courses" className="text-action" data-testid="service-detail-full-courses-link">
          See full course details, benefits and career paths <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>

      <nav className="catalog-jump" aria-label="Jump to a training track" data-testid="training-catalog-jump">
        {trainingTracks.map((track, index) => (
          <a key={track.slug} href={`#it-track-${track.slug}`} data-testid={`training-catalog-jump-${index + 1}`}>
            {track.title}
          </a>
        ))}
      </nav>

      <div className="catalog-tracks">
        {trainingTracks.map((track, index) => {
          const Icon = trackIcon(track.slug);
          const n = index + 1;
          return (
            <section className="catalog-track" id={`it-track-${track.slug}`} key={track.slug} data-testid={`training-catalog-track-${n}`}>
              <header className="catalog-track-head">
                <span className="training-track-icon" aria-hidden="true"><Icon size={22} /></span>
                <div>
                  <span className="training-track-number">{String(n).padStart(2, "0")} · {track.courseList.length} {track.courseList.length === 1 ? "course" : "courses"}</span>
                  <h3 data-testid={`training-catalog-track-${n}-title`}>{track.heading}</h3>
                  <p className="training-track-courses">{track.courses}</p>
                </div>
              </header>
              <div className="catalog-track-why" data-testid={`training-catalog-track-${n}-why`}>
                <strong>Why learn {track.title}?</strong>
                <p>{track.why}</p>
              </div>
              <div className="catalog-course-list">
                {track.courseList.map((course, ci) => (
                  <CourseExplainer key={course.name} course={course} testId={`training-catalog-track-${n}-course-${ci + 1}`} headingLevel="h4" />
                ))}
              </div>
              <div className="catalog-track-footer">
                <p className="catalog-track-careers" data-testid={`training-catalog-track-${n}-careers`}>
                  <BriefcaseBusiness size={15} aria-hidden="true" /> <strong>Career paths:</strong> {track.careers.join(" · ")}
                </p>
                <div className="training-track-actions">
                  <Link to={`/courses/${track.slug}`} className="text-action" data-testid={`training-catalog-track-${n}-page-link`}>
                    Full {track.title} course page <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                  <Link
                    to={`/contact?service=${encodeURIComponent("IT Training")}`}
                    className="button button-primary training-track-enquire"
                    data-testid={`training-catalog-track-${n}-enquiry-link`}
                  >
                    Enquire about {track.title} <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

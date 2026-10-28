import { ArrowUpRight, Award, BriefcaseBusiness, Check, Clock, GraduationCap, Layers, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import CourseExplainer from "@/components/CourseExplainer";
import type { TrainingTrack } from "@/lib/site-data";

interface TrainingTrackDetailsProps {
  track: TrainingTrack;
  testId: string;
  // h4 inside the Training page accordion, h2 on a track's own page.
  headingLevel: "h2" | "h4";
  showPageLink?: boolean;
  // Track page: full vertical write-up per course instead of compact cards.
  detailedCourses?: boolean;
}

export default function TrainingTrackDetails({ track, testId, headingLevel, showPageLink = false, detailedCourses = false }: TrainingTrackDetailsProps) {
  const H = headingLevel;
  return (
    <>
      <div className="training-track-why" data-testid={`${testId}-why`}>
        <H>Why learn {track.title}?</H>
        <p>{track.why}</p>
      </div>
      <div className="track-course-list-block" data-testid={`${testId}-course-list`}>
        <H><Layers size={16} aria-hidden="true" /> Courses &amp; standard duration</H>
        {detailedCourses ? (
          <div className="catalog-course-list">
            {track.courseList.map((course, index) => (
              <CourseExplainer key={course.name} course={course} testId={`${testId}-course-${index + 1}`} headingLevel="h3" />
            ))}
          </div>
        ) : (
          <ul className="track-course-list">
            {track.courseList.map((course, index) => (
              <li className="track-course" key={course.name} data-testid={`${testId}-course-${index + 1}`}>
                <div className="track-course-head">
                  <strong data-testid={`${testId}-course-${index + 1}-name`}>{course.name}</strong>
                  <span className={`track-course-level level-${course.level.toLowerCase()}`} data-testid={`${testId}-course-${index + 1}-level`}>
                    {course.level}
                  </span>
                </div>
                <span className="track-course-duration" data-testid={`${testId}-course-${index + 1}-duration`}>
                  <Clock size={13} aria-hidden="true" /> {course.hours} hours · {course.span}
                </span>
                <p data-testid={`${testId}-course-${index + 1}-description`}>{course.description}</p>
              </li>
            ))}
          </ul>
        )}
        <p className="track-course-note" data-testid={`${testId}-duration-note`}>
          Durations are standard guides. Weekday, weekend and corporate batches are available, so ask us for the current schedule.
        </p>
      </div>
      <div className="training-track-columns">
        <div className="training-track-block" data-testid={`${testId}-learn`}>
          <H><GraduationCap size={16} aria-hidden="true" /> What you will learn</H>
          <ul>
            {track.learn.map((item) => (
              <li key={item}><Check size={14} aria-hidden="true" />{item}</li>
            ))}
          </ul>
        </div>
        <div className="training-track-block" data-testid={`${testId}-benefits`}>
          <H><Award size={16} aria-hidden="true" /> Benefits</H>
          <ul>
            {track.benefits.map((item) => (
              <li key={item}><Check size={14} aria-hidden="true" />{item}</li>
            ))}
          </ul>
        </div>
        <div className="training-track-block" data-testid={`${testId}-careers`}>
          <H><BriefcaseBusiness size={16} aria-hidden="true" /> Career opportunities</H>
          <ul className="training-track-careers">
            {track.careers.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="training-track-footer">
        <div className="training-track-keywords" data-testid={`${testId}-keywords`}>
          <span className="training-track-keywords-label"><Tag size={13} aria-hidden="true" /> Course keywords</span>
          <ul>
            {track.keywords.map((keyword) => (
              <li key={keyword}>{keyword}</li>
            ))}
          </ul>
        </div>
        <div className="training-track-actions">
          {showPageLink && (
            <Link to={`/courses/${track.slug}`} className="text-action" data-testid={`${testId}-page-link`}>
              Open full course page <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          )}
          <Link
            to={`/contact?service=${encodeURIComponent("IT Training")}`}
            className="button button-primary training-track-enquire"
            data-testid={`${testId}-enquiry-link`}
          >
            Enquire about {track.title} <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </>
  );
}

import { Check, Clock, Users } from "lucide-react";
import type { TrackCourse } from "@/lib/site-data";

export const courseTitle = (name: string) => (/training|preparation/i.test(name) ? name : `${name} Training`);
export const courseAnchor = (name: string) => `course-${name.toLowerCase().replace(/#/g, "sharp").replace(/\+/g, "plus").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;

// Full, vertical write-up of one course: why learn it, what it covers, who it suits, duration and level.
export default function CourseExplainer({ course, testId, headingLevel }: { course: TrackCourse; testId: string; headingLevel: "h3" | "h4" }) {
  const H = headingLevel;
  return (
    <article className="course-explainer" id={courseAnchor(course.name)} data-testid={testId}>
      <div className="course-explainer-head">
        <H data-testid={`${testId}-name`}>{courseTitle(course.name)}</H>
        <div className="course-explainer-meta">
          <span className="track-course-duration" data-testid={`${testId}-duration`}>
            <Clock size={13} aria-hidden="true" /> {course.hours} hours · {course.span}
          </span>
          <span className={`track-course-level level-${course.level.toLowerCase()}`} data-testid={`${testId}-level`}>
            {course.level}
          </span>
        </div>
      </div>
      <p className="course-explainer-desc" data-testid={`${testId}-description`}>{course.description}</p>
      <div className="course-explainer-grid">
        <div className="course-explainer-why" data-testid={`${testId}-why`}>
          <strong>Why learn {course.name}?</strong>
          <p>{course.why}</p>
        </div>
        <div className="course-explainer-topics" data-testid={`${testId}-topics`}>
          <strong>What you’ll cover</strong>
          <ul>
            {course.topics.map((topic) => (
              <li key={topic}><Check size={14} aria-hidden="true" />{topic}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="course-explainer-audience" data-testid={`${testId}-audience`}>
        <Users size={14} aria-hidden="true" /> <strong>Who it’s for:</strong> {course.audience}
      </p>
    </article>
  );
}

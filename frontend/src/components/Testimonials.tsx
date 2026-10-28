import { Quote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/lib/site-data";

export default function Testimonials({ testId }: { testId: string }) {
  return (
    <section className="section-block testimonials-section" data-testid={testId}>
      <div className="page-container">
        <SectionHeading
          eyebrow="Our learners’ messages"
          title="What people say about BACT IT."
          testId={`${testId}-heading`}
        />
        <div className="testimonial-grid" data-testid={`${testId}-grid`}>
          {testimonials.map((item, index) => (
            <figure className="testimonial-card" key={item.quote} data-testid={`${testId}-card-${index + 1}`}>
              <Quote size={22} className="testimonial-mark" aria-hidden="true" />
              <blockquote data-testid={`${testId}-card-${index + 1}-quote`}>{item.quote}</blockquote>
              <figcaption>
                <strong data-testid={`${testId}-card-${index + 1}-name`}>{item.name}</strong>
                <span data-testid={`${testId}-card-${index + 1}-role`}>{item.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

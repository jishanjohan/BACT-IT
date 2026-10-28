import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageIntro from "@/components/PageIntro";
import SectionHeading from "@/components/SectionHeading";
import { differentiators } from "@/lib/site-data";

const teamImage =
  "https://images.unsplash.com/photo-1580894899378-92e56886cd4d?auto=format&fit=crop&w=1300&q=85";

export default function About() {
  return (
    <div data-testid="about-page">
      <PageIntro
        eyebrow="About BACT IT"
        title="Technology that connects, automates and secures your business."
        description="We bring together technology services, learning and guidance to help organizations move forward with clarity."
        testId="about-page-intro"
        image={teamImage}
        imageAlt="Technology colleagues discussing a project together"
        actionLabel="Explore our services"
        actionTo="/services"
      />
      <section className="section-block about-story" data-testid="about-story-section">
        <div className="page-container about-story-grid">
          <div className="about-story-aside">
            <span className="eyebrow" data-testid="about-story-eyebrow">One connected partner</span>
            <p data-testid="about-story-aside-copy">Business Application &amp; Communication Technology</p>
          </div>
          <div className="about-story-copy">
            <h2 data-testid="about-story-title">Technology with purpose, built around your needs.</h2>
            <p data-testid="about-story-paragraph-one">
              BACT IT delivers software, secure IT infrastructure, cybersecurity, AI integration,
              professional IT training, study abroad guidance, and digital marketing solutions.
            </p>
            <p data-testid="about-story-paragraph-two">
              Our integrated approach brings these capabilities together, with solutions shaped
              around each organization and designed to evolve as needs change.
            </p>
            <Link to="/contact" className="text-action" data-testid="about-contact-link">
              Tell us what you need <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <section className="section-block about-principles" data-testid="about-principles-section">
        <div className="page-container">
          <SectionHeading
            eyebrow="Why choose BACT IT?"
            title="The way we approach technology."
            description="A clear set of principles guides how we think about solutions, security, and long-term fit."
            testId="about-principles-heading"
          />
          <div className="principles-grid" data-testid="about-principles-grid">
            {differentiators.map((item, index) => (
              <article key={item.title} className="principle-card" data-testid={`about-principle-${index + 1}`}>
                <span data-testid={`about-principle-${index + 1}-number`}>0{index + 1}</span>
                <h3 data-testid={`about-principle-${index + 1}-title`}>{item.title}</h3>
                <p data-testid={`about-principle-${index + 1}-description`}>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
import { ArrowUpRight, Building2, GraduationCap, Landmark, RadioTower, Rocket, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import PageIntro from "@/components/PageIntro";
import SectionHeading from "@/components/SectionHeading";
import { industries } from "@/lib/site-data";

const industryIcons = [Landmark, Building2, GraduationCap, ShoppingBag, RadioTower, Rocket];

export default function Industries() {
  return (
    <div data-testid="industries-page">
      <PageIntro
        eyebrow="Industries we serve"
        title="Technology that fits your field."
        description="See how BACT IT can support organizations across the public sector, enterprise, healthcare, education, retail, telecom and growing businesses."
        testId="industries-page-intro"
      />
      <section className="section-block industry-matrix-section" data-testid="industries-matrix-section">
        <div className="page-container">
          <SectionHeading
            eyebrow="How we support you"
            title="Your context matters."
            description="Start with the sector closest to your work and explore the capabilities that matter most to it."
            testId="industries-matrix-heading"
          />
          <div className="industry-matrix" data-testid="industries-matrix">
            {industries.map((industry, index) => {
              const Icon = industryIcons[index];
              return (
                <article className="industry-card" key={industry.name} data-testid={`industry-card-${index + 1}`}>
                  <span className="industry-card-icon" data-testid={`industry-card-${index + 1}-icon`}><Icon size={22} /></span>
                  <span className="industry-card-number" data-testid={`industry-card-${index + 1}-number`}>0{index + 1}</span>
                  <h3 data-testid={`industry-card-${index + 1}-title`}>{industry.name}</h3>
                  <p data-testid={`industry-card-${index + 1}-description`}>{industry.description}</p>
                  <Link
                    to="/services"
                    className="industry-card-link"
                    aria-label={`Explore BACT IT services for ${industry.name}`}
                    data-testid={`industry-card-${index + 1}-services-link`}
                  >
                    <ArrowUpRight size={18} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="closing-cta" data-testid="industries-closing-cta">
        <div className="page-container closing-cta-inner">
          <div>
            <span className="eyebrow" data-testid="industries-closing-eyebrow">Need a tailored approach?</span>
            <h2 data-testid="industries-closing-title">Tell us about your organization.</h2>
          </div>
          <Link to="/contact" className="button button-primary" data-testid="industries-contact-link">
            Talk to BACT IT <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}

import { ArrowUpRight, Building2, GraduationCap, HeartPulse, Landmark, RadioTower, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import PageIntro from "@/components/PageIntro";
import SectionHeading from "@/components/SectionHeading";
import { industries } from "@/lib/site-data";

const industryIcons = [Building2, Landmark, HeartPulse, GraduationCap, ShoppingBag, RadioTower, Building2];

export default function Industries() {
  return (
    <div data-testid="industries-page">
      <PageIntro
        eyebrow="Industries we serve"
        title="Technology that fits your field."
        description="We support organizations across public services, business, healthcare, education, retail, technology and more."
        testId="industries-page-intro"
      />
      <section className="section-block industry-matrix-section" data-testid="industries-matrix-section">
        <div className="page-container">
          <SectionHeading
            eyebrow="Made for different needs"
            title="Your context matters."
            description="Every organization has its own priorities. Start with the sector closest to your work and explore relevant capabilities."
            testId="industries-matrix-heading"
          />
          <div className="industry-matrix" data-testid="industries-matrix">
            {industries.map((industry, index) => {
              const Icon = industryIcons[index];
              return (
                <article className="industry-card" key={industry} data-testid={`industry-card-${index + 1}`}>
                  <span className="industry-card-icon" data-testid={`industry-card-${index + 1}-icon`}><Icon size={22} /></span>
                  <span className="industry-card-number" data-testid={`industry-card-${index + 1}-number`}>0{index + 1}</span>
                  <h3 data-testid={`industry-card-${index + 1}-title`}>{industry}</h3>
                  <Link
                    to="/services"
                    className="industry-card-link"
                    aria-label={`Explore BACT IT services for ${industry}`}
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
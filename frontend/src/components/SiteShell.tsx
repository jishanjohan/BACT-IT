import { useState, type ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { contactDetails, services } from "@/lib/site-data";

const navigation = [
  { label: "About", to: "/about", id: "nav-about-link" },
  { label: "Services", to: "/services", id: "nav-services-link" },
  { label: "Industries", to: "/industries", id: "nav-industries-link" },
  { label: "Training", to: "/courses", id: "nav-training-link" },
  { label: "Study abroad", to: "/study-abroad", id: "nav-study-abroad-link" },
  { label: "Portfolio", to: "/portfolio", id: "nav-portfolio-link" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header" data-testid="site-header">
      <div className="header-inner">
        <Link
          to="/"
          className="brand-lockup"
          data-testid="brand-home-link"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark" data-testid="brand-mark">B</span>
          <span className="brand-name" data-testid="brand-name">BACT<span>IT</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation" data-testid="desktop-navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
              data-testid={item.id}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" className="header-cta" data-testid="nav-contact-link">
          Let’s talk <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
        <button
          className="mobile-menu-button"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          data-testid="mobile-navigation-toggle-button"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation" data-testid="mobile-navigation-panel">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              data-testid={`mobile-${item.id}`}
            >
              {item.label}
            </Link>
          ))}
          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              onClick={() => setOpen(false)}
              data-testid={`mobile-service-${service.slug}-link`}
            >
              {service.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} data-testid="mobile-contact-link">
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer" data-testid="site-footer">
      <div className="footer-top page-container">
        <div className="footer-brand-block" data-testid="footer-brand-block">
          <Link to="/" className="brand-lockup footer-brand" data-testid="footer-brand-home-link">
            <span className="brand-mark" data-testid="footer-brand-mark">B</span>
            <span className="brand-name" data-testid="footer-brand-name">BACT<span>IT</span></span>
          </Link>
          <p data-testid="footer-brand-description">
            Technology that connects, automates and secures your business.
          </p>
        </div>
        <div className="footer-column" data-testid="footer-explore-column">
          <h3 data-testid="footer-explore-heading">Explore</h3>
          <Link to="/about" data-testid="footer-about-link">About BACT IT</Link>
          <Link to="/services" data-testid="footer-services-link">Our services</Link>
          <Link to="/industries" data-testid="footer-industries-link">Industries</Link>
          <Link to="/portfolio" data-testid="footer-portfolio-link">Projects & portfolio</Link>
        </div>
        <div className="footer-column" data-testid="footer-learning-column">
          <h3 data-testid="footer-learning-heading">Learning & guidance</h3>
          <Link to="/courses" data-testid="footer-courses-link">Training & courses</Link>
          <Link to="/study-abroad" data-testid="footer-study-abroad-link">Study abroad</Link>
          <Link to="/services/it-training" data-testid="footer-it-training-link">
            Professional IT training
          </Link>
        </div>
        <div className="footer-column footer-contact-column" data-testid="footer-contact-column">
          <h3 data-testid="footer-contact-heading">Get in touch</h3>
          <a href={`mailto:${contactDetails.email}`} data-testid="footer-email-link">
            {contactDetails.email}
          </a>
          <Link to="/contact" className="footer-contact-link" data-testid="footer-contact-link">
            Contact our team <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="footer-bottom page-container">
        <span data-testid="footer-legal-copy">
          © {new Date().getFullYear()} BACT IT. All rights reserved.
        </span>
        <a
          href={`https://${contactDetails.website}`}
          target="_blank"
          rel="noreferrer"
          data-testid="footer-website-link"
        >
          {contactDetails.website}
        </a>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="site-frame">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
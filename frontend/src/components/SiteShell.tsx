import { useEffect, useState, type ReactNode } from "react";
import ChatWidget from "@/components/ChatWidget";
import RouteSeo from "@/components/RouteSeo";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { companyFullName, contactDetails, offices, services, socialLinks, whatsapp } from "@/lib/site-data";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";

const navigation = [
  { label: "About", to: "/about", id: "nav-about-link" },
  { label: "Services", to: "/services", id: "nav-services-link" },
  { label: "BAIDA", to: "/flagship-product", id: "nav-flagship-link" },
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
          <img src="/logo-horizontal.png" alt="Bact IT" className="brand-logo" data-testid="brand-logo" />
          <span className="brand-fullname" data-testid="brand-fullname">
            Business Application &amp;<br />Communication Technology
          </span>
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
              {service.title}
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
            <img src="/logo-horizontal.png" alt="Bact IT" className="brand-logo" data-testid="footer-brand-logo" />
          </Link>
          <p className="footer-fullname" data-testid="footer-brand-fullname">{companyFullName}</p>
          <p data-testid="footer-brand-description">
            Technology that connects, automates and secures your business.
          </p>
          <div className="footer-socials" data-testid="footer-social-links">
            <a href={socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="BACT IT on Facebook" data-testid="footer-facebook-link">
              <Facebook size={18} />
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="BACT IT on Instagram" data-testid="footer-instagram-link">
              <Instagram size={18} />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="BACT IT on LinkedIn" data-testid="footer-linkedin-link">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
        <div className="footer-column" data-testid="footer-explore-column">
          <h3 data-testid="footer-explore-heading">Explore</h3>
          <Link to="/about" data-testid="footer-about-link">About BACT IT</Link>
          <Link to="/services" data-testid="footer-services-link">Our services</Link>
          <Link to="/flagship-product" data-testid="footer-flagship-link">BAIDA flagship product</Link>
          <Link to="/industries" data-testid="footer-industries-link">Industries</Link>
          <Link to="/portfolio" data-testid="footer-portfolio-link">Projects & portfolio</Link>
          <Link to="/admin" data-testid="footer-team-login-link">Team login</Link>
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
          <a
            href={whatsapp.href}
            target="_blank"
            rel="noreferrer"
            className="footer-whatsapp"
            data-testid="footer-whatsapp-link"
          >
            <SiWhatsapp size={16} aria-hidden="true" /> WhatsApp {whatsapp.display}
          </a>
          <Link to="/contact" className="footer-contact-link" data-testid="footer-contact-link">
            Contact our team <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="footer-offices page-container" data-testid="footer-offices">
        {offices.map((office) => (
          <div className="footer-office" key={office.country} data-testid={`footer-office-${office.country.toLowerCase()}`}>
            <h4 data-testid={`footer-office-${office.country.toLowerCase()}-country`}>
              <MapPin size={15} aria-hidden="true" /> {office.country}
            </h4>
            <p data-testid={`footer-office-${office.country.toLowerCase()}-address`}>{office.address}</p>
            <a href={`tel:${office.tel}`} data-testid={`footer-office-${office.country.toLowerCase()}-phone`}>
              <Phone size={13} aria-hidden="true" /> {office.phone}
            </a>
            <a href={`mailto:${contactDetails.email}`} data-testid={`footer-office-${office.country.toLowerCase()}-email`}>
              <Mail size={13} aria-hidden="true" /> {contactDetails.email}
            </a>
          </div>
        ))}
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

// Scroll to the #hash target after navigation (e.g. "/#services"), otherwise to the top of the new page.
function useScrollOnNavigate() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    const id = hash.slice(1);
    let tries = 0;
    let frame = 0;
    let settle = 0;
    const attempt = () => {
      const target = document.getElementById(id);
      if (target) {
        // Jump instantly (long pages make smooth scrolling unreliable), then correct once more after layout settles.
        target.scrollIntoView({ behavior: "instant", block: "start" });
        settle = window.setTimeout(() => target.scrollIntoView({ behavior: "instant", block: "start" }), 350);
      } else if (tries++ < 30) {
        frame = requestAnimationFrame(attempt);
      }
    };
    frame = requestAnimationFrame(attempt);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(settle);
    };
  }, [pathname, hash]);
}

export function SiteShell({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  useScrollOnNavigate();
  const isStaffArea = ["/admin", "/sign-in", "/sign-up"].some((p) => pathname.startsWith(p));
  return (
    <div className="site-frame">
      <RouteSeo />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      {!isStaffArea && <ChatWidget />}
    </div>
  );
}
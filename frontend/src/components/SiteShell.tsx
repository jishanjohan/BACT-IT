import { Fragment, useEffect, useState, type ReactNode } from "react";
import ChatWidget from "@/components/ChatWidget";
import RouteSeo from "@/components/RouteSeo";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, ChevronDown, Facebook, Instagram, Linkedin, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { companyFullName, contactDetails, offices, services, socialLinks, whatsapp } from "@/lib/site-data";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import { serviceMenu } from "@/lib/service-menu";

type NavSection = { title: string; to?: string; links: { label: string; to: string }[] };
type NavItem = { label: string; to: string; id: string; sections?: NavSection[] };

// IT Training gets its own menu, and Study Abroad is already in the main menu,
// so both are removed from the Services mega menu.
const trainingService = serviceMenu.find((s) => s.slug === "it-training" || s.to === "/services/it-training");
const servicesMenuItems = serviceMenu.filter(
  (s) => s !== trainingService && s.slug !== "study-abroad" && !s.to.endsWith("/study-abroad"),
);

const navigation: NavItem[] = [
  {
    label: "About",
    to: "/about",
    id: "nav-about-link",
    sections: [
      { title: "About BACT IT", to: "/about", links: [] },
      {
        title: "Global Offices",
        links: [
          { label: "Australia", to: "/australia" },
          { label: "USA", to: "/usa" },
        ],
      },
    ],
  },
  { label: "Services", to: "/services", id: "nav-services-link" },
  {
    label: "Flagship Product",
    to: "/flagship-product",
    id: "nav-flagship-link",
    sections: [{ title: "BAIDA", to: "/flagship-product", links: [] }],
  },
  {
    label: "IT Training",
    to: "/courses",
    id: "nav-training-link",
    sections: [
      {
        title: "Professional IT Training",
        to: "/courses",
        links: (trainingService?.children ?? []).map((child) => ({ label: child.title, to: child.to })),
      },
    ],
  },
  { label: "Industries", to: "/industries", id: "nav-industries-link" },
  { label: "Study abroad", to: "/study-abroad", id: "nav-study-abroad-link" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const { pathname } = useLocation();

  // Close all menus whenever the route changes.
  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  const dropdownHandlers = (key: string) => ({
    onMouseEnter: () => setOpenMenu(key),
    onMouseLeave: () => setOpenMenu(null),
    onFocus: () => setOpenMenu(key),
    onBlur: (event: React.FocusEvent<HTMLDivElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpenMenu(null);
    },
    onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => event.key === "Escape" && setOpenMenu(null),
  });

  const renderDesktopItem = (item: NavItem) => {
    if (item.to === "/services") {
      const isOpen = openMenu === item.to;
      return (
        <div
          key={item.to}
          className={`nav-dropdown${isOpen ? " is-open" : ""}`}
          {...dropdownHandlers(item.to)}
          data-testid="nav-services-dropdown"
        >
          <NavLink
            to={item.to}
            className={({ isActive }) => `nav-link${isActive || pathname.startsWith("/services/") ? " active" : ""}`}
            aria-haspopup="true"
            aria-expanded={isOpen}
            data-testid={item.id}
          >
            {item.label}
            <ChevronDown size={14} aria-hidden="true" className="nav-dropdown-chevron" />
          </NavLink>
          <div className="mega-menu" role="menu" data-testid="nav-services-mega-menu">
            <div className="mega-menu-grid services-grid">
              {servicesMenuItems.map((service) => (
                <div className={`mega-menu-col${service.children.length ? " has-children" : ""}`} key={service.slug}>
                  <Link to={service.to} className="mega-menu-title" data-testid={`mega-menu-${service.slug}-link`}>
                    {service.title}
                  </Link>
                  {service.children.length > 0 && (
                    <ul>
                      {service.children.map((child) => (
                        <li key={child.to}>
                          <Link to={child.to} data-testid={`mega-menu-item-${child.to.split("/").pop()}`}>
                            {child.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            <Link to="/services" className="text-action mega-menu-all" data-testid="mega-menu-all-services-link">
              View all services <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      );
    }

    if (item.sections) {
      const isOpen = openMenu === item.to;
      return (
        <div
          key={item.to}
          className={`nav-dropdown${isOpen ? " is-open" : ""}`}
          {...dropdownHandlers(item.to)}
          data-testid={`${item.id}-dropdown`}
        >
          <NavLink
            to={item.to}
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            aria-haspopup="true"
            aria-expanded={isOpen}
            data-testid={item.id}
          >
            {item.label}
            <ChevronDown size={14} aria-hidden="true" className="nav-dropdown-chevron" />
          </NavLink>
          <div className="mega-menu nav-small-menu" role="menu" data-testid={`${item.id}-menu`}>
            <div className="mega-menu-grid">
              {item.sections.map((section) => (
                <div className={`mega-menu-col${section.links.length ? " has-children" : ""}`} key={section.title}>
                  {section.to ? (
                    <Link to={section.to} className="mega-menu-title">
                      {section.title}
                    </Link>
                  ) : (
                    <span className="mega-menu-title">{section.title}</span>
                  )}
                  {section.links.length > 0 && (
                    <ul>
                      {section.links.map((link) => (
                        <li key={link.to}>
                          <Link to={link.to}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <NavLink
        key={item.to}
        to={item.to}
        className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
        data-testid={item.id}
      >
        {item.label}
      </NavLink>
    );
  };

  const renderMobileItem = (item: NavItem) => {
    if (item.to === "/services") {
      return (
        <details className="mobile-group" key={item.to} data-testid="mobile-services-group">
          <summary data-testid={`mobile-${item.id}`}>
            {item.label}
            <ChevronDown size={16} aria-hidden="true" />
          </summary>
          <div className="mobile-group-body">
            <Link to="/services" onClick={() => setOpen(false)} data-testid="mobile-all-services-link">
              All services
            </Link>
            {servicesMenuItems.map((service) =>
              service.children.length ? (
                <details className="mobile-subgroup" key={service.slug} data-testid={`mobile-service-${service.slug}-group`}>
                  <summary data-testid={`mobile-service-${service.slug}-toggle`}>
                    {service.title}
                    <ChevronDown size={15} aria-hidden="true" />
                  </summary>
                  <div className="mobile-subgroup-body">
                    <Link to={service.to} onClick={() => setOpen(false)} data-testid={`mobile-service-${service.slug}-link`}>
                      {service.title} overview
                    </Link>
                    {service.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        onClick={() => setOpen(false)}
                        data-testid={`mobile-menu-item-${child.to.split("/").pop()}`}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={service.slug}
                  to={service.to}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-service-${service.slug}-link`}
                >
                  {service.title}
                </Link>
              ),
            )}
          </div>
        </details>
      );
    }

    if (item.sections) {
      return (
        <details className="mobile-group" key={item.to} data-testid={`mobile-${item.id}-group`}>
          <summary data-testid={`mobile-${item.id}`}>
            {item.label}
            <ChevronDown size={16} aria-hidden="true" />
          </summary>
          <div className="mobile-group-body">
            {item.sections.map((section) => (
              <Fragment key={section.title}>
                {section.to ? (
                  <Link to={section.to} onClick={() => setOpen(false)}>
                    {section.title}
                  </Link>
                ) : (
                  <span className="mobile-group-label">{section.title}</span>
                )}
                {section.links.map((link) => (
                  <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>
                    {link.label}
                  </Link>
                ))}
              </Fragment>
            ))}
          </div>
        </details>
      );
    }

    return (
      <Link key={item.to} to={item.to} onClick={() => setOpen(false)} data-testid={`mobile-${item.id}`}>
        {item.label}
      </Link>
    );
  };

  return (
    <header className="site-header" data-testid="site-header">
      <div className="header-inner">
        <Link to="/" className="brand-lockup" data-testid="brand-home-link" onClick={() => setOpen(false)}>
          <img src="/logo-horizontal.png" alt="Bact IT" className="brand-logo" data-testid="brand-logo" />
          <span className="brand-fullname" data-testid="brand-fullname">
            Business Application &amp;<br />Communication Technology
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation" data-testid="desktop-navigation">
          {navigation.map(renderDesktopItem)}
        </nav>

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
          {navigation.map(renderMobileItem)}
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
          <p data-testid="footer-brand-description">Technology that connects, automates and secures your business.</p>
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
          <Link to="/australia" data-testid="footer-australia-link">BACT IT Australia</Link>
          <Link to="/usa" data-testid="footer-usa-link">BACT IT USA</Link>
          <Link to="/admin" data-testid="footer-team-login-link">Team login</Link>
        </div>

        <div className="footer-column" data-testid="footer-learning-column">
          <h3 data-testid="footer-learning-heading">Learning & guidance</h3>
          <Link to="/courses" data-testid="footer-courses-link">Training & courses</Link>
          <Link to="/study-abroad" data-testid="footer-study-abroad-link">Study abroad</Link>
          <Link to="/services/it-training" data-testid="footer-it-training-link">Professional IT training</Link>
        </div>

        <div className="footer-column footer-contact-column" data-testid="footer-contact-column">
          <h3 data-testid="footer-contact-heading">Get in touch</h3>
          <a href={`mailto:${contactDetails.email}`} data-testid="footer-email-link">{contactDetails.email}</a>
          <a href={whatsapp.href} target="_blank" rel="noreferrer" className="footer-whatsapp" data-testid="footer-whatsapp-link">
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
        <span data-testid="footer-legal-copy">© {new Date().getFullYear()} BACT IT. All rights reserved.</span>
        <a href={`https://${contactDetails.website}`} target="_blank" rel="noreferrer" data-testid="footer-website-link">
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
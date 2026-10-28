import { ArrowUpRight, Globe2, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import PageIntro from "@/components/PageIntro";
import { contactDetails } from "@/lib/site-data";

export default function Contact() {
  return (
    <div data-testid="contact-page">
      <PageIntro
        eyebrow="Contact BACT IT"
        title="Let’s discuss your technology requirements."
        description="Tell us a little about what you’re looking for and the right team can follow up with you."
        testId="contact-page-intro"
      />
      <section className="section-block contact-section" data-testid="contact-form-section">
        <div className="page-container contact-layout">
          <aside className="contact-aside" data-testid="contact-details-panel">
            <span className="eyebrow" data-testid="contact-details-eyebrow">Start a conversation</span>
            <h2 data-testid="contact-details-title">We’re here to help you find a next step.</h2>
            <p data-testid="contact-details-description">Share your question or requirement and we’ll get back to you using your preferred contact details.</p>
            <a className="contact-detail-link" href={`mailto:${contactDetails.email}`} data-testid="contact-email-link">
              <span data-testid="contact-email-icon"><Mail size={18} /></span>
              <span><small data-testid="contact-email-label">Email us</small><strong data-testid="contact-email-value">{contactDetails.email}</strong></span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a className="contact-detail-link" href={`https://${contactDetails.website}`} target="_blank" rel="noreferrer" data-testid="contact-website-link">
              <span data-testid="contact-website-icon"><Globe2 size={18} /></span>
              <span><small data-testid="contact-website-label">Visit our website</small><strong data-testid="contact-website-value">{contactDetails.website}</strong></span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <div className="contact-aside-note" data-testid="contact-aside-note">
              <span data-testid="contact-aside-note-mark">B</span>
              <p data-testid="contact-aside-note-copy">Business Application &amp; Communication Technology</p>
            </div>
          </aside>
          <div className="contact-form-panel" data-testid="contact-form-panel">
            <div className="contact-form-heading" data-testid="contact-form-heading">
              <span className="eyebrow" data-testid="contact-form-eyebrow">Your enquiry</span>
              <h2 data-testid="contact-form-title">How can we help?</h2>
              <p data-testid="contact-form-description">Fields marked with * are required.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
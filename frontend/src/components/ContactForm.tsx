import { useState, type FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { apiPost } from "@/lib/api";
import type { InquiryCreate, InquiryCreated, ServiceInterest } from "@/lib/inquiries";
import { services } from "@/lib/site-data";

const interests: ServiceInterest[] = [
  ...services.map((service) => service.name),
  "BAIDA Platform",
  "General enquiry",
];

export default function ContactForm() {
  const [params] = useSearchParams();
  const requestedService = params.get("service");
  const initialService = interests.find((item) => item === requestedService) ?? "General enquiry";
  const [service, setService] = useState<ServiceInterest>(initialService);
  const [submitted, setSubmitted] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const mutation = useMutation({
    mutationFn: (payload: InquiryCreate) => apiPost<InquiryCreated>("/inquiries", payload),
    onSuccess: () => {
      setSubmitted(true);
      toast.success("Your enquiry has been received.");
    },
    onError: () => {
      toast.error("We couldn’t send your enquiry. Please try again or email info@bactit.com.");
    },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    mutation.mutate({
      full_name: String(values.get("full_name") ?? ""),
      organization: String(values.get("organization") ?? ""),
      email: String(values.get("email") ?? ""),
      phone: String(values.get("phone") ?? ""),
      service,
      message: String(values.get("message") ?? ""),
    });
  };

  if (submitted) {
    return (
      <div className="success-panel" role="status" data-testid="contact-form-success-panel">
        <span className="success-icon" data-testid="contact-form-success-icon">
          <CheckCircle2 size={28} />
        </span>
        <h2 data-testid="contact-form-success-heading">Thanks for reaching out.</h2>
        <p data-testid="contact-form-success-message">
          Your enquiry is with our team. We’ll be in touch using the contact details you provided.
        </p>
        <button
          className="text-action"
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormKey((key) => key + 1);
          }}
          data-testid="contact-form-send-another-button"
        >
          Send another enquiry <ArrowUpRight size={16} aria-hidden="true" />
        </button>
      </div>
    );
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      key={formKey}
      data-testid="contact-form"
    >
      <div className="form-two-column" data-testid="contact-form-personal-details">
        <label className="field" data-testid="contact-form-name-field">
          <span data-testid="contact-form-name-label">Full name <b>*</b></span>
          <input
            name="full_name"
            autoComplete="name"
            required
            minLength={2}
            placeholder="Your name"
            data-testid="contact-form-name-input"
          />
        </label>
        <label className="field" data-testid="contact-form-organization-field">
          <span data-testid="contact-form-organization-label">Organization / company</span>
          <input
            name="organization"
            autoComplete="organization"
            placeholder="Where you work or study"
            data-testid="contact-form-organization-input"
          />
        </label>
        <label className="field" data-testid="contact-form-email-field">
          <span data-testid="contact-form-email-label">Email address <b>*</b></span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            data-testid="contact-form-email-input"
          />
        </label>
        <label className="field" data-testid="contact-form-phone-field">
          <span data-testid="contact-form-phone-label">Phone number</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Your phone number"
            data-testid="contact-form-phone-input"
          />
        </label>
      </div>
      <label className="field" data-testid="contact-form-service-field">
        <span data-testid="contact-form-service-label">What can we help with? <b>*</b></span>
        <select
          value={service}
          onChange={(event) => setService(event.target.value as ServiceInterest)}
          data-testid="contact-form-service-select"
        >
          {interests.map((interest) => (
            <option
              key={interest}
              value={interest}
              data-testid={`contact-form-service-option-${interest.toLowerCase().replaceAll(" ", "-")}`}
            >
              {interest}
            </option>
          ))}
        </select>
      </label>
      <label className="field" data-testid="contact-form-message-field">
        <span data-testid="contact-form-message-label">
          Tell us a little about your requirements <b>*</b>
        </span>
        <textarea
          name="message"
          required
          minLength={10}
          rows={5}
          placeholder="Share what you’re looking for…"
          data-testid="contact-form-message-textarea"
        />
      </label>
      <button
        className="button button-primary form-submit"
        type="submit"
        disabled={mutation.isPending}
        data-testid="contact-form-submit-button"
      >
        {mutation.isPending ? "Sending…" : "Send enquiry"}
        <ArrowUpRight size={17} aria-hidden="true" />
      </button>
      <p className="form-privacy-note" data-testid="contact-form-privacy-note">
        Your information will only be used to respond to your enquiry.
      </p>
    </form>
  );
}
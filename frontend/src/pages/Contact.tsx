
import ContactForm from "@/components/ContactForm";

export default function ServiceFinder() {
  return (
    <div className="finder-panel" data-testid="service-finder">
      <div className="finder-step">
        <h3 data-testid="service-finder-question">
          Who are you looking for help as?
        </h3>

        <div data-testid="service-finder-query-form">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

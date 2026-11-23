
import ContactForm from "@/components/ContactForm";

export default function ServiceFinder() {
  return (
    <div className="finder-panel" data-testid="service-finder">
      <div className="finder-step">
        <ContactForm />
      </div>
    </div>
  );
}

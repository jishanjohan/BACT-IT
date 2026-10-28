interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  testId: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  testId,
}: SectionHeadingProps) {
  return (
    <div
      className={`section-heading ${align === "center" ? "section-heading-center" : ""}`}
      data-testid={testId}
    >
      <span className="eyebrow" data-testid={`${testId}-eyebrow`}>{eyebrow}</span>
      <h2 data-testid={`${testId}-title`}>{title}</h2>
      {description && <p data-testid={`${testId}-description`}>{description}</p>}
    </div>
  );
}
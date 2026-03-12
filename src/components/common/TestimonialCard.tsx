interface TestimonialCardProps {
  quote: string;
  person: string;
  role: string;
}

export default function TestimonialCard({
  quote,
  person,
  role,
}: TestimonialCardProps) {
  return (
    <article className="info-card">
      <p>"{quote}"</p>
      <p style={{ marginTop: "0.9rem", marginBottom: 0, fontWeight: 700 }}>
        {person}
      </p>
      <p style={{ marginTop: "0.2rem", marginBottom: 0 }}>{role}</p>
    </article>
  );
}

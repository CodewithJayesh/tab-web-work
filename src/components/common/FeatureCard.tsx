interface FeatureCardProps {
  title: string;
  body: string;
}

export default function FeatureCard({ title, body }: FeatureCardProps) {
  return (
    <article className="info-card">
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

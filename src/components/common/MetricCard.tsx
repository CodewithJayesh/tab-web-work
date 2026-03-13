interface MetricCardProps {
  label: string;
  value: string;
}

export default function MetricCard({ label, value }: MetricCardProps) {
  return (
    <article className="metric-card">
      <p className="metric-value">{value}</p>
      <p className="metric-label">{label}</p>
    </article>
  );
}

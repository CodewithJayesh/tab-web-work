interface SectionIntroProps {
  eyebrow: string;
  title: string;
  copy: string;
}

export default function SectionIntro({
  eyebrow,
  title,
  copy,
}: SectionIntroProps) {
  return (
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">{copy}</p>
    </div>
  );
}

import SectionIntro from "../components/common/SectionIntro";
import TestimonialCard from "../components/common/TestimonialCard";
import { testimonials } from "../config/content";
import { usePageTitle } from "../hooks/usePageTitle";

export default function TestimonialPage() {
  usePageTitle("Testimonial");

  return (
    <>
      <section className="section">
        <SectionIntro
          copy="Real stories from teams that moved faster using this reusable frontend structure."
          eyebrow="Testimonial"
          title="What teams say after adopting this UI setup."
        />
        <div className="card-grid stagger">
          {testimonials.map((entry) => (
            <TestimonialCard
              key={entry.person}
              person={entry.person}
              quote={entry.quote}
              role={entry.role}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <SectionIntro
          copy="The same architecture supports landing pages, dashboards, and admin panels."
          eyebrow="Outcomes"
          title="Built for growth and maintainability."
        />
        <div className="two-col">
          <article className="info-card">
            <h3>Faster Delivery</h3>
            <p>
              Shared components reduce rewrite effort and improve collaboration
              across frontend developers.
            </p>
          </article>
          <article className="info-card">
            <h3>Cleaner Codebase</h3>
            <p>
              Custom hooks isolate behavior and routes keep page-level logic
              focused.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

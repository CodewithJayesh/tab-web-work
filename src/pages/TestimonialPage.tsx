import SectionIntro from "../components/common/SectionIntro";
import TestimonialCard from "../components/common/TestimonialCard";
import { testimonials } from "../config/content";
import { usePageTitle } from "../hooks/usePageTitle";
import { useTestimonialFilter } from "../hooks/useTestimonialFilter";

export default function TestimonialPage() {
  usePageTitle("Testimonial");
  const { filteredTestimonials, segment, setSegment } =
    useTestimonialFilter(testimonials);

  return (
    <>
      <section className="section">
        <SectionIntro
          copy="Real stories from teams that moved faster using this reusable frontend structure."
          eyebrow="Testimonial"
          title="What teams say after adopting this UI setup."
        />
        <div className="filter-row">
          {["all", "startup", "agency", "enterprise"].map((item) => (
            <button
              className={`filter-chip ${segment === item ? "is-active" : ""}`}
              key={item}
              onClick={() =>
                setSegment(item as "all" | "startup" | "agency" | "enterprise")
              }
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="card-grid stagger">
          {filteredTestimonials.map((entry) => (
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

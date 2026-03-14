import SectionIntro from "../components/common/SectionIntro";
import TestimonialCard from "../components/common/TestimonialCard";
import RouteArtwork from "../components/common/RouteArtwork";
import { testimonials } from "../config/content";
import { usePageTitle } from "../hooks/usePageTitle";
import { useTestimonialFilter } from "../hooks/useTestimonialFilter";

export default function TestimonialPage() {
  usePageTitle("Testimonial");
  const { filteredTestimonials, segment, setSegment } =
    useTestimonialFilter(testimonials);
  const featuredStory = filteredTestimonials[0] ?? testimonials[0];

  return (
    <>
      <section className="section testimonial-hero">
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
        <div className="testimonial-showcase">
          <article className="featured-testimonial">
            <p className="stage-label">Featured Story</p>
            <RouteArtwork variant="testimonial" />
            <blockquote>"{featuredStory.quote}"</blockquote>
            <p className="featured-name">{featuredStory.person}</p>
            <p className="featured-role">{featuredStory.role}</p>
          </article>
          <div className="testimonial-stack stagger">
            {filteredTestimonials.map((entry) => (
              <TestimonialCard
                key={entry.person}
                person={entry.person}
                quote={entry.quote}
                role={entry.role}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section outcomes-band">
        <SectionIntro
          copy="The same architecture supports landing pages, dashboards, and admin panels."
          eyebrow="Outcomes"
          title="Built for growth and maintainability."
        />
        <div className="outcomes-grid">
          <article className="info-card outcome-card">
            <h3>Faster Delivery</h3>
            <p>
              Shared components reduce rewrite effort and improve collaboration
              across frontend developers.
            </p>
          </article>
          <article className="info-card outcome-card">
            <h3>Cleaner Codebase</h3>
            <p>
              Custom hooks isolate behavior and routes keep page-level logic
              focused.
            </p>
          </article>
          <article className="info-card outcome-card">
            <h3>Better Presentation</h3>
            <p>
              Distinct route layouts help each part of the site communicate a
              different job without losing the shared brand.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

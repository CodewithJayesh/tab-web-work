import FeatureCard from "../components/common/FeatureCard";
import SectionIntro from "../components/common/SectionIntro";
import { aboutValues } from "../config/content";
import { usePageTitle } from "../hooks/usePageTitle";

export default function AboutPage() {
  usePageTitle("AboutUs");

  return (
    <>
      <section className="section">
        <SectionIntro
          copy="We create frontend systems where each page shares patterns, but each section still has a clear purpose."
          eyebrow="AboutUs"
          title="A process built for scalable UI development."
        />
        <div className="card-grid stagger">
          {aboutValues.map((entry) => (
            <FeatureCard key={entry.title} body={entry.body} title={entry.title} />
          ))}
        </div>
      </section>

      <section className="section">
        <SectionIntro
          copy="The same design tokens and reusable blocks are applied in all pages to keep UI quality consistent."
          eyebrow="Design System"
          title="Different pages, one coherent experience."
        />
        <div className="two-col">
          <article className="info-card">
            <h3>Header Structure</h3>
            <p>
              Sticky logo section, active route tabs, responsive mobile menu,
              and event dispatch for analytics-ready navigation.
            </p>
          </article>
          <article className="info-card">
            <h3>Main + Footer</h3>
            <p>
              Route transitions in main content and a footer event panel for
              quick visibility of user interactions.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

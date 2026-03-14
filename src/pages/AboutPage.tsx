import FaqAccordion from "../components/common/FaqAccordion";
import FeatureCard from "../components/common/FeatureCard";
import RouteArtwork from "../components/common/RouteArtwork";
import SectionIntro from "../components/common/SectionIntro";
import { aboutValues, faqs } from "../config/content";
import { usePageTitle } from "../hooks/usePageTitle";

export default function AboutPage() {
  usePageTitle("AboutUs");

  return (
    <>
      <section className="section about-hero">
        <div className="about-hero-grid">
          <div>
            <SectionIntro
              copy="We create frontend systems where each page shares patterns, but each section still has a clear purpose."
              eyebrow="AboutUs"
              title="A process built for scalable UI development."
            />
          </div>
          <div className="manifesto-card">
            <p className="stage-label">Manifesto</p>
            <h3>Structure first. Character always.</h3>
            <p>
              We use reusable React foundations, then shape each route so it
              feels intentional instead of copied from the same wireframe.
            </p>
            <RouteArtwork variant="about" />
          </div>
        </div>
        <div className="process-ribbon stagger">
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
        <div className="editorial-split">
          <article className="info-card pull-quote-card">
            <h3>Header Structure</h3>
            <p>
              Sticky logo section, active route tabs, responsive mobile menu,
              and event dispatch for analytics-ready navigation.
            </p>
          </article>
          <article className="info-card pull-quote-card">
            <h3>Main + Footer</h3>
            <p>
              Route transitions in main content and a footer event panel for
              quick visibility of user interactions.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <SectionIntro
          copy="A lightweight accordion keeps common product and delivery questions easy to scan."
          eyebrow="FAQ"
          title="Answers before kickoff."
        />
        <div className="faq-layout">
          <FaqAccordion items={faqs} />
          <aside className="faq-note">
            <p className="stage-label">Good Fit</p>
            <h3>Best for teams that need speed without generic UI.</h3>
            <p>
              This route structure works especially well for service websites,
              portfolio builds, startup launches, and product marketing pages.
            </p>
            <RouteArtwork variant="about" />
          </aside>
        </div>
      </section>
    </>
  );
}

import { Link } from "react-router-dom";
import FeatureCard from "../components/common/FeatureCard";
import SectionIntro from "../components/common/SectionIntro";
import { homeFeatures, testimonials } from "../config/content";
import { useApiHealth } from "../hooks/useApiHealth";
import { usePageTitle } from "../hooks/usePageTitle";

export default function HomePage() {
  usePageTitle("Home");
  const apiHealth = useApiHealth();

  return (
    <>
      <section className="section">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">React + Vite Frontend</p>
            <h1 className="section-title">
              Attractive multi-page website with reusable architecture.
            </h1>
            <p className="section-copy">
              This project includes a logo section, interactive menu bar
              (Home, AboutUs, Testimonial, ContactUs), custom hooks, routes,
              and event-based configuration ready for extension.
            </p>
            <div className="button-row">
              <Link className="button button-solid" to="/contactus">
                Contact Team
              </Link>
              <Link className="button button-outline" to="/aboutus">
                See Process
              </Link>
            </div>
          </div>

          <aside className="status-card">
            <p className="footer-heading">Backend Health</p>
            <span className={`health-pill ${apiHealth.status}`}>
              {apiHealth.status.toUpperCase()}
            </span>
            <p className="footer-copy">{apiHealth.message}</p>
            <p className="footer-copy">
              Endpoint: <code>/api/health</code>
            </p>
          </aside>
        </div>
      </section>

      <section className="section">
        <SectionIntro
          copy="Each block is designed for reuse across multiple pages without duplicate UI code."
          eyebrow="Reusable Components"
          title="Build once, use everywhere."
        />
        <div className="card-grid stagger">
          {homeFeatures.map((feature) => (
            <FeatureCard key={feature.title} body={feature.body} title={feature.title} />
          ))}
        </div>
      </section>

      <section className="section">
        <SectionIntro
          copy="Preview highlights from the dedicated testimonial page."
          eyebrow="Client Proof"
          title="Teams value this frontend setup."
        />
        <div className="two-col stagger">
          {testimonials.slice(0, 2).map((entry) => (
            <FeatureCard
              key={entry.person}
              body={`${entry.quote} - ${entry.person}, ${entry.role}`}
              title="Result"
            />
          ))}
        </div>
      </section>
    </>
  );
}

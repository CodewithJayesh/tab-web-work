import { Link } from "react-router-dom";
import FeatureCard from "../components/common/FeatureCard";
import MetricCard from "../components/common/MetricCard";
import SectionIntro from "../components/common/SectionIntro";
import {
  homeFeatures,
  homeMetrics,
  servicePackages,
  testimonials,
} from "../config/content";
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
            <p className="eyebrow">Studio Template 02</p>
            <h1 className="section-title">
              Editorial frontend template with a sharper visual identity.
            </h1>
            <p className="section-copy">
              Built for teams that want something more intentional than a
              default SaaS landing page. The layout keeps the reusable React
              architecture, but the interface now feels like a designed studio
              site.
            </p>
            <div className="button-row">
              <Link className="button button-solid" to="/contactus">
                Start a Build
              </Link>
              <Link className="button button-outline" to="/aboutus">
                Explore Process
              </Link>
            </div>
          </div>

          <aside className="template-stage">
            <article className="stage-card stage-card-large">
              <p className="stage-label">Current Mode</p>
              <h3>Brand-led interface system</h3>
              <p>
                Warm surfaces, framed cards, expressive type, and softer motion.
              </p>
            </article>
            <article className="stage-card stage-card-accent">
              <p className="stage-label">Backend Health</p>
              <span className={`health-pill ${apiHealth.status}`}>
                {apiHealth.status.toUpperCase()}
              </span>
              <p>{apiHealth.message}</p>
            </article>
            <article className="stage-card">
              <p className="stage-label">Endpoint</p>
              <p>
                <code>/api/health</code>
              </p>
            </article>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="metrics-grid stagger">
          {homeMetrics.map((metric) => (
            <MetricCard key={metric.label} label={metric.label} value={metric.value} />
          ))}
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
          copy="These feature bundles are designed for different kinds of frontend work."
          eyebrow="Service Packages"
          title="Choose a development direction."
        />
        <div className="card-grid stagger">
          {servicePackages.map((service) => (
            <FeatureCard key={service.title} body={service.body} title={service.title} />
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

import { Link } from "react-router-dom";
import FeatureCard from "../components/common/FeatureCard";
import MetricCard from "../components/common/MetricCard";
import RouteArtwork from "../components/common/RouteArtwork";
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
          <div className="hero-copy-block">
            <p className="eyebrow">Studio Template 02</p>
            <div className="hero-kicker-row">
              <span className="hero-kicker">Different template switcher</span>
              <span className="hero-kicker">Route-based illustration system</span>
            </div>
            <h1 className="section-title">
              A bolder home page with art direction that actually leads the site.
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
            <div className="hero-ribbon">
              <span>Art-driven home hero</span>
              <span>Switchable templates</span>
              <span>React + Express foundation</span>
            </div>
          </div>

          <aside className="hero-art-panel">
            <RouteArtwork variant="home" />
            <div className="template-stage">
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
            </div>
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

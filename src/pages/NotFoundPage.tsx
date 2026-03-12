import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";

export default function NotFoundPage() {
  usePageTitle("Not Found");

  return (
    <section className="section">
      <p className="eyebrow">404</p>
      <h1 className="section-title">Page not found.</h1>
      <p className="section-copy">
        The route does not exist. Return to Home and continue navigating from
        the menu.
      </p>
      <div className="button-row">
        <Link className="button button-solid" to="/">
          Go Home
        </Link>
      </div>
    </section>
  );
}

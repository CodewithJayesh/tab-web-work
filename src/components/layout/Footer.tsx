import { Link } from "react-router-dom";
import { navigationItems } from "../../config/navigation";
import { useUiEvents } from "../../hooks/useUiEvents";

function formatTime(value: string): string {
  return new Date(value).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function Footer() {
  const { lastMenuEvent, lastContactEvent } = useUiEvents();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section>
          <h3 className="footer-title">Orbit UI Studio</h3>
          <p className="footer-copy">
            Vite + React website with reusable components, custom hooks, and
            event-based interactions.
          </p>
        </section>

        <section>
          <p className="footer-heading">Quick Menu</p>
          <div className="footer-links">
            {navigationItems.map((item) => (
              <Link className="footer-link" key={item.path} to={item.path}>
                {item.label}
              </Link>
            ))}
          </div>
        </section>

        <section>
          <p className="footer-heading">Recent UI Events</p>
          <p className="event-pill">
            {lastMenuEvent
              ? `Menu: ${lastMenuEvent.label} at ${formatTime(lastMenuEvent.at)}`
              : "Menu: waiting for interaction"}
          </p>
          <p className="event-pill">
            {lastContactEvent
              ? `Contact: ${lastContactEvent.name} at ${formatTime(lastContactEvent.at)}`
              : "Contact: no submission yet"}
          </p>
        </section>
      </div>
    </footer>
  );
}

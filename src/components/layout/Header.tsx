import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../common/Logo";
import { navigationItems } from "../../config/navigation";
import { useStickyHeader } from "../../hooks/useStickyHeader";
import { emitMenuSelected } from "../../hooks/useUiEvents";
import styles from "./Header.module.css";

export default function Header() {
  const compact = useStickyHeader();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={`${styles.header} ${compact ? styles.compact : ""}`}>
      <div className={`container ${styles.bar}`}>
        <Logo />

        <nav aria-label="Primary menu" className={styles.desktopNav}>
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
              onClick={() =>
                emitMenuSelected({ label: item.label, path: item.path })
              }
              to={item.path}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link className={styles.cta} to="/contactus">
          Start Project
        </Link>

        <button
          aria-expanded={mobileOpen}
          className={styles.menuToggle}
          onClick={() => setMobileOpen((value) => !value)}
          type="button"
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      {mobileOpen ? (
        <div className={styles.mobilePanel}>
          <div className="container">
            <nav aria-label="Mobile menu" className={styles.mobileNav}>
              {navigationItems.map((item) => (
                <NavLink
                  key={`mobile-${item.path}`}
                  className={({ isActive }) =>
                    `${styles.mobileLink} ${isActive ? styles.mobileActive : ""}`
                  }
                  onClick={() => {
                    setMobileOpen(false);
                    emitMenuSelected({ label: item.label, path: item.path });
                  }}
                  to={item.path}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}

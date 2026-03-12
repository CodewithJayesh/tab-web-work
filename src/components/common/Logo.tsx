import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link className="brand-link" to="/">
      <span aria-hidden="true" className="brand-mark" />
      <span>
        <p className="brand-title">Orbit UI Studio</p>
        <p className="brand-subtitle">Reusable React Frontend</p>
      </span>
    </Link>
  );
}

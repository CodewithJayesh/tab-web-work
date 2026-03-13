import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link className="brand-link" to="/">
      <span aria-hidden="true" className="brand-mark" />
      <span>
        <p className="brand-title">Northframe Atelier</p>
        <p className="brand-subtitle">Editorial Web Template</p>
      </span>
    </Link>
  );
}

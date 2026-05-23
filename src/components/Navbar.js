import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      {/* LOGO */}
      <h2 className="logo">🛡️ FakeLinkDetector</h2>

      {/* LINKS */}
      <div className="nav-links">
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Home
        </Link>

        <Link
          to="/awareness"
          className={location.pathname === "/awareness" ? "active" : ""}
        >
          Awareness
        </Link>

        <Link
          to="/history"
          className={location.pathname === "/history" ? "active" : ""}
        >
          History
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
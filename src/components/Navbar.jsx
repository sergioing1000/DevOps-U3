import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#0f172a",
        padding: "15px",
        display: "flex",
        gap: "20px",
      }}
    >
      <Link to="/">Home</Link>

      <Link to="/about">About</Link>

      <Link to="/dashboard">Dashboard</Link>

      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;

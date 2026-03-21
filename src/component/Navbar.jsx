import logo from "../assets/image/logoim.jpg";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

      <Link className="navbar-brand d-flex align-items-center" to="/">
  <img 
    src={logo} 
    alt="Logo" 
    style={{ 
      height: "90px",        // Make logo even bigger
      width: "auto", 
      marginRight: "20px",  // Negative margin to pull text closer to the icon
      objectFit: "contain"
    }} 
  />
  <div className="d-flex flex-column" style={{ marginLeft: "0px" }}>
    <span style={{ 
      fontSize: "1.4rem",    
      fontWeight: "800", 
      lineHeight: "0.9",
      color: "#00B4D8",
      letterSpacing: "0.5px"
    }}>
      DRYCLEANER
    </span>
    <span style={{ 
      fontSize: "0.7rem", 
      fontWeight: "600",
      color: "#555",
      letterSpacing: "1px",
      marginTop: "2px"
    }}>
      LAUNDRY SERVICE
    </span>
  </div>
</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer">Contact</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
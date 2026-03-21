import { useState } from "react";
import logo from "../assets/image/logoim.jpg";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        {/* Logo Section */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img 
            src={logo} 
            alt="Logo" 
            style={{ 
              height: "90px",
              width: "auto",
              marginRight: "20px",
              objectFit: "contain"
            }} 
          />
          <div className="d-flex flex-column">
            <span style={{ 
              fontSize: "1.4rem",    
              fontWeight: "800", 
              lineHeight: "0.9",
              background: "linear-gradient(135deg, #00c6ff, #00d4a4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
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

        {/* Hamburger Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer" onClick={() => setIsOpen(false)}>Contact</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
import logo from "../assets/image/Black_logo1.png";  
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container">
    
    <a className="navbar-brand d-flex align-items-center" href="#">
      <img src={logo} width="110" className="me-2" alt="Logo" />
      Laundry Service
    </a>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#OtherServices">Services</a>
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
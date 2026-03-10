import React from "react";
import "./Footer.css";
import { FaWhatsapp, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {

  const phone = "918087659605";

  const openWhatsApp = () => {
    const message = "Hello, I want to book a laundry pickup.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About */}
        <div className="footer-column">
          <h2>MYND DRYCLEANER</h2>
          <p>
            MYND Laundry provides premium washing and dry cleaning service
            leveraging mobile based technology. We provide high quality and
            affordable services in a way of care and nurture for your threads.
          </p>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>Steam Iron</li>
            <li>Laundry By Kg</li>
            <li>Men Dry Clean</li>
            <li>Women Dry Clean</li>
            <li>Shoe Cleaning</li>
            <li>Non Wearables</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="footer-column">
          <h3>Useful Link</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Term & Conditions</li>
            <li>Refund & Cancellation</li>
            <li>Shipping & Delivery</li>
            <li>Career</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact Us</h3>

          <p>
            <FaMapMarkerAlt /> Krishna Kunj Mathura Colony Rahatni Road
            Nakhate Wasti, Opposite to Legacy Aura
          </p>

          <p>
            <FaPhone /> +91-8087659605
          </p>

          <p>mynddrycleaner.com</p>

          {/* Google Map */}
          <iframe
            title="location"
            src="https://maps.google.com/maps?q=rahatni%20pune&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="map"
          ></iframe>
        </div>

      </div>

      {/* WhatsApp Floating Button */}

      <div className="whatsapp-btn" onClick={openWhatsApp}>
        <FaWhatsapp size={30} />
      </div>

    </footer>
  );
};

export default Footer;
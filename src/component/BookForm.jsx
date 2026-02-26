import React, { useState, useEffect } from "react";
import "./BookingForm.css";

function BookForm({ isOpen, onClose }) {

  const initialState = {
    name: "",
    phone: "",
    address: "",
    agree: false
  };

  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setFormData(initialState);
      setError("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });

    // remove error once checkbox checked
    if (name === "agree" && checked) {
      setError("");
    }
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.agree) {
    setError("Please check the terms & conditions");
    return;
  }

  const whatsappNumber = "918087659605"; // your number with country code

  const message = `
Hello 👋

New Pickup Request:

Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}

Please confirm pickup time.
  `;

  const encodedMessage = encodeURIComponent(message);

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");

  onClose();
};
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-btn" onClick={onClose}>×</button>

        <h2>Schedule Free Pick Up</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <div className="terms">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <span>
              By clicking submit you agree to our{" "}
              <a href="#">terms & condition</a>
            </span>
          </div>

          {/* 🔥 Show error message inside form */}
          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="submit-btn">
            Submit →
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookForm;
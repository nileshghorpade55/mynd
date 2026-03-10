import React from "react";
import "./StoreCard.css";

const StoreCard = ({ title, address, rating, reviews, lat, lng, phone }) => {

  const handleDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
      "_blank"
    );
  };

  const handleCall = () => {
    window.location.href = `tel:${phone}`;
  };

  const handleWhatsApp = () => {
    const message = "Hello, I am interested in your laundry services.";
    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/${phone}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <div className="store-card">
      <h3 className="store-title">{title}</h3>
      <p className="store-address">{address}</p>

      <div className="rating-section">
        <div className="google-rating">
          <span className="google-icon">Just Dial</span>
          <span>Just Dial Rating</span>
        </div>

        <div className="stars">
          <span className="rating-number">{rating}</span>
          <span className="star-icons">★★★★★</span>
          <span className="review-count">({reviews})</span>
        </div>
      </div>

      <div className="button-group">
        <button onClick={handleDirections}>Get Directions</button>
        <button>Check Pricing</button>
        <button onClick={handleCall}>Call Now</button>
        <button onClick={handleWhatsApp}>WhatsApp</button>
      </div>
    </div>
    
    
  );
};

export default StoreCard;
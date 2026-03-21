// PricingCard.jsx
import React from "react";
import logo from "../assets/image/logoim.jpg";

const PricingCard = ({ item }) => {
  return (
   <div className="card p-3 shadow-sm h-100 w-100 center">
  
  <p className="text-muted small center">
   <div className="text-center">
    <img src={logo} alt={item.name} className="img-fluid w-50" />
   </div>
  </p>
<h5 className="text-center mb-4">{item.name}</h5>

  <div className="row mt-3 text-center">
    {item.services.map((service, index) => (
      <div className="col-8" key={index}>
        
        <p 
          className="fw-semibold mb-1"
          style={{ fontSize: "14px", wordBreak: "break-word" }}
        >
          {service.name}
        </p>

        <p className="mb-0">
          {service.price ? `₹ ${service.price}` : "-"}
        </p>

      </div>
    ))}
  </div>
</div>
  );
};

export default PricingCard;
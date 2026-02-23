import React from "react";
import "./FeaturesCircle.css";
import { FaCheckCircle, FaTruck, FaClipboardList, FaUserCog, FaMoneyBillWave, FaClock } from "react-icons/fa";

function FeatureCircle() {
  return (
    
    <div className="features-section">
          
      <div className="circle-container">

        {/* Center Circle */}
        <div className="center-circle">
          <h2>MYND Laundry</h2>
          <p>Premium Laundry Services</p>
        </div>

       

      </div>
    </div>
  );
}

export default FeatureCircle;
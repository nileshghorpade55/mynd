import React from "react";
import StoreCard from "./StoreCard";
import "./StoreSection.css";
import jdGif from "../assets/image/jd.gif"; 
const stores = [
  {
    title: "MYND DRYCLEANERS AND LAUNDRY",
    address: "Pune, Maharashtra",
    rating: "5.0",
    reviews: "87",
    lat: 18.6045148,
    lng: 73.7854936,
    phoneNumber: "+918087659605"
  }

];

const StoreSection = () => {
  return (
    <div className="store-container">
      {stores.map((store, index) => (
        <StoreCard key={index} {...store} />
      ))}
      <div className="sample-image">
        <img src={jdGif} alt="Sample" />
      </div>
    </div>
    
  );
};

export default StoreSection;
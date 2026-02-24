import React from "react";
import StoreCard from "./StoreCard";
import "./StoreSection.css";

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
    </div>
  );
};

export default StoreSection;
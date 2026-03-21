import React from "react";
import PricingCard from "./PricingCard";

const pricingData = [
  {
    name: "SHIRT / T-SHIRT",
    services: [
      { name: "Press", price: 12 },
      { name: "Dry Cleaning", price: 50 },
      { name: "Steam Press", price: 20 },
    ],
  },
  ,
  {
    name: "TROUSER",
    services: [
      { name: "Press", price: 10 },
      { name: "Dry Cleaning", price: 50 },
      { name: "Steam Press", price: 20 },
    ],
  },
   {
    name: "BLAZZER",
    services: [
      { name: "Press", price: 70 },
      { name: "Dry Cleaning", price: 250 },
      { name: "Steam Press", price: 50 },
    ],
  },
   {
    name: "JACKET",
    services: [
      { name: "Press", price: 50 },
      { name: "Dry Cleaning", price: 250 },
      { name: "Steam Press", price: 30 },
    ],
  }, {
    name: "SHERWANI",
    services: [
      { name: "Press", price: 100 },
      { name: "Dry Cleaning", price: 500 },
      { name: "Steam Press", price: 70 },
    ],
  },
   {
    name: "SHORTS",
    services: [
      { name: "Press", price: 12 },
      { name: "Dry Cleaning", price: 50 },
      { name: "Steam Press", price: 20 },
    ],
  },
   {
    name: "SHAWL",
    services: [
      { name: "Press", price: 12 },
      { name: "Dry Cleaning", price: 50 },
      { name: "Steam Press", price: 20 },
    ],
  },
   {
    name: "STARCH",
    services: [
      { name: "Press", price: 15 },
      { name: "Dry Cleaning", price: 70 },
      { name: "Steam Press", price: 15 },
    ],
  },
  {
    name: "Curtains",
    services: [
      { name: "Press", price: 100 },
      { name: "Dry Cleaning", price: 500 },
      { name: "Steam Press", price: 250 },
    ],
  },
  {
    name: "Laundry By kg",
    services: [
      { name: "Press", price: 10 },
      { name: "Wash & Fold", price: 80 },
      
    ],
  }
];

const PricingList = () => {
  return (
 <div className="container-card">
  <div className="row g-3">

    {pricingData.map((item, index) => (
      <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
        <PricingCard item={item} />
      </div>
    ))}

  </div>
</div>
  );
};

export default PricingList;
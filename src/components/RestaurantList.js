import React from "react";
import "../gallery/style/RestaurantList.css";
import data from "../FoodData";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ count, typeFilter, location }) => {
  console.log("Type Filter:", typeFilter, "Count:", count, "Location:", location);

  const filteredData = data
    .filter((r) => 
      (!typeFilter || r.type.some((type) => type.toLowerCase() === typeFilter.toLowerCase())) &&
      (!location || r.location.toLowerCase() === location.toLowerCase())
    );

  const displayedData = count ? filteredData.slice(0, count) : filteredData;

  return (
    <div className="restaurant-list-container">
      <div className="restaurants-list">
        {displayedData.map((r) => (
          <RestaurantCard
            key={r.id}
            favorite={r.favorite}
            {...r}
            type={r.type.join(", ")}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;

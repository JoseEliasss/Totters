import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../gallery/style/RestaurantList.css";
import data from "../FoodData";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ count, typeFilter }) => {
  const filteredData = typeFilter
    ? data.filter((r) => r.type === typeFilter)
    : data; // Show all restaurants if no typeFilter is provided

  const displayedData = count ? filteredData.slice(0, count) : filteredData; // Show all restaurants if no count is provided

  return (
    <div>
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

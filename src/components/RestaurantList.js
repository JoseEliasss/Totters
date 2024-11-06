import React, { useState } from "react";
import "../gallery/style/RestaurantList.css";
import data from "../FoodData";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ count, location }) => {
  // State to track the selected type filter
  const [typeFilter, setTypeFilter] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handle type filter change
  const handleTypeChange = (type) => {
    setTypeFilter(type);
    setIsDropdownOpen(false); // Close dropdown after selecting an option
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  console.log(
    "Type Filter:",
    typeFilter,
    "Count:",
    count,
    "Location:",
    location
  );

  const filteredData = data.filter(
    (r) =>
      (typeFilter === "All" ||
        r.type.some(
          (type) => type.toLowerCase() === typeFilter.toLowerCase()
        )) &&
      (!location || r.location.toLowerCase() === location.toLowerCase())
  );

  const displayedData = count ? filteredData.slice(0, count) : filteredData;

  return (
    <div className="everything">
      <div className="type-filter-button">
        <button onClick={toggleDropdown}>
          {typeFilter} <span>▼</span>
        </button>
        {isDropdownOpen && (
          <div className="dropdown-options">
            <button onClick={() => handleTypeChange("All")}>All</button>
            <button onClick={() => handleTypeChange("Lebanese")}>
              Lebanese
            </button>
            <button onClick={() => handleTypeChange("Italian")}>Italian</button>
            <button onClick={() => handleTypeChange("American")}>
              American
            </button>
            <button onClick={() => handleTypeChange("japanese")}>
              japanese
            </button>
          </div>
        )}
      </div>
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
    </div>
  );
};

export default RestaurantList;

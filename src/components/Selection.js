import React from "react";
import { useNavigate } from "react-router-dom";
import "../gallery/style/Selection.css";
import data from "../FoodData";
import RestaurantCard from "./RestaurantCard";

const RestaurantCarousel = ({ count, typeFilter, location }) => {
  const navigate = useNavigate();

  console.log("Type Filter:", typeFilter, "Count:", count, "Location:", location);

  const filteredData = data
    .filter((r) => 
      (!typeFilter || r.type.some((type) => type.toLowerCase() === typeFilter.toLowerCase())) &&
      (!location || r.location.toLowerCase() === location.toLowerCase())
    );

  const displayedData = count ? filteredData.slice(0, count) : filteredData;

  // Handler for View All button click
  const handleViewAllClick = () => {
    window.scrollTo(0, 0); // Scroll to top of the page
    navigate("/restaurants"); // Navigate to the Restaurants page
  };

  return (
    <div className="restaurant-carousel">
      <div className="carousel-list">
        {displayedData.map((r) => (
          <div className="selection-restaurant-card">
            <RestaurantCard
            key={r.id}
            favorite={r.favorite}
            {...r}
            type={r.type.join(", ")}
            />
          </div>
        ))}
        <div className="view-all-container">
          <button className="view-all-button" onClick={handleViewAllClick}></button>
          <div className="view-all-text">View All</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCarousel;

import React from "react";
import RestaurantList from "./RestaurantList";
import "../gallery/style/Selection.css";
import { useNavigate } from "react-router-dom";

const Selection = ({ type, count, location }) => {
  const navigate = useNavigate();
  const handleViewAll = () => {
    navigate("/restaurants"); 
  };

  return (
    <div className="selection">
      <h2>{type}</h2>
      <div className="carousel-container">
        <RestaurantList typeFilter={type} count={count} location={location}/>
        <button className="view-all" onClick={handleViewAll}>
          View All
        </button>
      </div>
    </div>
  );
};

export default Selection;

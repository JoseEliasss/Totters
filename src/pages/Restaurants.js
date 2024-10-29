import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../gallery/style/Restaurants.css";
import RestaurantList from "../components/RestaurantList"

const Restaurants = () => {
  return (
    <div className="Restaurants">
        <h1 className="title">Restaurants</h1>
        <RestaurantList/>
    </div>
  );
};

export default Restaurants;
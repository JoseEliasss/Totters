import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../gallery/style/RestaurantList.css";
import data from "../FoodData";
import RestaurantList from "../components/RestaurantList"

const Restaurants = () => {
  return (
    <div>
        <h1 className="title">Restaurants</h1>
        <RestaurantList count={5}/>
    </div>
  );
};

export default Restaurants;
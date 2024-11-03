import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../gallery/style/Restaurants.css";
import Hero from "../components/Hero";
import RestaurantList from "../components/RestaurantList";
import FoodHero from "../gallery/images/FoodHero.jpeg";
import Status from "../components/Status";
const Restaurants = () => {
  return (
    <div className="Restaurants">
      <Status />
      <Hero image={FoodHero} title="Fast Easy Delivered" />
        <h1 className="title">Restaurants</h1>
        <RestaurantList/>
    </div>
  );
};

export default Restaurants;
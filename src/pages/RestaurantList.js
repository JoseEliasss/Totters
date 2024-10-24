import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RestaurantList.css"; // Make sure this path is correct
import data from "../FoodData"; // Adjust the import based on your folder structure
import FavIcon from "../gallery/images/Favorite.png";
import NotFavIcon from "../gallery/images/NotFavorite.png";
import Restaurant from "./Restaurant";

const RestaurantList = () => {
  return (
    <div>
      <h1 className="title">Restaurants</h1>
      <div className="restaurants-list">
        {data.map((r) => (
          <Restaurant key={r.id} favorite={r.favorite} {...r} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;

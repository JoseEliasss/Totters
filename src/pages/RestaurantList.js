import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RestaurantList.css";
import data from "../FoodData";
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

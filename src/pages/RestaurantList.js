import React from "react";
import { Link } from "react-router-dom";
import "./RestaurantList.css"; // Make sure this path is correct
import data from "../FoodData"; // Adjust the import based on your folder structure

const RestaurantList = () => {
  return (
    <div>
      <h1 className="title">Restaurants</h1>
      <ul className="restaurant-list">
        {data.map((restaurant) => (
          <li key={restaurant.id} className="restaurant-item">
            <Link to={`/restaurant/${restaurant.id}`}>
              <img
                src={restaurant.pic}
                alt={restaurant.name}
                className="restaurant-image" // Optional: for styling the image
              />
              <span className="nameLocation">
                <h2 className="restaurantName">
                  {restaurant.name} - {restaurant.location}
                </h2>
              </span>
              <span className="currencyAbout">
                <p>
                  {restaurant.currency} - {restaurant.type}
                </p>
              </span>
              <p className="rating">Rating: {restaurant.rating}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;

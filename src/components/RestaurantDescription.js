import React from "react";
import { useParams } from "react-router-dom";
import data from "../FoodData"; // Adjust the path as necessary

const RestaurantDetail = () => {
  const { id } = useParams(); // Get the restaurant ID from the URL
  const restaurant = data.find((r) => r.id === parseInt(id)); // Find the restaurant by ID

  if (!restaurant) {
    return <p>Restaurant not found</p>; // Handle case where restaurant is not found
  }

  return (
    <div className="restaurant-detail">
      <h1>{restaurant.name}</h1>
      <img
        src={restaurant.pic}
        alt={restaurant.name}
        style={{ width: "100px", height: "100px" }}
      />
      <p>
        <strong>Location:</strong> {restaurant.location}
      </p>
      <p>
        <strong>Type:</strong> {restaurant.type.join(", ")}
      </p>
      <p>
        <strong>Currency:</strong> {restaurant.currency}
      </p>
      <p>
        <strong>Rating:</strong> {restaurant.rating}
      </p>
      <p>
        <strong>Delivery:</strong> {restaurant.delivery}
      </p>

      <h2>Description</h2>

      {restaurant.description.map((dish, index) => (
        <div key={index} className="dish-detail">
          <h3>{dish.dName}</h3> {/* Dish name */}
          <img
            src={dish.DPic}
            alt={dish.dName}
            style={{ width: "100px", height: "auto" }}
          />{" "}
          {/* Dish image */}
          <p>
            <strong>Price:</strong> ${dish.price}
          </p>{" "}
          {/* Price */}
          <p>{dish.description}</p> {/* Description */}
        </div>
      ))}
    </div>
  );
};

export default RestaurantDetail;

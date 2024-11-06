import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import data from "../FoodData";
import "../gallery/style/RestaurantDescription.css";

const RestaurantDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const restaurant = data.find((r) => r.id === parseInt(id));
  const [showAddToCartModal, setShowAddToCartModal] = useState(false); // Modal state

  if (!restaurant) {
    return <p>Restaurant not found</p>;
  }

  // Add to Cart handler
  const handleAddToCart = (dish) => {
    dispatch(
      addToCart({
        ...dish,
        restaurant: restaurant.name, // Include restaurant name
      })
    );
    setShowAddToCartModal(true); // Show modal
    setTimeout(() => setShowAddToCartModal(false), 2000); // Hide modal after 2 seconds
  };

  return (
    <div className="restaurant-detail-container">
      <span className="RestaurantNameSpan">
        <h1>{restaurant.name}</h1>
      </span>

      {/* Add-to-Cart Modal */}
      {showAddToCartModal && (
        <div className="add-to-cart-modal">
          <p>Item added to cart!</p>
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <button className="close-modal" onClick={() => setShowAddToCartModal(false)}>
            ×
          </button>
        </div>
      )}

      <div className="restaurant-detail">
        {restaurant.description.map((dish, index) => (
          <div key={index} className="dish-detail">
            <img src={dish.DPic} alt={dish.dName} className="dish-image" />
            <h2>{dish.dName}</h2>
            <p>{dish.description}</p>
            <strong className="price">${dish.price}.00</strong>
            <button
              className="orderButton"
              onClick={() => handleAddToCart(dish)}
            >
              <strong>Add to Cart</strong>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetail;

import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import data from "../FoodData";
import { useState } from "react";
import "../gallery/style/RestaurantDescription.css";

const RestaurantDetail = () => {
  const { id } = useParams(); // Get the restaurant ID from the URL
  const restaurant = data.find((r) => r.id === parseInt(id)); // Find the restaurant by ID
  const navigate = useNavigate(); // Hook for navigating to a different page

  const [loading, setLoading] = useState(false); // State to manage the loading status of the order

  if (!restaurant) {
    return <p>Restaurant not found</p>; // Handle case where restaurant is not found
  }

  // Handle order submission
  const handleSubmitOrder = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Set loading state to true

    // Wait for 3 seconds, then navigate back to the previous page (or to any other page)
    setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
      navigate(-1); // Navigate back to the previous page
    }, 3000);
  };

  return (
    <div>
      <span className="RestaurantNameSpan">
        <h1>{restaurant.name}</h1>
      </span>

      <div className="restaurant-detail">
        {/* Loop through the restaurant's menu items */}
        {restaurant.description.map((dish, index) => (
          <div key={index} className="dish-detail">
            {/* Dish Image */}
            <img src={dish.DPic} alt={dish.dName} />
            <h2>{dish.dName}</h2>
            <p>{dish.description}</p>
            <strong className="price">${dish.price}.00</strong>

            {/* Order Now Button */}
            <button
              className="orderButton"
              onClick={() =>
                (document.getElementById("orderModal").style.display = "block")
              } // Show modal when clicked
            >
              <strong>Order Now</strong>
            </button>
          </div>
        ))}
      </div>

      {/* Modal for Order Form */}
      <div id="orderModal" className="order-modal">
        <div className="modal-content">
          {/* Modal Header */}
          <h2>Complete Your Order</h2>

          {/* Order Form */}
          <form onSubmit={handleSubmitOrder}>
            {/* Name Input */}
            <label>
              Name:
              <input type="text" name="name" required />
            </label>

            {/* Phone Number Input */}
            <label>
              Phone Number:
              <input type="text" name="phone" required />
            </label>

            {/* Location Input */}
            <label>
              Location:
              <input type="text" name="location" required />
            </label>

            {/* Payment Type Dropdown */}
            <label>
              Payment Type:
              <select name="paymentType" required>
                <option value="credit">Credit Card</option>
                <option value="paypal">Whish Money</option>
                <option value="cashLL">Lebanese pound</option>
                <option value="cash$">US Dollar</option>
              </select>
            </label>

            <button type="submit" disabled={loading}>
              {loading ? "Order sent!" : "Submit Order"}
            </button>

            {/* Cancel Button */}
            <button
              type="button"
              onClick={() =>
                (document.getElementById("orderModal").style.display = "none")
              }
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;

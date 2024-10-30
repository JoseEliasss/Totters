import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../gallery/style/RestaurantList.css";
import feedback from "../gallery/images/Feedback.png";

export default function RestaurantCard({
  id,
  name,
  pic,
  location,
  currency,
  type,
  rating,
  favorite,
  delivery,
  description,
}) {
  const [fav, setFav] = useState("🤍");

  // Function to toggle favorite state
  function ToggleFav(event) {
    event.stopPropagation();
    setFav((prevFav) => (prevFav === "🤍" ? "❤️" : "🤍"));
    event.stopPropagation();
  }

  return (
    <div className="restaurant-list">
      <button className="favIcon" onClick={ToggleFav}>
        {fav}
      </button>
      <Link to={`/restaurant/${id}`} className="restaurant-list">
        <img src={pic} alt={name} className="restaurant-image" />
        <span className="nameLocation">
          <h2 className="restaurantName">
            {name} - {location}
          </h2>
        </span>
        <span className="currencyAbout">
          <p>
            {currency} - {type}
          </p>
        </span>
        <span className="feedback">
          <img
            src={feedback}
            alt="feedback"
            style={{ width: 20, height: 20 }}
          />
          <p className="rating">
            Rating: <b>{rating}</b>
          </p>
        </span>
        <p className="delivery">{delivery}</p>
      </Link>
    </div>
  );
}

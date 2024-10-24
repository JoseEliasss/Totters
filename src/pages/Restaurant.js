import React from "react";
import { useState } from "react";
import "./RestaurantList.css";
import feedback from "../gallery/images/Feedback.png";
export default function Restaurant({
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

  function ToggleFav() {
    setFav((prevFav) => (prevFav === "🤍" ? "❤️" : "🤍"));
  }
  return (
    <div className="restaurant-list">
      <img
        src={pic}
        alt={name}
        className="restaurant-image" // Optional: for styling the image
      />

      <button className="favIcon" onClick={ToggleFav}>
        {fav}
      </button>

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
        <img src={feedback} alt="feedback" style={{ width: 20, height: 20 }} />
        <p className="rating">
          Rating: <b>{rating}</b>
        </p>
      </span>
      <p className="delivery"> {delivery}</p>
    </div>
  );
}

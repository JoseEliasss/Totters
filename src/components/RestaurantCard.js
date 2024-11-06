import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../gallery/style/RestaurantCard.css";

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
  discount,
}) {
  const [fav, setFav] = useState(favorite ? "❤️" : "🤍");

  // Function to toggle favorite state
  function ToggleFav(event) {
    event.stopPropagation();
    setFav((prevFav) => (prevFav === "🤍" ? "❤️" : "🤍"));
  }

  return (
    <div className="restaurant-card">
      <button className="favIcon" onClick={ToggleFav}>
        {fav}
      </button>
      <Link to={`/restaurant/${id}`} className="restaurant-card-link">
        <img src={pic} alt={name} className="restaurant-image" />
        <div className="restaurant-info">
          <h2 className="restaurantName">
            {name} - {location}
          </h2>

          <span className="delivery">{delivery}</span>

          <p>{type}</p>
          <span className="rating">⭐ {rating}</span>
          <p className="discount">{discount}</p>
        </div>
      </Link>
    </div>
  );
}

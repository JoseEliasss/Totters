import React, { useState, useEffect } from "react";
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
  // Initialize favorite status from local storage if it exists, otherwise use the passed-in prop
  const [fav, setFav] = useState(() => {
    const storedFav = localStorage.getItem(`restaurant-${id}-fav`);
    return storedFav ? storedFav : favorite ? "❤️" : "🤍";
  });

  // Function to toggle favorite state
  function ToggleFav(event) {
    event.stopPropagation();
    setFav((prevFav) => (prevFav === "🤍" ? "❤️" : "🤍"));
  }

  // useEffect to save favorite status to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem(`restaurant-${id}-fav`, fav);
  }, [fav, id]);

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
          <div className="restaurant-details">
            <p>{type}</p>
            <span className="rating">⭐ {rating}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

import React from "react";
import "../gallery/style/Hero.css";

const Hero = ({ image, title }) => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${image})` }}>
      <div className="hero-overlay">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Hero;

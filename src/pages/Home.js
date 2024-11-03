import React from "react";
import "../gallery/style/Home.css";
import Gif1 from "../gallery/images/gif1.gif";
import Gif2 from "../gallery/images/gif2.gif";
import Gif3 from "../gallery/images/gif3.gif";
import AppStore from "../gallery/images/AppStore.png";
import GooglePLay from "../gallery/images/GooglePlay.png";
import Selection from '../components/Selection';  // Update path if needed
import Hero from "../components/Hero";
import HomeHero from "../gallery/images/HomeHero.jpeg"
import Status from "../components/Status";

const Home = () => {
  return (
    <div className="home">
      <Status />
      <Hero image={HomeHero} title="Quick Reliable Convenient" />
      <div className="container">

        <div className="Hero">
          <div className="hero-details-section">
            <div className="hero-text">
              <h1 className="hero-title">Fast and Easy Delivery</h1>
              <p className="hero-desc">
                Get what you want, the way you want it,
                <br />
                exactly when you want it and pay by card or cash.
                <br />
                Delivery has never been this easy.
                <br />
                <br />
                Watch your order every step of the way,
                <br />
                from the minute you place it, to when it’s outside your door.
              </p>
            </div>
            <div className="download-tags">
              <img className="download" src={AppStore} alt="App Store"></img>
              <img
                className="download"
                src={GooglePLay}
                alt="Google PLay"
              ></img>
            </div>
          </div>
          <div className="gif-container">
            <img className="gif" src={Gif1} alt="gif1" />
            <img className="gif" src={Gif3} alt="gif3" />
            <img className="gif" src={Gif2} alt="gif2" />
          </div>
        </div>

        <Selection type="Italian" count={5} />
      </div>
    </div>
  );
};

export default Home;
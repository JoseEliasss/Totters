import React from "react";
import "../gallery/style/Home.css";
import Gif1 from "../gallery/images/gif1.gif";
import Gif2 from "../gallery/images/gif2.gif";
import Gif3 from "../gallery/images/gif3.gif";
import AppStore from "../gallery/images/AppStore.png";
import GooglePlay from "../gallery/images/GooglePlay.png";
import Selection from '../components/Selection';
import Hero from "../components/Hero";
import HomeHero from "../gallery/images/HomeHero.jpeg";
import Status from "../components/Status";

const Home = () => {
  return (
    <div className="home">
      <Status />
      <Hero image={HomeHero} title="Quick Reliable Convenient" />
      <div className="container">
        <div className="home-banner">
          <div className="banner-details">
            <h1 className="banner-heading">Easy and Effortless Delivery</h1>
            <p className="banner-description">
              Get your essentials delivered at lightning speed.
              Pay conveniently with card or cash upon arrival.
              Tracking made easy, from order to doorstep.
            </p>
            <div className="download-section">
              <img className="download-icon" src={AppStore} alt="App Store" />
              <img className="download-icon" src={GooglePlay} alt="Google Play" />
            </div>
          </div>
          <div className="gif-wrapper">
            <img className="single-gif" src={Gif1} alt="gif1" />
            <img className="single-gif" src={Gif3} alt="gif3" />
            <img className="single-gif" src={Gif2} alt="gif2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

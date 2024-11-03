import React from "react";
import "../gallery/style/AboutUs.css";
import Hero from "../components/Hero";
import deliveryImage from "../gallery/images/DeliveryImage.jpeg";
import teamImage from "../gallery/images/Founders.jpeg";
import Status from "../components/Status";

const AboutUs = () => {
  return (
    <div className="about-us">
      <Status />
      <Hero image={deliveryImage} title="Speed Service Satisfaction" />
      <section className="aboutUs-hero-container">
        <div className="aboutUs-hero-details">
          <h1 className="aboutUs-hero-heading">Welcome to Toters Delivery</h1>
          <p className="aboutUs-hero-description">
            Lebanon’s leading on-demand delivery service, making life easier and faster.
          </p>
          <button className="aboutUs-hero-button">Join Us</button>
        </div>
        <div className="aboutUs-hero-image-container">
          <img src={deliveryImage} alt="Toters Delivery" className="aboutUs-hero-img" />
        </div>
      </section>

      <section className="about-section">
        <h2 className="about-title">Our Mission</h2>
        <p className="about-description">
          At Toters Delivery Lebanon, our mission is to bring you everything you
          need at your fingertips, from your favorite meals to essential goods.
          With us, convenience is more than just a promise—it’s a way of life. 
          We ensure every delivery is quick, reliable, and seamless, no matter where you are in Lebanon.
        </p>
      </section>

      <section className="values-section">
        <h2 className="values-title">Our Values</h2>
        <p className="values-description">
          We believe in customer satisfaction, community support, and innovation. 
          Our dedicated team constantly strives to exceed expectations and provide
          an experience that combines ease, quality, and trustworthiness. 
          At Toters, we are committed to giving back to the communities we serve and 
          continuously improving our services to meet your evolving needs.
        </p>
      </section>

      <section className="team-section">
        <h2 className="team-title">Meet Our Founders</h2>
        <div className="team-image">
          <img src={teamImage} alt="Our Team" />
        </div>
        <p className="team-description">
          Toters Delivery was founded by a team of visionary entrepreneurs who saw the
          need for a more reliable, efficient delivery service in Lebanon. With backgrounds 
          in technology, logistics, and customer service, our founders are dedicated to
          transforming the delivery landscape in Lebanon and beyond. Their commitment to 
          innovation and excellence drives Toters’ mission to provide fast, dependable 
          delivery for everyone, every day. Under their leadership, Toters has grown to 
          become a trusted name in the industry, known for quality, convenience, and community.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
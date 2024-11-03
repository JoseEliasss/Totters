import React from 'react';
import '../gallery/style/ContactUs.css';
import ContactUsHero from "../gallery/images/ContactUsHero.jpeg";
import ContactLocations from '../components/Locations';
import Hero from '../components/Hero';
import Status from '../components/Status';

const ContactUs = () => {
  return (
    <div className='ContactUs'>
      <Status />
      <Hero image={ContactUsHero} title="RIGHT TO YOUR DOORSTEP" />
      <div className="contact-container">
        <div className="contact-content-section">
          <h2 className="contact-title">CONTACT US</h2>
          <hr className="contact-divider" />
          <div className="contact-form-full">
            <form className="contact-contact-form">
              <div className="contact-form-group">
                <label htmlFor="name">NAME</label>
                <input type="text" id="name" className="contact-input" />
              </div>
              <div className="contact-form-group">
                <label htmlFor="email">EMAIL</label>
                <input type="email" id="email" className="contact-input" />
              </div>
              <div className="contact-form-group">
                <label htmlFor="message">MESSAGE</label>
                <textarea id="message" className="contact-textarea no-resize"></textarea>
              </div>
              <button type="submit" className="contact-submit-button">SUBMIT</button>
            </form>
          </div>
        </div>

        <ContactLocations />

      </div>
    </div>
  );
};

export default ContactUs;

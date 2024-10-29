import React from "react";
import "../gallery/style/ContactUs.css"

const Location = ({ country, phone, mapSrc }) => (
  <div className="location">
    <h3 className="location-title">{country}</h3>
    <p className="phone-info">
      <span className="phone-label">Phone:</span> <span className="phone-number">{phone}</span>
    </p>
    <iframe className="location-map" src={mapSrc} title={`${country} location map`}></iframe>
  </div>
);

const ContactLocations = () => {
  const locations = [
    {
      country: "LEBANON",
      phone: "(+961) 9 940 308",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.8210084271304!2d-3.9764978245369176!3d5.29060689468764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eeaffa8241a5%3A0xdb24d75a34bfd7eb!2sRue%20Louis%20Lumiere%2C%20Abidjan%2C%20C%C3%B4te%20d'Ivoire!5e0!3m2!1sen!2sus!4v1716455917992!5m2!1sen!2sus",
    },
    {
      country: "IRAQ",
      phone: "(+964) 783 301 7211",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.8210084271304!2d-3.9764978245369176!3d5.29060689468764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eeaffa8241a5%3A0xdb24d75a34bfd7eb!2sRue%20Louis%20Lumiere%2C%20Abidjan%2C%20C%C3%B4te%20d'Ivoire!5e0!3m2!1sen!2sus!4v1716455917992!5m2!1sen!2sus",
    },
    {
      country: "KURDISTAN",
      phone: "(+964) 750 031 0704",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.8210084271304!2d-3.9764978245369176!3d5.29060689468764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eeaffa8241a5%3A0xdb24d75a34bfd7eb!2sRue%20Louis%20Lumiere%2C%20Abidjan%2C%20C%C3%B4te%20d'Ivoire!5e0!3m2!1sen!2sus!4v1716455917992!5m2!1sen!2sus",
    },
    {
      country: "USA",
      phone: "(+1) 857 957 6896",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.8210084271304!2d-3.9764978245369176!3d5.29060689468764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eeaffa8241a5%3A0xdb24d75a34bfd7eb!2sRue%20Louis%20Lumiere%2C%20Abidjan%2C%20C%C3%B4te%20d'Ivoire!5e0!3m2!1sen!2sus!4v1716455917992!5m2!1sen!2sus",
    },
  ];

  return (
    <div className="contact-locations">
      {locations.map((location, index) => (
        <Location
          key={index}
          country={location.country}
          phone={location.phone}
          mapSrc={location.mapSrc}
        />
      ))}
    </div>
  );
};

export default ContactLocations;

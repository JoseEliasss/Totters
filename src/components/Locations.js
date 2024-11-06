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
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13245.762699117166!2d35.5764795!3d33.9040562!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17f5284f4d2d%3A0x12fc035dcc4c6352!2sToters%20Lebanon!5e0!3m2!1sen!2slb!4v1730934377562!5m2!1sen!2slb",
    },
    {
      country: "IRAQ",
      phone: "(+964) 783 301 7211",
      mapSrc:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13336.086058473997!2d44.3414646!3d33.318253!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15577f0056252b5b%3A0xe1c4096c71e8a26b!2zVG90ZXJzIERlbGl2ZXJ5IC0g2LTYsdmD2Kkg2KrZiNiq2LHYsg!5e0!3m2!1sen!2slb!4v1730934777194!5m2!1sen!2slb",
    },
    {
      country: "KURDISTAN",
      phone: "(+964) 750 031 0704",
      mapSrc:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12872.226007966532!2d44.0090854!3d36.2381214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4007195c66dac29f%3A0xff2107c0c1634133!2sToters%20Erbil%20Office!5e0!3m2!1sen!2slb!4v1730934516477!5m2!1sen!2slb",
    },
    {
      country: "USA",
      phone: "(+1) 857 957 6896",
      mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.0730539610413!2d-77.04019509999999!3d38.89944469999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bb9bc276d9%3A0xabe5310521c1a67!2s1717%20Pennsylvania%20Avenue%20NW%20Suite%201025%2C%20Washington%2C%20DC%2020006%2C%20USA!5e0!3m2!1sen!2slb!4v1730934658762!5m2!1sen!2slb",
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

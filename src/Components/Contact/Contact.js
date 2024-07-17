import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="separator-wrapper">
        <hr className="separator" />
        <span className="contact-text">Contact</span>
        <hr className="separator" />
      </div>
      <div className="contact-info">
        <div className="left-panel">
          <h2>Address</h2>
          <p>1594 Rockaway Parkway, Brooklyn, NY, 11236</p>
          <h2>Phone Number</h2>
          <p>(718) 257-3068</p>
          <h2>Hours</h2>
          <p>Mon - 5:00 AM - 4:00 PM
          <br /><br />
          Tue - 5:00 AM - 4:00 PM
          <br /><br />
          Wed - 5:00 AM - 4:00 PM
          <br /><br />
          Thu - 5:00 AM - 4:00 PM
          <br /><br />
          Fri - 5:00 AM - 4:00 PM
          <br /><br />
          Sat - 5:00 AM - 4:00 PM
          <br /><br />
          Sun - 6:00 AM - 2:00 PM
          </p>
        </div>
        <div className="right-panel">
          <iframe
            title="Google Map"
            width="400"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            src={`https://www.google.com/maps/embed/v1/place?q=1594+Rockaway+Parkway,+Brooklyn,+NY&key=AIzaSyBjlJK3-oQn_inrj0tEszgv_yq87dVJXl8`}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;

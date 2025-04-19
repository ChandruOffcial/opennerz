import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <div className="icon">✈️</div>
        <h2>Get In Touch</h2>
        <p>
          We'd love to chat about what you are trying to achieve and your
          current circumstances
        </p>
      </div>
      <form className="contact-right">
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" placeholder="S. Rahman" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" />
          </div>
        </div>
        <div className="form-group full-width">
          <label>Message</label>
          <textarea rows="4"></textarea>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default ContactForm;

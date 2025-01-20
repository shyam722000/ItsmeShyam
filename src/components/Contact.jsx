import React from "react";
import SpaceBackground from "./ThreeCanvas";
import "./Contact.css";

const ContactPage = () => {
  return (
    <div className="Cus-container">
      <SpaceBackground />

      <div className="Cus-content">
        <div className="Cus-notebook">
          <div className="Cus-notebook-left">
            <h2>Contact Form</h2>
            <form>
              <label>
                Name:
                <input type="text" name="name" required />
              </label>
              <label>
                Email:
                <input type="email" name="email" required />
              </label>
              <label>
                Message:
                <textarea name="message" required></textarea>
              </label>
            </form>
          </div>
          <div className="Cus-notebook-right">
            <p>
              Thank you for reaching out! Feel free to send your message, and
              I'll get back to you as soon as possible.
            </p>
            <button type="submit" className="Cus_button">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

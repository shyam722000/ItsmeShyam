import React, { useState } from "react";
import SpaceBackground from "./ThreeCanvas";
import "./Contact.css";
import logo from "../loho.png";
import { Link } from "react-router-dom";




const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formUrl =
      // "https://docs.google.com/forms/d/e/1FAIpQLSdQk9H_Duck0yS3NFc5Fvwgj73FwFn9BysOq8Num9DkOeJPkw/formResponse";
      "https://tinyurl.com/2ud4rbtp";

    const formParams = new URLSearchParams();

    // Map your Google Form field IDs here (replace with actual entry IDs from your form)
    formParams.append("entry.1381904936", formData.name); // Replace with Name field's entry ID
    formParams.append("entry.967548869", formData.email); // Replace with Email field's entry ID
    formParams.append("entry.207168176", formData.message); // Replace with Message field's entry ID

    fetch(formUrl, {
      method: "POST",
      mode: "no-cors", // Prevents CORS errors
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formParams,
    })
      .then(() => {
        alert("Your message has been submitted!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("There was an error submitting your message.");
      });
  };

  return (
    <div className="Cus-container">
        <div className="Pro_">
              <div className="Pro_-logo">
                <img src={logo} alt="Company Logo" />
              </div>
              <nav className="Pro_-nav-links">
                <a href="/">Home</a>
                <Link to="/about">About</Link>
               
                <Link to="/projects">Projects</Link>
              </nav>
            </div>
      <SpaceBackground />

      <div className="Cus-content">
        <div className="Cus-notebook">
          <div className="Cus-notebook-left">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Message:
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
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

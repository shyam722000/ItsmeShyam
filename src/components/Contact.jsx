import React, { useState } from "react";
import SpaceBackground from "./ThreeCanvas";
import "./Contact.css";
import logo from "../loho.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Validate Name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
      isValid = false;
    }

    // Validate Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    // Validate Message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
      isValid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

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
        toast.success("Your message has been submitted!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("There was an error submitting your message. Reach me on +91 7034621688");
      });
  };

  return (
    <div className="Cus-container">
      <ToastContainer position="top-right" autoClose={3000} />
        <div className="project_header">
        <div className="project_logo">
          <img src={logo} alt="Company Logo" />
        </div>
        <nav className="project_nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </nav>
      </div>
      <SpaceBackground />

      <div className="Cus-content">
        <div className="Cus-notebook">
          <div className="Cus-notebook-left">
            <h2>Contact Me</h2>
            <form >
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                    {errors.name && <p className="error">{errors.name}</p>}
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
                  {errors.email && <p className="error">{errors.email}</p>}
              </label>
              <label>
                Message:
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                >

                </textarea>
                {errors.message && <p className="error">{errors.message}</p>}
              </label>
              
            </form>
          </div>
          <div className="Cus-notebook-right">
            <p>
              Thank you for reaching out! Feel free to send your message, and
              I'll get back to you as soon as possible.
            </p>
            <button type="submit" className="Cus_button" onClick={handleSubmit}>
                Submit
              </button>
              <div>
            <p>Or Reach me on +91 7034621688</p>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

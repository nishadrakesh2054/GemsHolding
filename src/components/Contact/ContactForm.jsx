"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm({ theme }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [SuccessMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_6z9yrn5",
        "template_tpkchdu",
        {
          from_name: formData.name,
          to_name: "HR",
          reply_to: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "RmCKwzMeguSmfZC1X"
      )
      .then((response) => {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setSuccessMessage("We will get back to you!");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        setSuccessMessage("Something went wrong!");
      });
  };

  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h4 className="fw-700 color-font mb-50">Get In Touch.</h4>

              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="messages"></div>

                <div className="controls">
                  <div className="form-group">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required="required"
                      onChange={handleChange}
                      value={formData.name}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required="required"
                      onChange={handleChange}
                      value={formData.email}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="form_phone"
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      onChange={handleChange}
                      value={formData.phone}
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder="Message"
                      rows="4"
                      required="required"
                      onChange={handleChange}
                      value={formData.message}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={`butn ${theme === "light" ? "dark" : "bord"}`}
                  >
                    <span>Send Message</span>
                  </button>
                </div>
                {SuccessMessage && <p>{SuccessMessage}</p>}
              </form>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cont-info">
              <h4 className="fw-700 color-font mb-50">Contact Info.</h4>
              <div className="item mb-40">
                <h5>
                  <a href="mailto:hello@gemsholdings.com.np">
                    hello@gemsholdings.com.np
                  </a>
                </h5>
                <h5>+977 1 5275111</h5>
              </div>
              <div className="item">
                <h6>
                  Dhapakhel, Lalitpur, Nepal
                  <br />
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;

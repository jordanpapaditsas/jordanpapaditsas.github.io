import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f16zuqw",
        "template_y38xms5",
        form.current,
        "JxMPLCT7Q6qWRa5fF"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email sent successfully!');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-title-text">
          <h2>Contact Me</h2>
        </div>
        <span className="contact-description">
          Please fill out the form.{" "}
        </span>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" required placeholder="Your Name" name="your_name" />
          <input type="email" className="email" required placeholder="Your Email" name="your_email" />
          <textarea
            required
            className="message-box"
            name="message"
            rows="5"
            placeholder="Hi Jordan!"
          ></textarea>
          <button type="submit" value="Send" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

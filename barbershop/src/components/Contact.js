import React, { Component } from "react";


export class Contact extends Component {
  render() {
    return (
      <section className="contact">

        <div className="contact-info">
          <span className="bg-text">CONTACT</span>

          <h2>GET IN TOUCH</h2>

          <p>
            We'd love to hear from you. Book an appointment or ask us
            any questions.
          </p>

          <div className="contact-details">
            <div>
              <h4>📍 Address</h4>
              <p>123 Barber Street, New York</p>
            </div>

            <div>
              <h4>📞 Phone</h4>
              <p>+1 (234) 567-890</p>
            </div>

            <div>
              <h4>✉ Email</h4>
              <p>info@barbershop.com</p>
            </div>

            <div>
              <h4>🕒 Working Hours</h4>
              <p>Mon - Fri: 9:00 AM - 7:30 PM</p>
            </div>
          </div>
        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="text"
            placeholder="Phone Number"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button>Send Message</button>

        </form>

      </section>
    );
  }
}

export default Contact;
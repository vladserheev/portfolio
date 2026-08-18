import React, { Component } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">

        <div className="footer-top">

          <div className="footer-logo">
            <h2>BARBER</h2>
            <p>
              Professional barber shop for men only.
              Quality haircuts and premium grooming services.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>

            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact</a>
          </div>

          <div className="footer-contact">
            <h3>Contact</h3>

            <p>📍 New York, USA</p>
            <p>📞 +1 (234) 567-890</p>
            <p>✉ info@barber.com</p>
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>

            <div className="social-icons">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaYoutube />
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Barber Shop. All Rights Reserved.</p>
        </div>

      </footer>
    );
  }
}

export default Footer;
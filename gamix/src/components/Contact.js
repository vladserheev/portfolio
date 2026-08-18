import React, { Component } from 'react'

export class Contact extends Component {
  render() {
    return (
      <section className="contact">

        <div className="contact-info">
          <span className="eyebrow">Get in touch</span>
          <h2>Contact Us</h2>
          <p>Questions about an order, a game key, or your library? Our team usually replies within a few hours.</p>

          <div className="info-row">
            <div className="icon">@</div>
            <div>
              <div className="label">Email</div>
              <div className="value">support@gamix.com</div>
            </div>
          </div>

          <div className="info-row">
            <div className="icon">☎</div>
            <div>
              <div className="label">Phone</div>
              <div className="value">+1 (555) 018-2043</div>
            </div>
          </div>

          <div className="info-row">
            <div className="icon">📍</div>
            <div>
              <div className="label">Address</div>
              <div className="value">221 Neon Street, Los Angeles, CA</div>
            </div>
          </div>

          <div className="socials">
            <a href="#" aria-label="Discord">D</a>
            <a href="#" aria-label="X / Twitter">X</a>
            <a href="#" aria-label="Instagram">IG</a>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send a message</h2>
          <p>Fill out the form and we'll get back to you.</p>

          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="you@example.com" />
            </div>

            <div className="field full">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="What's this about?" />
            </div>

            <div className="field full">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Write your message..."></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

      </section>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // TODO: hook this up to your submit logic (API call, EmailJS, etc.)
    console.log('Contact form submitted')
  }
}

export default Contact
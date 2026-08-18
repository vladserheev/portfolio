import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
      <section className="about">

        <div className="about-hero">
          <div className="copy">
            <span className="eyebrow">About Gamix</span>
            <h1>Built by gamers, <span>for gamers</span></h1>
            <p>Gamix started as a small side project between friends tired of clunky storefronts and slow downloads. Today it's a place to buy, collect, and play the games you actually care about — no clutter, no nonsense.</p>
            <p>We work directly with studios and publishers to bring you fair prices, instant delivery, and a library that's actually yours.</p>
          </div>
          <div className="visual"></div>
        </div>

        <div className="stats">
          <div className="stat">
            <div className="number">12k+</div>
            <div className="label">Games in catalog</div>
          </div>
          <div className="stat">
            <div className="number">850k</div>
            <div className="label">Active players</div>
          </div>
          <div className="stat">
            <div className="number">120+</div>
            <div className="label">Partner studios</div>
          </div>
          <div className="stat">
            <div className="number">99.9%</div>
            <div className="label">Uptime</div>
          </div>
        </div>

        <div className="section-heading">
          <h2>What we stand for</h2>
          <p>A few principles that shape every feature we ship.</p>
        </div>

        <div className="values">
          <div className="value-card">
            <div className="icon">⚡</div>
            <h3>Instant Access</h3>
            <p>Buy a game and start playing in seconds — no queues, no waiting on activation emails.</p>
          </div>
          <div className="value-card">
            <div className="icon">🔒</div>
            <h3>Secure by Default</h3>
            <p>Your payments, library, and account are protected with industry-standard encryption.</p>
          </div>
          <div className="value-card">
            <div className="icon">🤝</div>
            <h3>Fair to Creators</h3>
            <p>We work directly with studios so more of every purchase goes back into the games you love.</p>
          </div>
        </div>

        <div className="section-heading">
          <h2>Meet the team</h2>
          <p>A small crew obsessed with good games and better storefronts.</p>
        </div>

        <div className="team">
          {this.teamMembers.map((member) => (
            <div className="member" key={member.name}>
              <div className="avatar"></div>
              <h3>{member.name}</h3>
              <span>{member.role}</span>
            </div>
          ))}
        </div>

        <div className="about-cta">
          <h2>Ready to build your library?</h2>
          <p>Join hundreds of thousands of players already on Gamix.</p>
          <button className="cta-btn" onClick={this.props.onExplore}>Explore Store</button>
        </div>

      </section>
    )
  }

  teamMembers = [
    { name: 'Alex Rayhan', role: 'Founder & CEO' },
    { name: 'Esther Howard', role: 'Head of Product' },
    { name: 'Cody Fisher', role: 'Lead Engineer' },
    { name: 'Jacob Jones', role: 'Community Lead' },
  ]
}

export default About
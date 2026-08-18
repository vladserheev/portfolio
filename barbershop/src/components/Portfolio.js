import React, { Component } from "react";

export class Portfolio extends Component {
  render() {
    const images = [
      {
        img: "/projects/barbershop/img/work1.jpg",
        title: "Classic Haircut",
      },
      {
        img: "/projects/barbershop/img/work2.jpg",
        title: "Beard Trim",
      }
    ];

    return (
      <section className="portfolio">
        <div className="portfolio-header">
          <span className="bg-text">GALLERY</span>

          <h2>OUR PORTFOLIO</h2>

          <p>
            Discover some of our latest work and transformations.
            Every haircut is crafted with passion and precision.
          </p>
        </div>

        <div className="portfolio-grid">
          {images.map((item, index) => (
            <div className="portfolio-item" key={index}>
              <img src={item.img} alt={item.title} />

              <div className="overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Portfolio;
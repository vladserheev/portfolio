import React, { Component } from "react";
import ProvideSection from "./ProvideSection";
import Booking from "./Booking";
import Portfolio from "./Portfolio";

export class Info extends Component {
  render() {
    return (
      <>
        <section id="about" className="info">

  <div className="info-top">
    <div className="info-title">
      <h1>
        Professional barber shop
        <br />
        for men only
      </h1>
    </div>

    <div className="info-description">
      <p>
        Et tellus rhoncus urna a. Tempus felis, sociis lorem aliquet
        nibh pellentesque. Vitae nunc, dolor, blandit eget eleifend
        etiam id. Amet arcu lobortis sed pulvinar cursus pretium sit
        pretium.
      </p>
    </div>
  </div>

  <div className="info-bottom">
    <div className="info-card">
      <h2>Since 2015</h2>

      <p>
        Dui cursus neque et at ipsum. Cursus urna fringilla nisl enim
        duis cras odio.
      </p>

      <button>Learn More</button>
    </div>

    <div className="info-card">
      <h2>1000+ Clients</h2>

      <p>
        Dui cursus neque et at ipsum. Cursus urna fringilla nisl enim
        duis cras odio.
      </p>
    </div>
  </div>

</section>
      </>
    );
  }
}

export default Info;
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <span className="hero-subtitle">Premium Barber Shop</span>

        <h1>
          PROFESSIONAL
          <br />
          BARBER FOR
          <br />
          GENTLEMEN
        </h1>

        <p>
          Experience premium haircuts, beard grooming, and classic shaving
          services in a modern atmosphere. Our skilled barbers ensure you
          always leave looking your best.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Book Now</button>
          <button className="secondary-btn">Our Services</button>
        </div>
      </div>

      <div className="hero-image">
        <img src="./img/hero.jpg" alt="Barber" />
      </div>
    </section>
  );
}
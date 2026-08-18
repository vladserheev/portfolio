

export default function Booking() {
  return (
    <section className="booking">
      <div className="overlay">

        <div className="booking-left">
          <h1>
            TEAM OF PROFESSIONALS
            <br />
            IS WAITING FOR YOU
          </h1>

          <p>
            Risus odio lobortis ullamcorper felis vitae bibendum mi.
            Penatibus fusce consequat donec vitae porttitor elementum
            volutpat gravida. Tellus hac tristique nisi, id amet cras
            tempor, amet.
          </p>

          <button>BOOK NOW</button>
        </div>

        <div className="booking-right">
          <h2>
            SPECIAL OPENING
            <br />
            HOURS
          </h2>

          <div className="hours">

            <div>
              <div className="row">
                <span>MONDAY:</span>
                <p>9:00 am – 7:30 pm</p>
              </div>

              <div className="row">
                <span>TUESDAY:</span>
                <p>9:00 am – 7:30 pm</p>
              </div>

              <div className="row">
                <span>WEDNESDAY:</span>
                <p>9:00 am – 7:30 pm</p>
              </div>
            </div>

            <div>
              <div className="row">
                <span>THURSDAY:</span>
                <p>9:00 am – 7:30 pm</p>
              </div>

              <div className="row">
                <span>FRIDAY:</span>
                <p>9:00 am – 7:30 pm</p>
              </div>

              <div className="row">
                <span>SAT/SUN:</span>
                <p>CLOSED</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
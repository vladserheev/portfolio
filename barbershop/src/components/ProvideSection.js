
import {
  FaCut,
  FaAirFreshener,
  FaUserTie,
  FaSprayCan,
  FaGrinBeam,
  FaMagic,
} from "react-icons/fa";

export default function ProvideSection() {
  const services = [
    {
      icon: <FaCut />,
      title: "HAIRCUT",
      text: "A dui aliquam ultrices eros lorem nibh vivamus. Quis aliquam duis pharetra faucibus ultrices volutpat quisque.",
    },
    {
      icon: <FaAirFreshener />,
      title: "MOUSTACHE",
      text: "Viverra duis ut orci mi id. Eget ultricies facilisi elementum nec vel a gravida facilisis in.",
    },
    {
      icon: <FaUserTie />,
      title: "SHAVE",
      text: "Lorem velit parturient consectetur cursus tincidunt tristique pretium volutpat urna.",
    },
    {
      icon: <FaSprayCan />,
      title: "STACKING",
      text: "Dapibus ac mattis semper hendrerit eu dolor aliquam. Vitae sem orci non diam.",
    },
    {
      icon: <FaGrinBeam />,
      title: "BEARD TRIM",
      text: "Interdum tincidunt condimentum vestibulum feugiat arcu, in. Maecenas sit sem erat tellus.",
    },
    {
      icon: <FaMagic />,
      title: "HAIR DYEING",
      text: "Congue pulvinar morbi pharetra tincidunt vel tincidunt. Amet, morbi neque tellus.",
    },
  ];

  return (
    <section className="services">

      <span className="bg-title">SERVICES</span>

      <div className="heading">
        <h2>WHAT WE PROVIDE</h2>

        <p>
          Risus odio lobortis ullamcorper felis vitae bibendum mi.
          Penatibus fusce consequat donec vitae porttitor elementum.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>

            <div>
              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <span>FROM $30</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

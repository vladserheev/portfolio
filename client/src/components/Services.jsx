import { useTranslation } from "../i18n";

function Services() {
    const { t } = useTranslation();

    const items = t("services.items");

    return (
        <section className="services" id="services">

            <div className="services-header">
                <div className="services-label">
                    <span>{t("services.label")}</span>
                </div>

                <h2>
                    {t("services.heading").split('\n').map((line, idx, arr) => (
                        <span key={idx}>
                            {line}
                            {idx !== arr.length - 1 && <br />}
                        </span>
                    ))}
                </h2>
            </div>


            <div className="services-list">

                {items.map((service) => (
                    <div className="service" key={service.number}>

                        <div className="service-number">
                            {service.number}
                        </div>

                        <div className="service-main">

                            <div className="service-title">
                                <h3>{service.title}</h3>

                                <span className="service-arrow">
                                    ↗
                                </span>
                            </div>

                            <div className="service-details">

                                <p>
                                    {service.description}
                                </p>

                                <span className="service-tech">
                                    {service.technologies}
                                </span>

                            </div>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default Services;
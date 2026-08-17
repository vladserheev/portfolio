import { useTranslation } from "../i18n";

function About() {
    const { t } = useTranslation();

    const renderWithLineBreaks = (text) => (
        text.split('\n').map((line, idx, arr) => (
            <span key={idx}>
                {line}
                {idx !== arr.length - 1 && <br />}
            </span>
        ))
    );

    return (
        <section className="about" id="about">

            <div className="about-left">
                <h2>
                    {renderWithLineBreaks(t("about.heading"))}
                </h2>

                <button className="about-button">
                    {t("about.view_button")}
                </button>
            </div>

            <div className="about-right">

                <div className="about-block">
                    <h3>{t("about.about_title")}</h3>

                    <p>
                        {t("about.about_text")}
                    </p>
                </div>

                <div className="about-block">
                    <h3>{t("about.approach_title")}</h3>

                    <p>
                        {t("about.approach_text")}
                    </p>
                </div>

            </div>

        </section>
    );
}

export default About;
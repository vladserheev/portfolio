import { useTranslation } from "../i18n";

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">

            <div className="footer-top">

                <div className="footer-brand">
                    <h2>
                        VLADYSLAV
                        <br />
                        SERHIEIEV
                    </h2>
                </div>

                <div className="footer-links">

                    <div className="footer-column">
                        <span>{t("footer.social")}</span>

                        <a
                            href="https://github.com/vladserheev/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {t("footer.github")}
                        </a>

                        <a
                            href="https://www.linkedin.com/in/vladyslav-serhieiev-page/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {t("footer.linkedin")}
                        </a>
                    </div>


                    <div className="footer-column">
                        <span>{t("footer.contact")}</span>

                        <a href="mailto:sergeev.vladyslav@gmail.com">
                            {t("footer.email")}
                        </a>

                        <a href="tel:+48536148019">
                            {t("footer.phone")}
                        </a>
                    </div>


                    <div className="footer-column">
                        <span>{t("footer.navigation")}</span>

                        <a href="#about">{t("footer.about")}</a>
                        <a href="#cases">{t("footer.cases")}</a>
                        <a href="#services">{t("footer.services")}</a>
                        <a href="#contact">{t("footer.contact_link")}</a>
                    </div>

                </div>

            </div>


            <div className="footer-bottom">

                <span>
                    {t("footer.copyright")}
                </span>

                <span>
                    {t("footer.designed")}
                </span>

                <span>
                    {t("footer.location")}
                </span>

            </div>

        </footer>
    );
}

export default Footer;
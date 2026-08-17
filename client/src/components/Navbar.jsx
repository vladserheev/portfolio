import { useEffect, useState } from "react";
import { useTranslation } from "../i18n";

function Navbar() {
    const [time, setTime] = useState(new Date());
    const { lang, setLang, t } = useTranslation();

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const localeMap = { en: "en-GB", pl: "pl-PL", ua: "uk-UA" };
    const formattedTime = time.toLocaleTimeString(localeMap[lang] || "en-GB");

    return (
        <header className="navbar">

            <div className="navbar-left">

                <span className="local-time">
                    {t("navbar.local_prefix")} <strong className="time">{formattedTime}</strong>
                </span>

                <a
                    href="#contact"
                    className="phone-button"
                    aria-label={t("navbar.phone_aria")}
                >
                    ☎
                </a>

            </div>


            <div className="navbar-right">

            <div className="language-switcher">
                <select
                    value={lang}
                    onChange={(e) => setLang(e.target.value)}
                    aria-label="Select language"
                >
                    <option value="en">EN</option>
                    <option value="pl">PL</option>
                    <option value="ua">UA</option>
                </select>
            </div>

                <a href="#about" className="menu-button" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                    {t("navbar.menu")}
                </a>

            </div>

        </header>
    );
}

export default Navbar;
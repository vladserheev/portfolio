import { useTranslation } from "../i18n";

function Presentation() {
    const { t } = useTranslation();

    return (
        <div className="presentation">
            <div className="name">
                <div className="availability">
                    <span className="availability-dot"></span>
                    <h2>{t("presentation.available")}</h2>
                </div>
                <h1>{t("presentation.name1")}vvvvvv</h1>
                <h1>{t("presentation.name2")}</h1>
            </div>

            <div className="bottom-info">
                <h2>{t("presentation.based")}</h2>
                <h2>{t("presentation.role")}</h2>
            </div>
        </div>
    );
}

export default Presentation;
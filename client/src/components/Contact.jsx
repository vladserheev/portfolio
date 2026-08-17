import { useState } from "react";
import { useTranslation } from "../i18n";


function Contact() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch("http://localhost:3000/api/contact", {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(formData),
        });

        const data = await response.json();

        console.log(data);
    };

    const renderWithLineBreaks = (text) => (
        text.split('\n').map((line, idx, arr) => (
            <span key={idx}>
                {line}
                {idx !== arr.length - 1 && <br />}
            </span>
        ))
    );

    return (
        <section className="contact" id="contact">

            <div className="contact-header">
                <span>{t("contact.label")}</span>

                <h2>
                    {renderWithLineBreaks(t("contact.heading"))}
                </h2>
            </div>


            <form className="contact-form" onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="name">
                        {t("contact.name_label")}
                    </label>

                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder={t("contact.name_placeholder")}
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>


                <div className="form-group">
                    <label htmlFor="email">
                        {t("contact.email_label")}
                    </label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={t("contact.email_placeholder")}
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>


                <div className="form-group">
                    <label htmlFor="message">
                        {t("contact.project_label")}
                    </label>

                    <textarea
                        id="message"
                        name="message"
                        placeholder={t("contact.project_placeholder")}
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>


                <button
                    type="submit"
                    className="contact-submit"
                >
                    {t("contact.submit")}
                </button>

            </form>

        </section>
    );
}

export default Contact;
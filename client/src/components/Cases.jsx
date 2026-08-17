import { useTranslation } from "../i18n";

const images = {
  1: "/cases/spider.jpg",
  2: "/cases/barber.jpg",
};

function Cases() {
  const { t } = useTranslation();
  const items = t("cases.items");

  return (
  <section className="cases" id="cases">

      <div className="cases-header">

        <div className="cases-description">
          <p>
            {t("cases.description")}
          </p>

          <button>
            {t("cases.view_portfolio")}
          </button>
        </div>

        <h2>{t("cases.featured")}</h2>

      </div>


      <div className="cases-grid">

        {items.map((item) => (
          <article className="case" key={item.id}>

            <div className="case-image">
              <a href={item.link || '#'}>
                <img
                  src={images[item.id] || '/cases/spider.jpg'}
                  alt={item.title}
                />
              </a>
            </div>

            <div className="case-info">
              <h3>{item.title}</h3>
              <span>{item.category}</span>
            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Cases;
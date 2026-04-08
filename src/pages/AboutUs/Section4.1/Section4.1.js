import { t } from "../../../translation/translation";

const Section4items = [
    {
        type: "base",
        h3: t("section4.1.h3.1"),
        title: t("section4.1.title.1"),
        price: t("section4.1.price.1"),
        features: [
            { text: t("section4.1.text.1.1"), included: true },
            { text: t("section4.1.text.1.2"), included: true },
            { text: t("section4.1.text.1.3"), included: true },
            { text: t("section4.1.text.1.4"), included: false },
            { text: t("section4.1.text.1.5"), included: false }
        ]
    },
    {
        type: "popular",
        h3: t("section4.1.h3.2"),
        title: t("section4.1.title.2"),
        price: t("section4.1.price.2"),
        features: [
            { text: t("section4.1.text.2.1"), included: true },
            { text: t("section4.1.text.2.2"), included: true },
            { text: t("section4.1.text.2.3"), included: true },
            { text: t("section4.1.text.2.4"), included: true },
            { text: t("section4.1.text.2.5"), included: true }
        ]
    },
    {
        type: "premium",
        h3: t("section4.1.h3.3"),
        title: t("section4.1.title.3"),
        price: t("section4.1.price.3"),
        features: [
            { text: t("section4.1.text.3.1"), included: true },
            { text: t("section4.1.text.3.2"), included: true },
            { text: t("section4.1.text.3.3"), included: true },
            { text: t("section4.1.text.3.4"), included: true },
            { text: t("section4.1.text.3.5"), included: true }
        ]
    }
];

const createPricingCards = () => {
    return Section4items.map(item => `
        <div class="PriceCard ${item.type === 'popular' ? 'PriceCard--active' : ''}">
            ${item.type === 'popular' ? `<div class="PriceCard_badge">${t("section4.1.popular")}</div>` : ''}
            <h3 class="PriceCard_h3">${item.h3}</h3>
            <p class="PriceCard_title">${item.title}</p>
            <div class="PriceCard_price">${item.price} <span>/ m²</span></div>
            
            <ul class="PriceCard_list">
                ${item.features.map(f => `
                    <li class="${f.included ? 'included' : 'excluded'}">
                        ${f.text}
                    </li>
                `).join("")}
            </ul>
            
            <button class="PriceCard_btn">${t("section4.1.button") || "Choose plan"}</button>
        </div>
    `).join("");
};

export const AboutSection4 = () => {
    return /* html */ `
    <section class="AboutSection4">
        <div class="AboutSection4_container">
            <span class="AboutSection4_subtitle">${t("section4.1.title")}</span>
            <h2 class="AboutSection4_h2">${t("section4.1.h2")}</h2>
            <p class="AboutSection4_desc">${t("section4.1.p")}</p>
            
            <div class="AboutSection4_grid">
                ${createPricingCards()}
            </div>
        </div>
    </section>
    `;
};
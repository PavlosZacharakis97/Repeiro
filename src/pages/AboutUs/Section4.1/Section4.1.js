const Section4items = [
    {
        type: "base",
        h3: "Эскизный",
        title: "Базовое планирование и концепция",
        price: "от 1 500 ₽",
        features: [
            { text: "Обмерный план", included: true },
            { text: "Планировочное решение (2 варианта)", included: true },
            { text: "Концепция (коллажи)", included: true },
            { text: "3D визуализация", included: false },
            { text: "Рабочие чертежи", included: false }
        ]
    },
    {
        type: "popular",
        h3: "Полный",
        title: "Стандартный проект для ремонта",
        price: "от 3 000 ₽",
        features: [
            { text: "Обмерный план", included: true },
            { text: "Планировочное решение (3 варианта)", included: true },
            { text: "Фотореалистичная 3D визуализация", included: true },
            { text: "Полный пакет рабочих чертежей", included: true },
            { text: "Ведомость материалов и мебели", included: true }
        ]
    },
    {
        type: "premium",
        h3: "Премиум",
        title: "Под ключ с авторским надзором",
        price: "от 5 500 ₽",
        features: [
            { text: "Все опции тарифа «Полный»", included: true },
            { text: "Комплектация объекта (закупки)", included: true },
            { text: "Авторский надзор до конца стройки", included: true },
            { text: "Декорирование интерьера", included: true },
            { text: "Приоритетная линия поддержки", included: true }
        ]
    }
];

const createPricingCards = () => {
    return Section4items.map(item => `
        <div class="PriceCard ${item.type === 'popular' ? 'PriceCard--active' : ''}">
            ${item.type === 'popular' ? '<div class="PriceCard_badge">Популярный</div>' : ''}
            <h3 class="PriceCard_h3">${item.h3}</h3>
            <p class="PriceCard_title">${item.title}</p>
            <div class="PriceCard_price">${item.price} <span>/ м²</span></div>
            
            <ul class="PriceCard_list">
                ${item.features.map(f => `
                    <li class="${f.included ? 'included' : 'excluded'}">
                        ${f.text}
                    </li>
                `).join("")}
            </ul>
            
            <button class="PriceCard_btn">Выбрать тариф</button>
        </div>
    `).join("");
};

export const AboutSection4 = () => {
    return /* html */ `
    <section class="AboutSection4">
        <div class="AboutSection4_container">
            <span class="AboutSection4_subtitle">СТОИМОСТЬ УСЛУГ</span>
            <h2 class="AboutSection4_h2">Цены на дизайн-проекты</h2>
            <p class="AboutSection4_desc">Выберите подходящий пакет услуг в зависимости от ваших задач и бюджета.</p>
            
            <div class="AboutSection4_grid">
                ${createPricingCards()}
            </div>
        </div>
    </section>
    `;
};
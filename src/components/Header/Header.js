import gopuram from "/image/gopuram.png";

const translations = {
  ru: {
    about: "О компании",
    news: "Новости",
    help: "Помощь",
    reviews: "Отзывы",
    contacts: "Контакты",
    supportName: "Служба продаж:",
    langBtn: "EN",
  },
  en: {
    about: "About Us",
    news: "News",
    help: "Help",
    reviews: "Reviews",
    contacts: "Contacts",
    supportName: "Sales Department",
    langBtn: "RU",
  },
};

let currentLang = "ru";

const createLinks = (lang) => {
  const t = translations[lang];

  const links = [
    { name: t.about, link: "#" },
    { name: t.news, link: "#" },
    { name: t.help, link: "#" },
    { name: t.reviews, link: "#" },
    { name: t.contacts, link: "#" },
  ];
  return links
    .map((element) => `<a href="${element.link}">${element.name}</a>`)
    .join("");
};

export const Header = () => {
  const t = translations[currentLang];

  return `
    <header class="Header">
      <div class="Header_logo_img">
          <a class="logo_link" href="/"><img src="${gopuram}" alt="header logo"></a>
      </div>
      <nav class="nav_links">
        ${createLinks(currentLang)}
        
        <div class="Header_support">
            <span class="Header_support_name">${t.supportName}</span>
            <span class="Header_support_number">+7 495 123-45-67</span>
        </div>

        <button id="lang-switcher" class="lang_btn">
            ${t.langBtn}
        </button>
      </nav>
    </header>
    `;
};

// export const initLanguageToggle = (renderCallback) => {
//     const btn = document.getElementById('lang-switcher');
//     if (btn) {
//         btn.addEventListener('click', () => {
//             currentLang = currentLang === "ru" ? "en" : "ru";
//             renderCallback();
//         });
//     }
// };
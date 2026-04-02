import gopuram from "/image/gopuram.png";

const translations = {
  ru: {
    links: [
      { name: "О компании", link: "#section_4" },
      { name: "Новости", link: "#section_5" },
      { name: "Помощь", link: "#" },
      { name: "Отзывы", link: "#" },
      { name: "Контакты", link: "#footer" },
    ],
    supportName: "Служба продаж:",
  },
  en: {
    links: [
      { name: "About Us", link: "#section_4" },
      { name: "News", link: "#section_5" },
      { name: "Help", link: "#" },
      { name: "Reviews", link: "#" },
      { name: "Contacts", link: "#footer" },
    ],
    supportName: "Sales Department",
  },
};

let currentLang = localStorage.getItem("lang") || "ru";

export const Header = () => {
  const t = translations[currentLang];

  return /*html*/ `
    <header class="Header">
      <a class="Header_logo" href="/"><img src="${gopuram}" alt="logo"></a>
      
      <div class="burger_menu" id="burger-trigger">
          <span></span><span></span><span></span>
      </div>

      <nav class="Header_nav" id="header-nav">
        <div class="nav_links">
            ${t.links.map(item => `<a href="${item.link}">${item.name}</a>`).join("")}
        </div>
        
        <div class="Header_right">
            <div class="Header_support">
                <span class="Header_support_name">${t.supportName}</span>
                <a href="tel:+74951234567" class="Header_support_number">+7 495 123-45-67</a>
            </div>

            <div class="lang_switcher">
                <button class="lang_btn ${currentLang === 'ru' ? 'active' : ''}" data-lang="ru">RU</button>
                <button class="lang_btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
            </div>
        </div>
      </nav>
    </header>
    `;
};




document.addEventListener("click", (e) => {

    const burger = e.target.closest("#burger-trigger");
    if (burger) {
        const nav = document.querySelector("#header-nav");
        if (nav) {
            nav.classList.toggle("nav--open");
            burger.classList.toggle("burger--active");
            document.body.classList.toggle("no-scroll");
        }
        return;
    }
    const langBtn = e.target.closest(".lang_btn");
    if (langBtn) {
        const newLang = langBtn.dataset.lang;
        if (newLang !== currentLang) {
            localStorage.setItem("lang", newLang);
            location.reload();
        }
    }
});
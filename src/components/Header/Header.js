import { getLanguage } from "../../i18n";
import { t } from "../../translation/translation";
import gopuram from "/image/gopuram.png";



const links = [
      { name: "nav.about", link: "#section_4" },
      { name: "nav.news", link: "#section_5" },
      { name: "nav.help", link: "#" },
      { name: "nav.reviews", link: "#" },
      { name: "nav.contacts", link: "#footer" },
]

export const Header = () => {

const currentLang = getLanguage()

  return /*html*/ `
    <header class="Header" id="header">
      <a class="Header_logo" href="/"><img src="${gopuram}" alt="logo"></a>
      
      <div class="burger_menu" id="burger-trigger">
          <span></span><span></span><span></span>
      </div>

      <nav class="Header_nav" id="header-nav">
        <div class="nav_links">
            ${links.map(item => `<a href="${item.link}">${t(item.name)}</a>`).join("")}
        </div>
        
        <div class="Header_right">
            <div class="Header_support">
                <span class="Header_support_name">${t("nav.supportName")}</span>
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
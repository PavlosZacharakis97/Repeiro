import { Header, Main, Footer} from "./components";
import { getLanguage, setLanguege, getTranslations } from "./i18n";
import { initRouter } from "./router";
import "./style.css";

const renderApp = (Page) => {
    document.querySelector("#app").innerHTML = `
    ${Header()}
    ${Main(Page)}
    ${Footer()}
`;

const langButton = document.querySelectorAll(".lang_btn")

langButton.forEach((btn) => {
    btn.addEventListener("click", () => {
       const lang = btn.dataset.lang
       setLanguege(lang)
       renderApp(Page)
    })
})
}

initRouter(renderApp)

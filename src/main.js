import { Header, Main, Footer} from "./components";
import { initRouter } from "./router";
import "./style.css";

const renderApp = (Page) => {
    document.querySelector("#app").innerHTML = `
    ${Header()}
    ${Main(Page)}
    ${Footer()}
`;
}

initRouter(renderApp)

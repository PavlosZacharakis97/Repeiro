import { Header, Hero, Main, Footer} from "./components";
import "./style.css";

document.querySelector("#app").innerHTML = `
    ${Header()}
    ${Hero()}
    ${Main()}
    ${Footer()}
`;

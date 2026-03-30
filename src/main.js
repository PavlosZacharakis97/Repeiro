import { Header, Hero, Main} from "./components";
import "./style.css";

document.querySelector("#app").innerHTML = `
    ${Header()}
    ${Hero()}
    ${Main()}
`;

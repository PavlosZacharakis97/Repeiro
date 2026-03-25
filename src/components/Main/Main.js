import { Section1 } from "./Section_1";
import "./Main.scss"
import { Section2 } from "./Section_2";
import { Section3 } from "./Section_3/";

export const Main = () => {
    return `
        <main class="Main_Sections">
            ${Section1()}
            ${Section2()}
            ${Section3()}
        </main>
    `;
};
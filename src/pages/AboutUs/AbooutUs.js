import { AboutSection1 } from "./Section1.1";
import { AboutSection2 } from "./Section2.1";
import { AboutSection3 } from "./Section3.1";
import { AboutSection4 } from "./Section4.1";



export const AboutUs = () => {
    return`
    ${AboutSection1()}
    ${AboutSection2()}
    ${AboutSection3()}
    ${AboutSection4()}
    `
}
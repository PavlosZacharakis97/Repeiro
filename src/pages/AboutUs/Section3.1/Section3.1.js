import { t } from "../../../translation/translation"
import aboutsection3 from "/image/AboutUsSection3.png"




export const AboutSection3 = () => {
    return /*html*/ `
    <section class="AboutSection3">
        <div class="AboutSection3_overlay"></div>
        <div class="AboutSection3_textBlock">
            <h1 class="AboutSection3_h1">${t("section3.1.h1")}</h1>
            <p class="AboutSection3_p">${t("section3.1.p")}</p>
            <a href="#section5.1" class="AboutSection3_btn">${t("section3.1.a")}</a>
        </div>
    </section>
    `
}
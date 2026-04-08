import { t } from "../../../translation/translation"


export const AboutSection1 = () => {
    return /*html*/ `
    <section class="AboutSection1">
        <div class="AboutSection1__overlay"></div>
        <div class="AboutSection1__content">
            <h1 class="aboutSection1_h1" style="color: white;">${t("section1.1.h1")}</h1>
            <p class="section1_span">${t("section1.1.p")}</p>
            <button class="AboutSection1_btn">${t("section1.1.btn")}</button>
        </div>
    </section>
    `
}
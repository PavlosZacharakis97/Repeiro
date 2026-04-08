import { t } from "../../../translation/translation";
import section8_img from "/image/Section8_img.png";


export const Section8 = () => {
    return /* html */ `
    <section class="Section8">
        <div class="Section8__overlay"></div>
        <div class="Section8__content">
            <h1 class="Section8_h1">${t("section8.h1")}</h1>
            <p class="Section8_subtitle">${t("section8.subtitle")}</p>
            
            <form action="#" class="Section8_form" id="contact-form">
                <input type="text" placeholder=${t("section8.palceholder1")} class="Section8_input">
                <input type="tel" placeholder="+7 (000) 000-0000" class="Section8_input">
                <input type="email" placeholder="E-mail" class="Section8_input">
                
                <div class="Section8_services">
                    <p>${t("section8.service.title")}</p>
                    <label class="radio_container">
                        <input type="radio" name="service" checked>
                        <span>${t("section8.service.span1")}</span>
                    </label>
                    <label class="radio_container">
                        <input type="radio" name="service">
                        <span>${t("section8.service.span2")}</span>
                    </label>
                    <label class="radio_container">
                        <input type="radio" name="service">
                        <span>${t("section8.service.span3")}</span>
                    </label>
                </div>

                <button type="submit" class="Section8_btn">${t("section8.btn")}</button>
                
                <p class="Section8_policy">
                    ${t("section8.policy.p1")} <span>$${t("section8.policy.span1")}</span> 
                    ${t("section8.policy.p2")}<span>${t("section8.policy.span2")}</span>
                </p>
            </form>
        </div>
    </section>
    `
}
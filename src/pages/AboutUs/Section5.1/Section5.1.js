import { t } from "../../../translation/translation";
import phoneIcon from "/image/phone-ringing.png" 
import emailIcon from "/image/email.png"
import placeIcon from "/image/place.png"

export const AboutSection5 = () => {

    setTimeout(() => {
        const contactForm = document.getElementById("contact-form");
        
        if (contactForm) {
            contactForm.addEventListener("submit", (e) => {
                e.preventDefault();

                emailjs.sendForm(
                    "service_5818car", 
                    "template_s5019bt", 
                    "#contact-form", 
                    "Jb5YZ1l9fIBd3rYWw"
                )
                .then(() => {
                    alert(t("section5.1.alert.okay"));
                    contactForm.reset();
                }, (error) => {
                    console.error("Error:", error);
                    alert(t("section5.1.alert.error") + JSON.stringify(error));
                });
            });
        }
    });

    return /*html*/ `
    <section class="AboutSection5" id="section5.1">
        <div class="AboutSection5_overlay"></div>
        
        <div class="AboutSection5_container">
            <div class="AboutSection5_textBlock">
                <h2 class="AboutSection5_h2">${t("section5.1.h2")}</h2>
                <p class="AboutSection5_subtitle">${t("section5.1.subtitle")}</p>
                
                <div class="AboutSection5_contacts">
                    <div class="contact_item">
                        <img src="${phoneIcon}" alt="phone">
                        <span>+7 (495) 123-45-67</span>
                    </div>
                    <div class="contact_item">
                        <img src="${emailIcon}" alt="email">
                        <span>design@company.com</span>
                    </div>
                    <div class="contact_item">
                        <img src="${placeIcon}" alt="place">
                        <span>${t("section5.1.location")}</span>
                    </div>
                </div>
            </div>

            <form class="AboutSection5_formCard" id="contact-form">
                <input name="user_name" type="text" placeholder="${t("section5.1.placeholder.name")}" class="AboutSection5_input" required>
                <input name="phone" type="tel" placeholder="${t("section5.1.placeholder.tel")}" class="AboutSection5_input" required>
                <input name="user_email" type="email" placeholder="${t("section5.1.placeholder.email")}" class="AboutSection5_input" required>
                <textarea name="message" placeholder="Описание объекта (площадь, назначение)" class="AboutSection5_textarea"></textarea>
                <button type="submit" class="AboutSection5_btn">${t("section5.1.placeholder.btn")}</button>
                <p class="AboutSection5_policy">${t("section5.1.placeholder.title")}</p>
            </form>
        </div>
    </section>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.103003055415!2d37.53724231594389!3d55.74811598055106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bd0392336cb%3A0xc4931a72675e47c0!2z0JHQpiAi0JjQvNC_0LXRgNC40Y8i!5e0!3m2!1sru!2sru!4v1620000000000!5m2!1sru!2sru" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    `
}
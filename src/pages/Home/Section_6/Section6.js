import { t } from "../../../translation/translation";
import Section6Img from "/image/Section6.png";
import logo1 from "/image/Logo1.png";
import logo2 from "/image/Logo2.png";
import logo3 from "/image/Logo3.png";
import logo4 from "/image/Logo4.png";



export const Section6 = () => {
    return /* html */`
    <section class="Section6">
        <div class="Section6__bg-layer"></div>
        
        <div class="Section6__overlay"></div>

        <div class="Section6__content">
            <h1 class="Section6__title">${t("section6.title")}</h1>
            <p class="Section6__subtitle">
                ${t("section6.subtitle")}
            </p>

            <div class="Section6__logos-grid">
                <div class="Section6__logo-card">
                    <img src="${logo1}" alt="Greens Food Suppliers">
                </div>
                <div class="Section6__logo-card">
                    <img src="${logo2}" alt="BeautyBox">
                </div>
                <div class="Section6__logo-card">
                    <img src="${logo3}" alt="The Dance Studio">
                </div>
                <div class="Section6__logo-card">
                    <img src="${logo4}" alt="Yoga Baby">
                </div>
            </div>
        </div>
    </section>
    `;
};
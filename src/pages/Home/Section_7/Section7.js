import { t } from "../../../translation/translation";
import Face1 from "/image/Face1.png";
import Face2 from "/image/Face2.png";
import Face3 from "/image/Face3.png";




const Section7Blocks = [
    {
        img: Face1,
        text: "section7.text1",
        title: "section7.title1",
        subtitle: "section7.subtitle1"
    },
    {
        img: Face2,
        text: "section7.text2",
        title: "section7.title2",
        subtitle: "section7.subtitle2"
    },
    {
        img: Face3,
        text: "section7.text3",
        title: "section7.title3",
        subtitle: "section7.subtitle3"
    }
];

const createBlockItemSection7 = () => {
    return Section7Blocks.map((item) => /*html*/ `
    <div class="Section7_blocks_item">
        <div class="Section7_avatar">
            <img src="${item.img}" alt="${t(item.title)}">
        </div>
        <p class="Section7_text">${t(item.text)}</p>
        <div class="Section7_info">
            <span class="Section7_name">${t(item.title)}</span>
            <span class="Section7_subname">${t(item.subtitle)}</span>
        </div>
    </div>
    `).join("");
};

export const Section7 = () => {
    return /*html*/ `
    <section class="Section7">
        <h1 class="Section7_main-title">${t("section7.main.title")}</h1>
        <p class="Section7_main-subtitle">${t("section7.main.subtitle")}</p>
        <div class="Section7_blocks">
            ${createBlockItemSection7()}
        </div>
    </section>
    `;
};
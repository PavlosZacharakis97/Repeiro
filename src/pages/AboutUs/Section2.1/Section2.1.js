import office from "/image/office-building.png";
import lcd from "/image/lcd.png";
import signature from "/image/signature.png";
import { t } from "../../../translation/translation";


const blockItemAboutSection2 = [
  {
    img: office,
    title: "section2.1.title1",
    subtitle: "section2.1.subtitle1",
  },
  {
    img: lcd,
    title: "section2.1.title2",
    subtitle: "section2.1.subtitle2",
  },
  {
    img: signature,
    title: "section2.1.title3",
    subtitle: "section2.1.subtitle3",
  },
];

const createBlockItem = () => {
  return blockItemAboutSection2
    .map(
      (item) => `
            <div class="AboutSection2_item">
                <div class="icon_wrapper">
                    <img src="${item.img}" alt="${t(item.title)}">
                </div>
                <h3 class="aboutSection2_h3">${t(item.title)}</h3>
                <p class="aboutSection2_p">${t(item.subtitle)}</p>
            </div>
    `,
    )
    .join("");
};

export const AboutSection2 = () => {
  return /*html*/ `
    <section class="AboutSection2">
        <span class="AboutSection2_pretitle">${t("section2.1.pretitle")}</span>
        <h2 class="AboutSection2_h2">${t("section2.1.h2")}</h2>
        <p class="AboutSection2_desc">${t("section2.1.p")}</p>
        <div class="AboutSection2_grid">
            ${createBlockItem()}
        </div>
    </section>
    `;
};
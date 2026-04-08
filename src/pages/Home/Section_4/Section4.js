import { t } from "../../../translation/translation";
import checklist from "/image/checklist.png";
import file from "/image/file.png";
import paper from "/image/paper.png";
import sale from "/image/sale.png";


const section4BlockItemUP = [
  {
    img: checklist,
    title: "section4.title1",
    text: "section4.text1",
  },
  {
    img: file,
    title: "section4.title2",
    text: "section4.text2",
  },
  {
    img: paper,
    title: "section4.title3",
    text: "section4.text3",
  },
  {
    img: sale,
    title: "section4.title4",
    text: "section4.text4",
  },
  {
    img: sale,
    title: "section4.title5",
    text: "section4.text5",
  },
  {
    img: sale,
    title: "section4.title6",
    text: "section4.text6",
  },
];

const createBlockItemUp = () => {
  return section4BlockItemUP
    .map(
      (item) => `
        <div class="Section4_blocks_item">
            <div class="icon_wrapper">
                <img src="${item.img}" alt="icon">
                </div>
                <h3>${t(item.title)}</h3>
                <span>${t(item.text)}</span>
            </div>
    `,
    )
    .join("");
};

export const Section4 = () => {
  return `
    <div class="Section4" id="section_4">
        <div class="Section4_img">
            <div class="Section4_bg_animation"></div> <div class="Section4_content"> <span style="color: #219ebc;font-size: 26px;">${t("section4.span")}</span>
            <h1 class="Section4_h">${t("section4.h1")}</h1>
            <div class="Section4_blocks">
                  <div class="Section4_block_UP">${createBlockItemUp()}</div>
                  </div>
                </div>
            </div>
          </div>
                    `;
                  };

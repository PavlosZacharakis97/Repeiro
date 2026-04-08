import block20 from "/image/Section5_20m.png"
import block100 from "/image/Section5_100m.png"
import block45 from "/image/Section5_45m.png"
import block130 from "/image/Section5_130m.png"
import block300 from "/image/Section5_300m.png"
import block80 from "/image/Section5_80m.png"
import { t } from "../../../translation/translation"


 
const Section5BlockItem = [
    {
        img: block20,
        title: "section5.title1",
        text: "section5.text1"
    },
    {
        img: block100,
        title: "section5.title2",
        text: "section5.text2"
    },
    {
        img: block45,
        title: "section5.title3",
        text: "section5.text3"
    },
    {
        img: block130,
        title: "section5.title4",
        text: "section5.text4"
    },
    {
        img: block300,
        title: "section5.title5",
        text: "section5.text5"
    },
    {
        img: block80,
        title: "section5.title6",
        text: "section5.text6"
    },
]



const createBlockItem = () => {
  return Section5BlockItem.map(
    (item) => `
        <div class="Section5_blocks_item">
            <img src="${item.img}" alt="${item.title}" class="card_bg">
            <div class="card_content">
                <h3>${t(item.title)}</h3>
                <span>${t(item.text)}</span>
            </div>
        </div>
    `
  ).join("");
};

export const Section5 = () => {
    return `
    <div class="Section5" id="section_5">
        <div class="Section5_header">
            <span class="First_row">${t("section5.span1")}</span>
            <h1>${t("section5.h1")}</h1>
            <span class="h1_comment">${t("section5.span2")}</span>
        </div>
        <div class="Section5_item_blocks">${createBlockItem()}</div>
    </div>
    `;
};
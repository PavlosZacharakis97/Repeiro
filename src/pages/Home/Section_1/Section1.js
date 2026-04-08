import { t } from "../../../translation/translation"
import  percentage from "/image/percentage.png"



const blockItem = [
    {
        img: percentage,
        title: "section1.block.title1",
        text: "section1.block.text1",
    },
    {
        img: percentage,
        title: "section1.block.title2",
        text: "section1.block.text2",
    },
    {
        img: percentage,
        title: "section1.block.title3",
        text: "section1.block.text3",
    },

]

const createBlockItem = () => {
    return blockItem.map((item) => `
                <div class="Section1_blocks_item">
                <div class="icon_wrapper">
                    <img src="${item.img}" alt="icon">
                </div>
                <h3>${t(item.title)}</h3>
                <span>${t(item.text)}</span>
            </div>
    `).join("")
}



export const Section1 = () => {
    return`
        <div class="Section1">
        <div class="Section1_header">
            <span class="Section1_subtitle">${t("section1.subtitle")}</span>
            <h1>${t("section1.h1")}</h1>
            <p class="Section1_description">${t("section1.description")}</p>
        </div>
        <div class="Section1_blocks">
        ${createBlockItem()}
        </div>
    </div>
    `
}
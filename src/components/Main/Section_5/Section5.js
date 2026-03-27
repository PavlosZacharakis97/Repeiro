import block20 from "/image/Section5_20m.png"
import block100 from "/image/Section5_100m.png"
import block45 from "/image/Section5_45m.png"
import block130 from "/image/Section5_130m.png"
import block300 from "/image/Section5_300m.png"
import block80 from "/image/Section5_80m.png"



const Section5BlockItem = [
    {
        img: block20,
        title: "Офисное помещение",
        text: "20 м2"
    },
    {
        img: block100,
        title: "Офисное помещение",
        text: "100 м2"
    },
    {
        img: block45,
        title: "Офисное помещение",
        text: "45 м2"
    },
    {
        img: block130,
        title: "Кафе",
        text: "130 м2"
    },
    {
        img: block300,
        title: "Магазин одежды",
        text: "300 м2"
    },
    {
        img: block80,
        title: "Магазин одежды",
        text: "80 м2"
    },
]



const createBlockItem = () => {
  return Section5BlockItem.map(
    (item) => `
        <div class="Section5_blocks_item">
            <img src="${item.img}" alt="${item.title}" class="card_bg">
            <div class="card_content">
                <h3>${item.title}</h3>
                <span>${item.text}</span>
            </div>
        </div>
    `
  ).join("");
};

export const Section5 = () => {
    return `
    <div class="Section5">
        <div class="Section5_header">
            <span class="First_row">Портфолио</span>
            <h1>Некоторые проекты</h1>
            <span class="h1_comment">Если хотите, чтобы мы разместили Ваш ремонт в портфолио - напишите нам об этом</span>
        </div>
        <div class="Section5_item_blocks">${createBlockItem()}</div>
    </div>
    `;
};
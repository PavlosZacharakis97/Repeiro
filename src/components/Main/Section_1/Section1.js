import  percentage from "/image/percentage.png"



const blockItem = [
    {
        img: percentage,
        title: "Точная стоимость работ",
        text: "Выезд инженера-сметчика для расчета точной стоимости в течении 3-х часов",
    },
    {
        img: percentage,
        title: "Четкие сроки на выполнение",
        text: "Работы проводятся в четко установленные сроки по договору и в строгом соответствии с нормами СНиП и СП",
    },
    {
        img: percentage,
        title: "Гарантия на работы до 5-ти лет",
        text: "Чтобы поговорить со специалистом, пожалуйста, позвоните",
    },

]

const createBlockItem = () => {
    return blockItem.map((item) => `
                <div class="Section1_blocks_item">
                <div class="icon_wrapper">
                    <img src="${item.img}" alt="icon">
                </div>
                <h3>${item.title}</h3>
                <span>${item.text}</span>
            </div>
    `).join("")
}



export const Section1 = () => {
    return`
        <div class="Section1">
        <div class="Section1_header">
            <span class="Section1_subtitle">Преимущества</span>
            <h1>Работайте с нами</h1>
            <p class="Section1_description">Капитальный ремонт офисов – путь к успеху и престижу по-новому</p>
        </div>
        <div class="Section1_blocks">
        ${createBlockItem()}
        </div>
    </div>
    `
}
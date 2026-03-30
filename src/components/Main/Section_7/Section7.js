import Face1 from "/image/Face1.png";
import Face2 from "/image/Face2.png";
import Face3 from "/image/Face3.png";

const Section7Blocks = [
    {
        img: Face1,
        text: "Это супер крутая инструкция и вы делаете очень полезную вещь 🙂 Спасибо ❤️",
        title: "Юрий Ставничий",
        subtitle: "фотограф"
    },
    {
        img: Face2,
        text: "Работа с сервисом приносит радость, потому что высочайший профессионализм, удобство, оперативность, и просто приятные люди!",
        title: "Александра Селезнева",
        subtitle: "фотограф"
    },
    {
        img: Face3,
        text: "Спасибо большое за помощь и содействие!",
        title: "Александра Салазар",
        subtitle: "фотограф"
    }
];

const createBlockItemSection7 = () => {
    return Section7Blocks.map((item) => /*html*/ `
    <div class="Section7_blocks_item">
        <div class="Section7_avatar">
            <img src="${item.img}" alt="${item.title}">
        </div>
        <p class="Section7_text">${item.text}</p>
        <div class="Section7_info">
            <span class="Section7_name">${item.title}</span>
            <span class="Section7_subname">${item.subtitle}</span>
        </div>
    </div>
    `).join("");
};

export const Section7 = () => {
    return /*html*/ `
    <section class="Section7">
        <h1 class="Section7_main-title">Отзывы</h1>
        <p class="Section7_main-subtitle">Будем благодарны, если вы уделите время и напишите отзыв о нашей компании</p>
        <div class="Section7_blocks">
            ${createBlockItemSection7()}
        </div>
    </section>
    `;
};
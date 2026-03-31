import checklist from "/image/checklist.png";
import file from "/image/file.png";
import paper from "/image/paper.png";
import sale from "/image/sale.png";

const section4BlockItemUP = [
  {
    img: checklist,
    title: "Оперативность",
    text: "Вы наверняка сталкивались с ситуацией, когда вам нужно вызвать специалиста и Вам говорят что приедем завтра, пробки и прочие. причины. У нас такого не бывает! Специалист приедет уже через час! Мы ценим Ваше время!",
  },
  {
    img: file,
    title: "Работаем честно",
    text: "Рационально используем материал, предоставляем фото и видео отчеты проводимых работ на объекте. Полная отчетность о использовании материалов. У нас все прозрачно и честно!",
  },
  {
    img: paper,
    title: "Поиск и закупка материалов",
    text: "Закупку, поиск качественных материалов и доставку на объект мы берем на себя. Работа с оптовыми поставщиками, позволяет нам снижать Ваши расходы до 30%",
  },
  {
    img: sale,
    title: "Вы ничем не рискуете",
    text: "Работаем в строгом соответствии с подписанным обеими сторонами договором. Соблюдаем график производства работ и сроки выполнения. Не уложимся в срок - выплатим компенсацию",
  },
  {
    img: sale,
    title: "Вы ни о чем не беспокоитесь",
    text: "Вам не нужно думать куда деть строительный мусор или кого найти для погрузки, разгрузки. Мы все сделаем сами. Полное обеспечение и ведение объекта берем на себя",
  },
  {
    img: sale,
    title: "Никаких 'хитрых фишек'",
    text: "Рассчитаем подробную и точную смету работ. Прописываем каждую операцию, поэтому нет никаких работ типа 'а это мы не учли в основной смете'. Можем обсуждать только скидки, а не повышение цены.",
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
                <h3>${item.title}</h3>
                <span>${item.text}</span>
            </div>
    `,
    )
    .join("");
};

export const Section4 = () => {
  return `
    <div class="Section4" id="section_4">
        <div class="Section4_img">
            <div class="Section4_bg_animation"></div> <div class="Section4_content"> <span style="color: #219ebc;font-size: 26px;">Ещё преимущества</span>
            <h1 class="Section4_h">6 причин, чтобы выбрать нас подрядчиком</h1>
            <div class="Section4_blocks">
                  <div class="Section4_block_UP">${createBlockItemUp()}</div>
                  </div>
                </div>
            </div>
          </div>
                    `;
                  };

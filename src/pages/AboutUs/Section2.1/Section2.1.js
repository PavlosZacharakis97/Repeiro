import office from "/image/office-building.png";
import lcd from "/image/lcd.png";
import signature from "/image/signature.png";

const blockItemAboutSection2 = [
  {
    img: office,
    title: "Эргономика и зоны",
    subtitle: "Грамотное планирование пространства. Учитываем маршруты сотрудников, зоны отдыха и нормы освещённости для максимальной продуктивности",
  },
  {
    img: lcd,
    title: "Фотореалистичная 3D-визуализация",
    subtitle: "Вы увидите свой будущий офис до начала ремонта. Детальная проработка текстур, света и расстановки мебели.",
  },
  {
    img: signature,
    title: "Авторский надзор",
    subtitle: "Контролируем ход строительных работ на всех этапах, чтобы результат точно соответствовал утверждённому дизайн-проекту.",
  },
];

const createBlockItem = () => {
  return blockItemAboutSection2
    .map(
      (item) => `
            <div class="AboutSection2_item">
                <div class="icon_wrapper">
                    <img src="${item.img}" alt="${item.title}">
                </div>
                <h3 class="aboutSection2_h3">${item.title}</h3>
                <p class="aboutSection2_p">${item.subtitle}</p>
            </div>
    `,
    )
    .join("");
};

export const AboutSection2 = () => {
  return /*html*/ `
    <section class="AboutSection2">
        <span class="AboutSection2_pretitle">ПРЕИМУЩЕСТВА</span>
        <h2 class="AboutSection2_h2">Почему выбирают наш дизайн</h2>
        <p class="AboutSection2_desc">Комплексный подход к созданию пространства: от первой скетч-идеи до полной реализации объекта.</p>
        <div class="AboutSection2_grid">
            ${createBlockItem()}
        </div>
    </section>
    `;
};
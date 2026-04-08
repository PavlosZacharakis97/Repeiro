import { t } from "../../../translation/translation"



export const Section3 = () => {
    return`
        <section class="Section3">
        <div class="Section3_header">
            <h1>${t("section3.h1")}</h1>
            <p>${t("section3.p1")}</p>
        </div>

        <div class="Section3_content">
            <div class="Section3_item">
                <div class="Number_block">1</div>
                <div class="text_block">
                    <h3>${t("section3.h3")}</h3>
                    <p>${t("section3.p2")}</p>
                </div>
            </div>

            <div class="Section3_item">
                <div class="Number_block">2</div>
                <div class="text_block">
                    <h3>${t("section3.item.h3")}</h3>
                    <ul>
                        <li>${t("section3.item.li1")}</li>
                        <li>${t("section3.item.li2")}</li>
                        <li>${t("section3.item.li3")}</li>
                    </ul>
                </div>
            </div>

            <div class="Section3_item">
                <div class="Number_block">3</div>
                <div class="text_block">
                    <h3>${t("section3.item2.h3")}</h3>
                    <ul>
                        <li>${t("section3.item2.li1")}</li>
                        <li>${t("section3.item2.li2")}</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    `
}
import { t } from "../../../translation/translation"
import sectionImg from "/image/Section2.png"


export const Section2 = () => {
    return `
    <div class="Section2">
      <div class="Section2_bg_animation"></div> <div class="Section2_content"> <div class="Section2_text_block">
          <span class="text1">${t("section2.text1")}</span>
          <h1 style="color: white;">${t("section2.h1")}</h1>
          <span class="Section2_desc">
            ${t("section2.desc")}
          </span>
          <button class="Section2_btn">${t("section2.btn")}</button>
        </div>
      </div>
    </div>
    `
}
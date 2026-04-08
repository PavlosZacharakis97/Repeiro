import { t } from "../../../translation/translation"


export const Hero = () => {
    return `
    <div class="Hero" id="hero_page">
      <div class="Hero_bg_animation"></div> <div class="Hero_content"> <div class="Hero_text_block">
          <h1>${t("h1.hero")}</h1>
          <span>${t("span.hero")}</span>
          <div class="Hero_btn">
            <button class="Hero_btn_left">${t("Hero_btn_left")}</button>
            <a href="/about" class="Hero_btn_right">${t("Hero_btn_right")}</a>
          </div>
          <span class="Hero_gift">${t("Hero_gift")}</span>
        </div>
      </div>
    </div>
    `  
}
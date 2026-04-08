import { getLanguage, getTranslations } from "../i18n";

export const t = (key) => {
    const lang = getLanguage()
    return getTranslations(lang, key)
}

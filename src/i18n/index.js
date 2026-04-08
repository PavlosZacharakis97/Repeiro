import en from "./en.json"
import ru from "./ru.json"

const translations = {
    en,
    ru,
}

const defaulLanguage = "ru"
const keyLangLocalstorage = "example-lang"

export const getLanguage = () => {
    return localStorage.getItem(keyLangLocalstorage) || defaulLanguage
}

export const setLanguege = (lang) => localStorage.setItem(keyLangLocalstorage, lang)

export const getTranslations = (lang, key) => {
    return translations[lang]?.[key] || translations[defaulLanguage]?.[key] || key
}

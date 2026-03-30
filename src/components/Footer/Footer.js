import facebook from "/image/facebook.png"
import instagram from "/image/instagram.png"
import twitter from "/image/twitter.png"
import vk from "/image/vk.png"

export const Footer = () => {
    return /*html*/ `
    <footer class="Footer">
        <div class="Footer_links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-icon">
                <img src="${facebook}" alt="FB">
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-icon">
                <img src="${instagram}" alt="IG">
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="social-icon">
                <img src="${twitter}" alt="TW">
            </a>
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer" class="social-icon">
                <img src="${vk}" alt="VK">
            </a>
        </div>
        
        <nav class="Footer_nav">
            <a href="#section_4">О компании</a>
            <a href="#section_5">Новости</a>
            <a href="">Помощь</a>
            <a href="">Контакты</a>
        </nav>
        
        <span class="Footer_copy">© 2020 Название компании</span>
    </footer>
    `
}
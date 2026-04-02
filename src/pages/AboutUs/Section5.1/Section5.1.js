import phoneIcon from "/image/phone-ringing.png" 
import emailIcon from "/image/email.png"
import placeIcon from "/image/place.png"

export const AboutSection5 = () => {
    return /*html*/ `
    <section class="AboutSection5">
        <div class="AboutSection5_overlay"></div>
        
        <div class="AboutSection5_container">
            <div class="AboutSection5_textBlock">
                <h2 class="AboutSection5_h2">Вы готовы осуществить задуманное?</h2>
                <p class="AboutSection5_subtitle">Оставьте заявку, и наш ведущий дизайнер свяжется с вами в течение 30 минут для обсуждения деталей вашего проекта.</p>
                
                <div class="AboutSection5_contacts">
                    <div class="contact_item">
                        <img src="${phoneIcon}" alt="phone">
                        <span>+7 (495) 123-45-67</span>
                    </div>
                    <div class="contact_item">
                        <img src="${emailIcon}" alt="email">
                        <span>design@company.com</span>
                    </div>
                    <div class="contact_item">
                        <img src="${placeIcon}" alt="place">
                        <span>Москва, БЦ "Империя", офис 150</span>
                    </div>
                </div>
            </div>

            <form class="AboutSection5_formCard">
                <input type="text" placeholder="Ваше имя" class="AboutSection5_input">
                <input type="tel" placeholder="Ваш телефон" class="AboutSection5_input">
                <input type="email" placeholder="Ваш E-mail" class="AboutSection5_input">
                <textarea placeholder="Краткое описание объекта (площадь, назначение)" class="AboutSection5_textarea"></textarea>
                <button type="submit" class="AboutSection5_btn">Отправить заявку</button>
                <p class="AboutSection5_policy">Нажимая кнопку, Вы соглашаетесь с Политикой конфиденциальности</p>
            </form>
        </div>
    </section>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2372.4422909126993!2d37.540726817820655!3d55.74705028848731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b8505e76ccf%3A0xd6c7e080abec4ef2!2z0JTQtdC70L7QstC-0Lkg0LrQvtC80L_Qu9C10LrRgSDQmNC80L_QtdGA0LjRjw!5e1!3m2!1sru!2scz!4v1775129060834!5m2!1sru!2scz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `
}
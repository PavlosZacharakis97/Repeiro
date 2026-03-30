import section8_img from "/image/Section8_img.png";

export const Section8 = () => {
    return /* html */ `
    <section class="Section8">
        <div class="Section8__overlay"></div>
        
        <div class="Section8__content">
            <h1 class="Section8_h1">Вы готовы осуществить задуманное?</h1>
            <p class="Section8_subtitle">До сих пор остались вопросы? Позвоните нам и компетентный специалист подробно ответит на них и предложит лучшее решение.</p>
            
            <form class="Section8_form">
                <input type="text" placeholder="Ваша имя" class="Section8_input">
                <input type="tel" placeholder="+7 (000) 000-0000" class="Section8_input">
                <input type="email" placeholder="E-mail" class="Section8_input">
                
                <div class="Section8_services">
                    <p>Выберите услугу:</p>
                    <label class="radio_container">
                        <input type="radio" name="service" checked>
                        <span>Ремонт офиса</span>
                    </label>
                    <label class="radio_container">
                        <input type="radio" name="service">
                        <span>Ремонт торгового помещения</span>
                    </label>
                    <label class="radio_container">
                        <input type="radio" name="service">
                        <span>Другое</span>
                    </label>
                </div>

                <button type="submit" class="Section8_btn">Оставить заявку</button>
                
                <p class="Section8_policy">
                    Оставляя заявку, вы соглашаетесь на <span>обработку персональных данных</span> 
                    и с <span>условиями бронирования счёта</span>
                </p>
            </form>
        </div>
    </section>
    `
}
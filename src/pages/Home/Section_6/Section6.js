import Section6Img from "/image/Section6.png";

export const Section6 = () => {
    return /* html */`
    <section class="Section6">
        <div class="Section6__bg-layer"></div>
        
        <div class="Section6__overlay"></div>

        <div class="Section6__content">
            <h1 class="Section6__title">Наши клиенты</h1>
            <p class="Section6__subtitle">
                Спасибо всем, кто доверяет ремонт самого ценного — второго дома, своего офиса, нашей компании
            </p>

            <div class="Section6__logos-grid">
                <div class="Section6__logo-card">
                    <img src="/image/Logo1.png" alt="Greens Food Suppliers">
                </div>
                <div class="Section6__logo-card">
                    <img src="/image/Logo2.png" alt="BeautyBox">
                </div>
                <div class="Section6__logo-card">
                    <img src="/image/Logo3.png" alt="The Dance Studio">
                </div>
                <div class="Section6__logo-card">
                    <img src="/image/Logo4.png" alt="Yoga Baby">
                </div>
            </div>
        </div>
    </section>
    `;
};
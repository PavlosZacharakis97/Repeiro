let contactForm = document.getElementById("contact-form")

let sendEmail = (e) => {
    e.preventDefault()

    // init emailjs add email service | email template |contact-form | publikc key

emailjs.sendForm("service_2e63l3w", "template_rahsav3", "#contact-form" , "Jb5YZ1l9fIBd3rYWw")


}


contactForm.addEventListener("submit", sendEmail)



// Инициализация EmailJS (лучше сделать один раз в начале)
(function() {
    emailjs.init("Jb5YZ1l9fIBd3rYWw");
})();

document.addEventListener("submit", (e) => {
    // Проверяем, что отправлена именно наша форма
    if (e.target && e.target.id === "contact-form") {
        e.preventDefault();

        emailjs.sendForm("service_2e63l3w", "template_rahsav3", e.target)
            .then(() => {
                alert("Сообщение успешно отправлено!");
                e.target.reset(); // Очистить форму
            }, (error) => {
                alert("Ошибка при отправке: " + JSON.stringify(error));
            });
    }
});
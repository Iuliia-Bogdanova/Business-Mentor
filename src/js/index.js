// import mobileNav from './modules/mobile-nav.js';
// mobileNav();

const buttons = document.querySelectorAll(".select");

buttons.forEach((button) => {
    button.addEventListener("click", function () {

        buttons.forEach((btn) => {
            if (btn !== button) {
                btn.classList.add("unclickable"); 
            }
        });

        button.disabled = true;

        const card = button.closest(".card");
        const cardTitle = card.querySelector(".card__title").textContent;

        console.log("Вы выбрали тариф: " + cardTitle);
    });
});


function buttons() {
    const buttons = document.querySelectorAll(".select");

    buttons.forEach((button) => {
        const selectButton = () => {
            buttons.forEach((btn) => {
                if (btn !== button) {
                    btn.classList.add("unclickable");
                    btn.setAttribute("tabindex", "-1");
                }
            });

            button.disabled = true;

            const card = button.closest(".card");
            const cardTitle = card.querySelector(".card__title").textContent;
            console.log("Вы выбрали тариф: " + cardTitle);
        };

        button.addEventListener("click", (event) => {
            event.target.style.transform = "scale(0.95)";
            selectButton();

            setTimeout(() => {
                event.target.style.transform = "";
            }, 300);
        });

        button.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                button.style.transform = "scale(0.95)";
                selectButton();

                setTimeout(() => {
                    button.style.transform = "";
                }, 300);
            }
        });

        button.setAttribute("tabindex", "0");
        button.setAttribute("role", "button");
        button.setAttribute(
            "aria-label",
            `Выбрать тариф ${
                button.closest(".card").querySelector(".card__title")
                    .textContent
            }`
        );
    });
}

export default buttons;

function setupTooltips() {
    document.querySelectorAll(".tooltip-question").forEach((button) => {
        button.addEventListener("mouseenter", function () {
            const tooltipId = button.getAttribute("aria-describedby");
            const tooltip = document.getElementById(tooltipId);

            tooltip.style.display = "block";
            setTimeout(() => {
                tooltip.style.opacity = "1";
                tooltip.style.visibility = "visible";
            }, 10);
        });

        button.addEventListener("mouseleave", function () {
            const tooltipId = button.getAttribute("aria-describedby");
            const tooltip = document.getElementById(tooltipId);

            tooltip.style.opacity = "0";
            tooltip.style.visibility = "hidden";
            setTimeout(() => {
                tooltip.style.display = "none";
            }, 300);
        });
    });
}

export default setupTooltips;

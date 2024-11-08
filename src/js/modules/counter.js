function startCountdown(initialTime) {
    const countdownElement = document.getElementById("countdown");
    const selectButton = document.getElementById("selectButton");

    let [hours, minutes, seconds] = initialTime.split(":").map(Number);
    let remainingTime = hours * 3600 + minutes * 60 + seconds;

    const interval = setInterval(() => {
        if (remainingTime <= 0) {
            clearInterval(interval);
            countdownElement.textContent = "00:00:00";
            selectButton.setAttribute("disabled", "true");
            return;
        }

        remainingTime--;

        const hours = Math.floor(remainingTime / 3600)
            .toString()
            .padStart(2, "0");
        const minutes = Math.floor((remainingTime % 3600) / 60)
            .toString()
            .padStart(2, "0");
        const seconds = (remainingTime % 60).toString().padStart(2, "0");

        countdownElement.textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);
}

export default startCountdown("22:36:10");

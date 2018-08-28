const handSec = document.querySelector(".inner__hand--sec");
const handMinute = document.querySelector(".inner__hand--minute");
const handHour = document.querySelector(".inner__hand--hour");

function setDate() {
    const time = new Date();

    const seconds = time.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    handSec.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = time.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    handMinute.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = time.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    handHour.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
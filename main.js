

let dateDisplay = document.querySelector("#date-show");
let monthDisplay = document.querySelector("#month-show");
let yearDisplay = document.querySelector("#year-show");
let timeDisplay = document.querySelector("#time-show");
let minusDisplay = document.querySelector("#minus-show");
let secondDisplay = document.querySelector("#second-show");


function updateClock() {
    let now = new Date();

    let digitdate = now.getDate() < 10 ? "0"+ now.getDate() : now.getDate();
    let digitMonth = now.getMonth() < 10 ? "0" + (now.getMonth()+1): (now.getMonth()+1);
    let digittime =  now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
    let digitminus =  now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
    let digitsecond =  now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();

    dateDisplay.textContent = digitdate;
    monthDisplay.textContent = digitMonth;
    yearDisplay.textContent = now.getFullYear();
    timeDisplay.textContent = digittime;
    minusDisplay.textContent = digitminus;
    secondDisplay.textContent = digitsecond;

    if (now.getHours() < 12) {
        document.getElementById("am").setAttribute("checked", "checked");
    } else {
        document.getElementById("pm").setAttribute("checked", "checked");
    }

    if (now.getDay() == 0) {
        document.getElementById('sun').setAttribute("checked", "checked");
    } else if (now.getDay() == 1) {
        document.getElementById('mon').setAttribute("checked", "checked");
    } else if (now.getDay() == 2) {
        document.getElementById('tue').setAttribute("checked", "checked");
    } else if (now.getDay() == 3) {
        document.getElementById('wed').setAttribute("checked", "checked");
    } else if (now.getDay() == 4) {
        document.getElementById('thu').setAttribute("checked", "checked");
    } else if (now.getDay() == 5) {
        document.getElementById('fri').setAttribute("checked", "checked");
    } else if (now.getDay() == 6) {
        document.getElementById('sat').setAttribute("checked", "checked");
    }
}

setInterval(updateClock, 1000);

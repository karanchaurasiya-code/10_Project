let hours = document.querySelector("#Hours");
let minutes = document.querySelector("#Minutes");
let seconds = document.querySelector("#Seconds");

let currentTime = new Date();
console.log(currentTime);

setInterval(function () {
    let currentTime = new Date();
    // console.log(currentTime);
    hours.innerHTML = currentTime.getHours();
    minutes.innerHTML = currentTime.getMinutes();
    seconds.innerHTML = currentTime.getSeconds();
}, 0.0);
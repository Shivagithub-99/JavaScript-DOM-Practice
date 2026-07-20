const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const ampm = document.querySelector("h3");
const d = document.querySelector("#day");
const m = document.querySelector("#month");
const y = document.querySelector("#year");
const p = document.querySelector("p");

const days=[
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
];

const months = [
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"
];

setInterval(() => {

    let today = new Date();
    
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    

    let day = today.getDay();
    let month = today.getMonth();
    let year = today.getFullYear();

    let hour12 = 0;
    if(hour === 0){
        hour12 = 12;
    }
    else if(hour >= 1 && hour <= 12){
        hour12 = hour;
    }
    else{
        hour12 = hour - 12;
    }

    if(hour>=12 && hour<=23){
        ampm.textContent = "PM";
    }
    else{
        ampm.textContent = "AM";
    }

    if(hour>=5 && hour<12){
        p.innerText = "Good Morning 🌄";
    }
    else if(hour>=12 && hour<=18){
        p.innerText = "Good Afternoon ☀️";
    }
    else{
        p.innerText = "Good Night 🌉";
    }
    
    hours.textContent = `${hour12}`.padStart(2, '0');
    minutes.textContent = `${minute}`.padStart(2, '0');
    seconds.textContent = `${second}`.padStart(2, '0');
    d.textContent = `${days[day]}`;
    m.textContent = `${months[month]}`;
    y.textContent = `${year}`;

}, 1000);






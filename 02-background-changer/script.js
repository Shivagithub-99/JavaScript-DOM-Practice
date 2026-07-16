const box = document.querySelector(".box");
const colBox = document.querySelector("#show-color");
const colText = document.querySelector("p");

function changeColor(color){
    box.style.backgroundColor = `${color}`;
    colBox.style.backgroundColor = `${color}`;
    colText.textContent = `${color}`;
}
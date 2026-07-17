const para = document.querySelector("h5");
const card = document.querySelector(".card");
const button = document.querySelectorAll(".button");

const themeBtn = document.querySelector(".button-div").children;
for(let themeEle of themeBtn){
    themeEle.addEventListener('click', function(e){
        card.classList.remove("Light", "Dark", "Sunset");
        card.classList.add(`${e.target.innerText}`);
        if(e.target.innerText === "Light"){
            para.innerText = `Current Theme: 🔆 ${e.target.innerText}`;
        }
        else if(e.target.innerText === "Dark"){
            para.innerText = `Current Theme: 🌙 ${e.target.innerText}`;
        }
        else{
            para.innerText = `Current Theme: ☀️ ${e.target.innerText}`;
        }
        return;
    });
}



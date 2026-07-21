const buttonList = document.querySelectorAll("button");
const screen = document.querySelector(".screen");

let expression = "";
for(let btn of buttonList){
    btn.addEventListener("click", function(e){
        if(e.target.innerText === "C"){
            expression = "";
            screen.innerText = "0";
        }
        else if(e.target.innerText === "="){
            const answer = eval(expression);
            screen.innerText = `${answer}`;
        }
        else{
            expression += `${e.target.innerText}`;
            screen.innerText = `${expression}`;
            return;
        }
    });
}



const display = document.querySelector(".password");
const copyButton = document.querySelector("#copy-btn");
const length = document.querySelector("#input");
const checkbox = document.querySelectorAll("input[type='checkbox']");
const generateButton = document.querySelector("#generate-btn");

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let specialChars = "!@#$%^&*?~";

const obj = {
    Uppercase: uppercase,
    Lowercase: lowercase,
    Numbers: numbers,
    SpecialCharacters: specialChars
};

generateButton.addEventListener("click", () => {

    let pool = "";
    let generatedPwd = "";

    checkbox.forEach((option) => {

        if (option.checked && option.value === "Uppercase") {
            pool += `${obj.Uppercase}`;
        }

        if (option.checked && option.value === "Lowercase") {
            pool += `${obj.Lowercase}`;
        }

        if (option.checked && option.value === "Numbers") {
            pool += `${obj.Numbers}`;
        }

        if (option.checked && option.value === "SpecialCharacters") {
            pool += `${obj.SpecialCharacters}`;
        }

        if (pool === "") {
            window.alert("No Option Checked!!");
        }
    });

    for (let i = 0; i < length.value; i++) {
        let randomValue = Math.floor(Math.random() * pool.length);
        generatedPwd += pool[randomValue];
    }
    display.innerText = generatedPwd;

});

copyButton.addEventListener("click", () => {
    const pwd = display.innerText;
    navigator.clipboard.writeText(pwd);
    copyButton.innerText = "Copied";
    setTimeout(() => {
        copyButton.innerText = "Copy";
    }, 2000);
})
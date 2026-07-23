const queNum = document.querySelector("#q-num");
const question = document.querySelector("#question");
const optionList = document.querySelectorAll(".Option");
const radioButtons = document.querySelectorAll("input[name='answer']");
const nextBtn = document.querySelector("button");
const scoreArea = document.querySelector(".score");

const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },

    {
        question: "Which language is used to style web pages?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        answer: "CSS"
    },

    {
        question: "Which method is used to select an element by its ID in JavaScript?",
        options: [
            "querySelector()",
            "getElementById()",
            "getElementsByClassName()",
            "getElement()"
        ],
        answer: "getElementById()"
    },

    {
        question: "Which keyword is used to declare a constant variable in JavaScript?",
        options: [
            "var",
            "let",
            "const",
            "constant"
        ],
        answer: "const"
    },

    {
        question: "Which array method creates a new array by transforming each element?",
        options: [
            "filter()",
            "reduce()",
            "map()",
            "forEach()"
        ],
        answer: "map()"
    },

    {
        question: "What will typeof null return in JavaScript?",
        options: [
            "null",
            "undefined",
            "object",
            "string"
        ],
        answer: "object"
    },

    {
        question: "Which symbol is used for strict equality comparison?",
        options: [
            "==",
            "=",
            "===",
            "!="
        ],
        answer: "==="
    },

    {
        question: "Which function is used to run code after a specific time delay?",
        options: [
            "setInterval()",
            "setTimeout()",
            "delay()",
            "wait()"
        ],
        answer: "setTimeout()"
    },

    {
        question: "Which JavaScript feature handles asynchronous operations?",
        options: [
            "Loops",
            "Promises",
            "Variables",
            "Operators"
        ],
        answer: "Promises"
    },

    {
        question: "Which DOM property is used to change only text content?",
        options: [
            "innerHTML",
            "innerText",
            "textContent",
            "style"
        ],
        answer: "textContent"
    }
];

let qcount = 1
let qnum = 0;
initialLoad();

let score = 0;
nextBtn.addEventListener("click", () => {
    const selectedOption = document.querySelector(
        "input[name='answer']:checked"
    );
    if (selectedOption === null) {
        alert("Select an option");
        return;
    }

    if (selectedOption.value === questions[qnum].answer) {
        score++;
    }

    if (qnum === questions.length - 1) {
        scoreArea.innerText = `Score: ${score}`;
        alert("Good Job!, You Finished All the Questions");
        return;
    }
    update();
});

function update() {
    qnum++;
    question.innerText = `${questions[qnum].question}`;
    optionList.forEach((option, i) => {
        option.innerText = `${questions[qnum].options[i]}`;
        radioButtons[i].value = `${questions[qnum].options[i]}`;
    });

    radioButtons.forEach((radio) => {
        radio.checked = false;
    });

    qcount++;
    queNum.innerText = `Question ${qcount} of ${questions.length}`;
    scoreArea.innerText = `Score: ${score}`;
}

function initialLoad() {
    question.innerText = "What does HTML stand for?";
    queNum.innerText = `Question ${qcount} of ${questions.length}`;
    optionList.forEach((option, idx) => {
        option.innerText = `${questions[0].options[idx]}`;
        radioButtons[idx].value = `${questions[0].options[idx]}`;
    });
}

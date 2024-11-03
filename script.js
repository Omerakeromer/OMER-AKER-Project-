// 1. لعبة تخمين الرقم
function playGuessingGame() {
    const targetNumber = Math.floor(Math.random() * 10) + 1;
    const userGuess = parseInt(prompt("اختر رقم بين 1 و 10"));
    const message = userGuess === targetNumber 
                    ? "تهانينا! لقد خمنت الرقم الصحيح." 
                    : `خطأ. الرقم الصحيح كان ${targetNumber}.`;
    document.getElementById("game-output").innerText = message;
}

// 2. لعبة حجر ورقة مقص
function playRockPaperScissors() {
    const choices = ["حجر", "ورقة", "مقص"];
    const userChoice = prompt("اختر: حجر، ورقة، أو مقص");
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (userChoice === computerChoice) {
        result = "تعادل!";
    } else if (
        (userChoice === "حجر" && computerChoice === "مقص") ||
        (userChoice === "ورقة" && computerChoice === "حجر") ||
        (userChoice === "مقص" && computerChoice === "ورقة")
    ) {
        result = "أنت فزت!";
    } else {
        result = "الحاسوب فاز!";
    }

    document.getElementById("game-output").innerText = `أنت اخترت ${userChoice}, الحاسوب اختار ${computerChoice}. ${result}`;
}

// 3. آلة حاسبة
function calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result = 0;

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num2 !== 0 ? num1 / num2 : "لا يمكن القسمة على صفر";
            break;
    }

    document.getElementById("calc-result").innerText = `النتيجة: ${result}`;
}

// 4. أسئلة عامة
const questions = [
    { question: "هل السماء زرقاء؟", answer: true },
    { question: "هل 5 + 3 يساوي 10؟", answer: false },
    { question: "هل الأرض كروية؟", answer: true },
];

let score = 0;
let currentQuestion = 0;

function showQuestion()
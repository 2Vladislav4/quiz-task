const start_button = document.querySelector(".start-button");
const startWrapper = document.querySelector(".start-wrapper");
const quizWrapper = document.querySelector(".quiz-wrapper");
const questionHeading = document.querySelector(".question-heading");
const resultHeading = document.querySelector(".result-heading");


let overallCounter = 0; /*Создаем счетчики ответов и вопросов*/
let correctCounter = 0;
let wrongCounter = 0;

let answer;

buttons.forEach((button) => {
    button.addEventListener("click", countAnswers(answer, button));
})

function countAnswers(answer, button) {
    return function () {
        overallCounter += 1;

        if (String(answer) === button.innerText) {
            correctCounter += 1;
        } else {
            wrongCounter += 1;
        }
    }
}

function showResults() { /*Функция РЕЗУЛЬТАТОВ*/
    quizWrapper.classList.add("hide");
    startWrapper.classList.remove("hide");
    resultHeading.classList.remove("hide");
    resultHeading.innerText = `TOTAL: ${overallCounter}, CORRECT: ${correctCounter}, WRONG: ${wrongCounter}`; /*Выводит результаты на экран*/
}


function generateCorrectButton(answer) {
    const buttons = document.querySelectorAll(".answer-row button"); /*Создаем массив с кнопками*/

    buttons.forEach((button) => {
        button.addEventListener("click", generateQuestion); /*Кнопка нажата => генерируется вопрос*/
        let value = getRandomInt(100);
        while (value === answer) {
            value = getRandomInt(100);
        }
        button.innerText = value;

        button.classList.remove("correct-button");
        button.classList.add("wrong-button");

    })
    const index = getRandomInt(buttons.length); /*В промежутке от 0 до конца массива выбирает случайную кнопку*/
    const correctButton = buttons[index];
    correctButton.innerText = answer;
    correctButton.classList.remove("wrong-button");
    correctButton.classList.add("correct-button");
}

function startQuiz() {
    startWrapper.classList.add("hide"); /*Прячет стартовый экран, добавляя ему класс hide*/
    quizWrapper.classList.remove("hide"); /*Убирает свойство hide с quizWrapper'a, что показывает его на экран*/
    generateQuestion();
    setTimeout(showResults, 10000);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max); /*Генерируем случайное число от 0 до max*/
}

function generateQuestion() {
    const number1 = getRandomInt(50); /*Генерируем первое число*/
    const number2 = getRandomInt(50); /*Генерируем второе число*/
    let sign = "+"

    const sign_value = getRandomInt(2); /*Случайный выбор плюса и минуса*/
    if (sign_value == 0) {
        sign = "-";
    }

    if (sign === "+") {
        answer = number1 + number2;
    } else {
        answer = number1 - number2
    }

    questionHeading.innerText = `${number1} ${sign} ${number2}`; /*Вывод результата (примера) на экран*/
    generateCorrectButton(answer) /*Вызывается функция generateCorrectButton и туда передается ответ*/
}


start_button.addEventListener("click", startQuiz) /*При нажатии активирует функцию startQuiz (cлушатель событий)*/
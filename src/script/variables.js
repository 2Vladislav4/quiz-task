const start_button = document.querySelector(".start-button");
const startWrapper = document.querySelector(".start-wrapper");
const quizWrapper = document.querySelector(".quiz-wrapper");
const questionHeading = document.querySelector(".question-heading");
const resultHeading = document.querySelector(".result-heading");
const buttons = document.querySelectorAll(".answer-row button"); /*Создаем массив с кнопками*/

let overallCounter = 0; /*Создаем счетчики ответов и вопросов*/
let correctCounter = 0;
let wrongCounter = 0;

let answer = 0;

function resetCounter() {
    overallCounter = 0; /*Обновление переменных*/
    correctCounter = 0;
    wrongCounter = 0;
}

function incOverall() {
    overallCounter += 1;
}

function incCorrect() {
    correctCounter += 1;
}

function incWrong() {
    wrongCounter += 1;
}

function updateAnswer(result) {
    answer = result;
}

export {
    startWrapper,
    quizWrapper,
    start_button,
    questionHeading,
    resultHeading,
    buttons,
    answer,
    overallCounter,
    correctCounter,
    wrongCounter,

    resetCounter,
    incCorrect,
    incOverall,
    incWrong,
    updateAnswer,
}
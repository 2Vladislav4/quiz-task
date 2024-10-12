import {
    resetCounter,
    quizWrapper,
    startWrapper,
    resultHeading,
    overallCounter,
    correctCounter,
    wrongCounter,
 } from "./variables.js"
import {generateQuestion} from "./quizHeading.js"

function showResults() { /*Функция РЕЗУЛЬТАТОВ*/
    quizWrapper.classList.add("hide");
    startWrapper.classList.remove("hide");
    resultHeading.classList.remove("hide");
    resultHeading.innerText = `TOTAL: ${overallCounter}, CORRECT: ${correctCounter}, WRONG: ${wrongCounter}`; /*Выводит результаты на экран*/
}

function startQuiz() {
    resetCounter();
    startWrapper.classList.add("hide"); /*Прячет стартовый экран, добавляя ему класс hide*/
    quizWrapper.classList.remove("hide"); /*Убирает свойство hide с quizWrapper'a, что показывает его на экран*/
    generateQuestion();
    setTimeout(showResults, 10000);
}

export {startQuiz}
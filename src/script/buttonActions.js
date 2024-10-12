import { buttons, incCorrect, incOverall, incWrong, answer } from "./variables.js"
import { generateQuestion } from "./quizHeading.js";
import { getRandomInt } from "./randomizer.js";



function countAnswers(button) {
    return function () {
        incOverall();

        if (String(answer) === button.innerText) {
            incCorrect();
        } else {
            incWrong();
        }
    }
}

function generateCorrectButton(answer) {
    

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

buttons.forEach((button) => {
    button.addEventListener("click", countAnswers(button));
})

export { generateCorrectButton }
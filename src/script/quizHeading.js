import { getRandomInt } from "./randomizer.js";
import { updateAnswer, answer, questionHeading } from "./variables.js";
import { generateCorrectButton } from "./buttonActions.js";

function generateQuestion() {
    const number1 = getRandomInt(50); /*Генерируем первое число*/
    const number2 = getRandomInt(50); /*Генерируем второе число*/
    let sign = "+"

    const sign_value = getRandomInt(2); /*Случайный выбор плюса и минуса*/
    if (sign_value == 0) {
        sign = "-";
    }

    if (sign === "+") {
        updateAnswer(number1 + number2);
    } else {
        updateAnswer(number1 - number2);
    }

    questionHeading.innerText = `${number1} ${sign} ${number2}`; /*Вывод результата (примера) на экран*/
    generateCorrectButton(answer) /*Вызывается функция generateCorrectButton и туда передается ответ*/
}

export {generateQuestion}
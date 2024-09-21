const start_button = document.querySelector(".start-button");
const startWrapper = document.querySelector(".start-wrapper");
const quizWrapper = document.querySelector(".quiz-wrapper");
const questionHeading = document.querySelector(".question-heading");

function generateCorrectButton() {
    const buttons = document.querySelectorAll(".answer-row button"); /*Создаем массив с кнопками*/
    const index = getRandomInt(buttons.length); /*В промежутке от 0 до конца массива выбирает случайную кнопку*/
    const correctButton = buttons[index];
    correctButton.innerText = "CORRECT!";

    buttons.forEach((button) => {
        button.addEventListener("click", generateQuestion)
    })
}

function startQuiz() {
    startWrapper.classList.add("hide"); /*Прячет стартовый экран, добавляя ему класс hide*/
    quizWrapper.classList.remove("hide"); /*Убирает свойство hide с quizWrapper'a, что показывает его на экран*/
    generateQuestion();
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

    questionHeading.innerText = `${number1} ${sign} ${number2}`; /*Вывод результата (примера) на экран*/
    generateCorrectButton() 
}


start_button.addEventListener("click", startQuiz) /*При нажатии активирует функцию startQuiz (cлушатель событий)*/
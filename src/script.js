import {start_button} from "./script/variables.js"
import { startQuiz } from "./script/appActions.js" 

start_button.addEventListener("click", startQuiz) /*При нажатии активирует функцию startQuiz (cлушатель событий)*/
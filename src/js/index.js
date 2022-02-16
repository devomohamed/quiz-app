import "../css/_bootstrap.min.css";
import "../css/style.css";

import Quiz from "./quiz";
import Questions from "./questions";


const questionsCls = new Questions()
const quiz = new Quiz({
  questions:questionsCls.questions,
  questionsContainer:document.querySelector('#questionsContainer')
})

const submitElement = document.querySelector('#submit');
const start = document.querySelector('#start');



start.addEventListener('click',(event)=>{
  quiz.init()
  event.target.classList.add('hide')
  submitElement.classList.remove('hide')
})


submitElement.addEventListener('click' ,(event)=>{
  quiz.collectUserAnswers()
  event.target.classList.add('hide')
  start.classList.remove('hide')
})

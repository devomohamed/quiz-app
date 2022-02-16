export default class Quiz{
  constructor(config){
    this.questions= config.questions
    this.questionsContainer = config.questionsContainer
  }
  init(){
    document.querySelector('#result').innerHTML = ''
   this.displayQuestions()
  }


  
  displayQuestions(){

    let output = '';

    this.questions.forEach((question,questionNumber) => {
      output += `<div class="card border-primary mb-3">
      <div class="card-header">Q${questionNumber +1} : ${question.title}</div>
      <div class="card-body userAnswers">
      <span class="badge bg-success hide">Correct</span>
<span class="badge bg-danger hide">Not Correct</span>
      ${this.displayAnswer(question.answers,questionNumber)}
      </div>
    </div>`
    });
    this.questionsContainer.innerHTML = output
  }



  displayAnswer(answers,questionNumber){
    let output = ''
    for (const answer in answers) {
      output += `<fieldset class="form-group">
    <div class="form-check">
      <label class="form-check-label">
        <input type="radio" class="form-check-input" name="q${questionNumber}" id="q${questionNumber}${answer}" value="${answer}" checked="">
        ${answers[answer]}
      </label>
    </div>
  </fieldset>`
    }
    
    return output
  }
  collectUserAnswers(){
    // console.log('Here');
    const userAnswers = document.querySelectorAll('.userAnswers');
    let currentAnswer = '';
    let correctAnswers = 0;
    
    this.questions.forEach((question,questionIndex)=>{
      // console.log(userAnswers[questionIndex]);
      currentAnswer = userAnswers[questionIndex].querySelector('input[type=radio]:checked').value;
      // console.log(currentAnswer); 
      if(currentAnswer === question.correctAnswer){
        correctAnswers +=1;
        userAnswers[questionIndex].querySelector('.bg-success').classList.remove('hide')
      }else{
        userAnswers[questionIndex].querySelector('.bg-danger').classList.remove('hide')
      }
      console.log(correctAnswers)
      this.displayResults(correctAnswers)
    })
    
  }
  displayResults(correctAnswers){
    document.querySelector('#result').innerHTML = `<h1 class=text-center">${correctAnswers} / ${this.questions.length}</h1>`;
  }
}
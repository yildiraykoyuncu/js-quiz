'use strict';

console.log('--- loading handler: previous-question-handler');

const previousQuestionHandler = (event) => {


    if (event.target.id !== 'previous-question') return;

    // update current question index
    state.game.currentQuestion--;

    //read from state
    const questionIndex = state.game.currentQuestion;
    const question = state.questions[questionIndex];

    //Create HTML

    const html = questionDisplay(question)
        //Render HTML to DOM

    document.getElementById('interface').innerHTML = html;

    //create new object to be added to stateLog
    const previousLog = {
        action: 'previous',
        event: event.type,
        'current question': questionIndex,
        state: state
    };
    // add log entry to stateLog

    stateLog.push(previousLog);
    console.log(stateLog);

    // check if current question is 0 then not to display prev button or last question so not to show next button

    const next = document.getElementById('next-question');
    const previous = document.getElementById('previous-question');
    const questionsArr = state.questions;

    next.style.display = checkLast(questionIndex, questionsArr);
    previous.style.display = checkFirst(questionIndex, questionsArr);

    //check if the question already answered if so show if its correct or not

    const result = document.querySelector('h2#result')
    const main = document.querySelector('main')
    if (question.selected === question.correct) {
        result.innerHTML = `Correct!`;
        result.className = 'correct';
        main.style.border = '3px solid green';
    } else {
        result.innerHTML = `False!`;
        result.className = 'false';
        main.style.border = '3px solid red';
    }
}
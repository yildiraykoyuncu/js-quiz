'use strict';

console.log('--- loading handler: next-question-handler');

const nextQuestionHandler = (event) => {

    if (event.target.id !== 'next-question') return;

    //update current question index
    state.game.currentQuestion++;

    //read from state
    const questionIndex = state.game.currentQuestion;
    const question = state.questions[questionIndex];

    //Create HTML

    const html = questionDisplay(question)
        //Render HTML to DOM

    const main = document.getElementById('interface');
    main.innerHTML = html;

    //remove the green or red border if the question is not already answered
    if (!question.isAnswered) {
        main.style.border = "1px solid black";
    } else {
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

    //remove the cheat window if its open

    document.getElementById('cheat-display').innerHTML = '';
    document.getElementById('cheat-display').classList.remove('container');

    //remove resource window if its open

    document.getElementById('resourceSt-display').innerHTML = '';
    document.getElementById('resourceSt-display').classList.remove('container');

    //create new object to be added to stateLog
    const nextLog = {
        action: 'next',
        event: event,
        currentQuestion: questionIndex,
        state: deepClone(state)
    };
    // add log entry to stateLog

    stateLog.push(nextLog);
    console.log(stateLog);

    // check if current question is 0 then not to display prev button or last question so not to show next button

    const next = document.getElementById('next-question');
    const previous = document.getElementById('previous-question');
    const questionsArr = state.questions;

    next.style.display = checkLast(questionIndex, questionsArr);
    previous.style.display = checkFirst(questionIndex, questionsArr);



}
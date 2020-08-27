'use strict';

console.log('--- loading handler: quit-handler');

const cheatHandler = (event) => {

    if (event.target.id !== 'cheat-answer') return;

    const currentQuestionIndex = state.game.currentQuestion;
    const question = state.questions[currentQuestionIndex];

    //Create HTML

    const html = cheatAnswerDisplay(question);

    //Render HTML to DOM

    document.getElementById('cheat-display').innerHTML = html;
    document.getElementById('cheat-display').classList.add('container');

    //create new object to be added to stateLog
    const cheatLog = {
        action: 'cheat',
        event: event,
        correctAnswer: question.answers[question.correct],
        state: deepClone(state)
    };
    // add log entry to stateLog

    stateLog.push(cheatLog);
    console.log(stateLog);

};
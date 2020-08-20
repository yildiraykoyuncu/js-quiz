'use strict';

console.log('--- loading handler: _');

const quizStartHandler = (event) => {

    // read from data
    const questionIndex = state.game.currentQuestion;
    const question = state.questions[questionIndex];

    //Create HTML

    const html = questionDisplay(question)
        //Render HTML to DOM

    document.getElementById('interface').innerHTML = html
    document.getElementById('interface').classList.add('container')
};

/* handlers define user interactions

  they read user input
    from events or from the DOM

  they process user data using program logic functions

  they communicate results to the user

  they log any important information for developers

*/
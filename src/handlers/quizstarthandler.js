'use strict';

console.log('--- loading handler: _');

const quizStartHandler = (event) => {
    console.log('hello')

    // read from data
    const questionIndex = state.game.currentQuestion;
    const question = state.questions[questionIndex];

    //Create HTML

    const html = `<div class="content-container">
    <p>${question.text}<p>

    <input type="radio" name="answer" value="0" id="answer_0">
    <label for="answer_0">${question.answers[0]}</label><br>

    <input type="radio" name="answer" value="0" id="answer_1">
    <label for="answer_0">${question.answers[1]}</label><br>

    <input type="radio" name="answer" value="0" id="answer_2">
    <label for="answer_0">${question.answers[2]}</label>
    </div>

    <div class="interaction">
    
    <button id="confirm" class="btn">Confirm!</button>

    </div>
    
    `
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
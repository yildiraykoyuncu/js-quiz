'use strict';

console.log('--- loading handler: restart-handler');



const restartHandler = (event) => {
    if (event.target.id !== 'restart') return;
    console.log('reset works fine');
    //reset all the values in state object in data script
    state = initialState

    // read from data
    const questionIndex = state.game.currentQuestion;
    const question = state.questions[questionIndex];

    //Create HTML
    const html = questionDisplay(question)


    //Render HTML to DOM
    const main = document.getElementById('interface')
    main.innerHTML = html
    main.classList.add('container')
    main.style.border = "1px solid black";

    //resets progress bar

    progressBarStarter({ target: document.getElementById('start') })

    // check if current question is 0 then not to display prev button or last question so not to show next button

    const next = document.getElementById('next-question');
    const previous = document.getElementById('previous-question');
    const questionsArr = state.questions;

    next.style.display = checkLast(questionIndex, questionsArr);
    previous.style.display = checkFirst(questionIndex, questionsArr);




};

const reset = (obj) => {
        obj.game.currentQuestion = 0;
        obj.game.answered = 0;
        obj.game.correct = 0;
        obj.game.showCorrectAnswers = false;

        for (let i = 0; i < obj.questions.length; i++) {
            obj.questions[i].selected = -1;
        }

    }
    /* handlers define user interactions

      they read user input
        from events or from the DOM

      they process user data using program logic functions

      they communicate results to the user

      they log any important information for developers

    */
'use strict';

console.log('--- loading handler: restart-handler');



const restartHandler = (event) => {
    if (event.target.id !== 'restart') return;
    console.log('reset works fine');
    //reset all the values in state object in data script
    reset(state);

    // read from data
    const questionIndex = state.game.currentQuestion;
    const question = state.questions[questionIndex];

    //Create HTML
     const html = questionDisplay(question)
  
    //Render HTML to DOM

    document.getElementById('interface').innerHTML = html
    document.getElementById('interface').classList.add('container')





    
};

const reset = (obj) => {
    obj.game.currentQuestion = 0;
    obj.game.answered = 0;
    obj.game.correct = 0;
    obj.game.showCorrectAnswers = false;

    for (let i = 0; i < obj.questions.length; i++){
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
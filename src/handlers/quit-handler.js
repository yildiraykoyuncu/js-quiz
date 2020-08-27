'use strict';

console.log('--- loading handler: quit-handler');

const quitHandler = (event) => {

    if (event.target.id !== 'quit') return;
    // read from data
    const game = state.game;

    //Create HTML

    const view = quitMessageDisplay(game);
    //Render HTML to DOM

    document.getElementById('interface').innerHTML = view;
    document.getElementById('interface').classList.add('container');
    document.getElementById('interface').style.border = '1px solid black'
        //remove the cheat window if its open

    document.getElementById('cheat-display').innerHTML = '';
    document.getElementById('cheat-display').classList.remove('container');

    //remove resource window if its open

    document.getElementById('resourceSt-display').innerHTML = '';
    document.getElementById('resourceSt-display').classList.remove('container');

    //create new object to be added to stateLog
    const quitLog = {
        action: 'quit',
        event: event,
        correctAnswers: state.game.correct,
        numberOfAnswers: state.game.answered,
        state: deepClone(state)
    };
    // add log entry to stateLog

    stateLog.push(quitLog);
    console.log(stateLog);

};


/* handlers define user interactions

  they read user input
    from events or from the DOM

  they process user data using program logic functions

  they communicate results to the user

  they log any important information for developers

*/
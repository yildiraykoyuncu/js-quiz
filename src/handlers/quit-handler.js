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
};

/* handlers define user interactions

  they read user input
    from events or from the DOM

  they process user data using program logic functions

  they communicate results to the user

  they log any important information for developers

*/
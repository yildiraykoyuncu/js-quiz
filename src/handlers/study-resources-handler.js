'use strict';

console.log('--- loading handler: quit-handler');

const studyResourcesHandler = (event) => {

    if (event.target.id !== 'resources-btn') return;
    
    const currentQuestionIndex = state.game.currentQuestion;
    const question = state.questions[currentQuestionIndex];

    //Create HTML

    const html = resourcesDisplay(question);
        
    //Render HTML to DOM

    document.getElementById('resourceSt-display').innerHTML = html;
    document.getElementById('resourceSt-display').classList.add('container');

  
};
const scoreDisplayHandler = (event) => {
    if (event.target.id !== 'confirm') return;

    // read from data

    const currentQuestionIndex = state.game.currentQuestion;
    const question = state.questions[currentQuestionIndex];

    //don't display or update score if user don't chose answer
    const userInput = document.querySelector('input[name="answer"]:checked')
    if (userInput === null) return;

    //check if the question is already answered
    if (question.isAnswered) return

    // check if the answer is correct

    if (question.correct === question.selected) {
        state.game.correct++;
    }

    //mark the question as answered
    question.isAnswered = true;

    //increase the number of answered questions
    state.game.answered++;

    // display it to user
    const score = document.getElementById('scoreDisplay');
    score.innerHTML = `Score: ${state.game.correct}`
    console.log(state.game.correct)

    //create new object to be added to stateLog
    const scoreLog = {
        action: 'scoreDisplay',
        event: event,
        correctAnswer: question.correct,
        userAnswer: question.selected,
        correctAnswers: state.game.correct,
        numberOfAnswers: state.game.answered,
        questionStatus: question.isAnswered,
        state: deepClone(state)
    };

    stateLog.push(scoreLog);
    console.log(stateLog);

    //If quiz is finished go to the quit page
    if (state.game.answered === 10) {
        quitHandler({ target: document.getElementById('quit') });
    }

}
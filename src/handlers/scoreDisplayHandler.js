const scoreDisplayHandler = (event) => {
    if (event.target.id !== 'confirm') return;
    console.log('hello');

    // read from data

    const currentQuestionIndex = state.game.currentQuestion;
    const question = state.questions[currentQuestionIndex];

    // check if the answer is correct

    if (question.correct === question.selected) {
        state.game.correct++;
    }

    // display it to user
    const score = document.getElementById('scoreDisplay');
    score.innerHTML = `Score: ${state.game.correct}`
    console.log(state.game.correct)
}
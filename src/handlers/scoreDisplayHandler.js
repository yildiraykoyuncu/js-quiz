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

    // display it to user
    const score = document.getElementById('scoreDisplay');
    score.innerHTML = `Score: ${state.game.correct}`
    console.log(state.game.correct)
}
const answerHandler = (event) => {

    if (event.target.id !== 'confirm') return;

    //read from user input
    const userAnswer = Number(document.querySelector('input[name="answer"]:checked').value);

    //read from state
    const questionIndex = state.game.currentQuestion
    const question = state.questions[questionIndex]
    const correctAnswer = question.correct

    //update state

    question.selected = userAnswer

    //logic

    if (question.selected === correctAnswer) {
        console.log(true)
    } else { console.log(false) }

}
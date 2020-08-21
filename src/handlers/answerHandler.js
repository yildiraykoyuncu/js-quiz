const answerHandler = (event) => {

    if (event.target.id !== 'confirm') return;


    //read from user input
    const userAnswer = Number(document.querySelector('input[name="answer"]:checked').value);

    //read from state
    const questionIndex = state.game.currentQuestion
    const question = state.questions[questionIndex]

    //check if question is already answered
    if (question.selected !== -1) return

    const correctAnswer = question.correct

    //update state

    question.selected = userAnswer

    //check if answer is correct or not and display to user

    const result = document.querySelector('h2#result')
    const main = document.querySelector('main')
    if (question.selected === correctAnswer) {
        result.innerHTML = `Correct!`;
        result.className = 'correct';
        main.style.border = '3px solid green';
    } else {
        result.innerHTML = `False!`;
        result.className = 'false';
        main.style.border = '3px solid red';
    }

}
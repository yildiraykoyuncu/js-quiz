const answerHandler = (event) => {

    if (event.target.id !== 'confirm') return;


    //read from user input
    const userInput = document.querySelector('input[name="answer"]:checked')

    if (userInput === null) return;

    const userAnswer = Number(userInput.value);


    //read from state
    const questionIndex = state.game.currentQuestion
    const question = state.questions[questionIndex]

    //check if question is already answered
    if (question.selected !== -1) return

    const correctAnswer = question.correct

    //update state

    question.selected = userAnswer;

    //create new object to be added to stateLog
    const answerLog = {
        action: 'confirm',
        event: event,
        input: question.answers[question.selected],
        state: deepClone(state)
    };
    // add log entry to stateLog
    //  it will be updated by reference!
    stateLog.push(answerLog);
    console.log(stateLog);

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
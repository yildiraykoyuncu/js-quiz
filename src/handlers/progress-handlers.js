const progressBarStarter = (event) => {
    // render html for the progress bar
    const html = progressBarRenderer()
    document.getElementById('progress-bar').innerHTML = html
    document.getElementById('progress-bar').className = 'container'

    //Progress bar current question
    const questionIndex = state.game.currentQuestion;
    const boxes = document.querySelectorAll('.box ')

    boxes.forEach((box, i) => {
        if (i === questionIndex) {
            box.style.border = '3px solid black'
        } else {
            box.style.border = 'none'
        }
    })
}



const progressBarHandler = (event) => {

    if (event.target.id !== 'confirm') return

    //read from state

    state.questions.forEach((question, i) => {
        const boxId = `question${i}`
        if (!question.isAnswered) {
            document.getElementById(boxId).style.backgroundColor = 'gray'
        } else if (question.selected === question.correct) {
            document.getElementById(boxId).style.backgroundColor = 'green'
        } else if (question.selected !== question.correct) {
            document.getElementById(boxId).style.backgroundColor = 'red'
        }
    })
}
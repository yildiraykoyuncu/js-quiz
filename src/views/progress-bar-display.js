const progressBarRenderer = () => {

    let boxes = '';
    state.questions.forEach((question, i) => {
        boxes += `<div class="box" id="question${i}"></div>`
    })

    const html = `<div class="progress-container">
    ${boxes} 
    </div>
    `
    return html
}
const progressBarRenderer = () => {

    let boxes = '';
    state.questions.forEach((question, i) => {

        boxes += `<div class="box" id="question${i}">
        <code>${i+1}</code>
        </div>`
    })

    const html = `<div class="progress-container">
    ${boxes} 
    </div>
    `
    return html
}
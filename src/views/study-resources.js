const resourcesDisplay = (obj) => {

    const links = obj.resourceLink.map(source => {
        return `<a href="${source.url}" target="_blank">${source.name}</a><br>`
    }).join("")
    return `<div id="study-resources">

    <h3>For more info checkout these links:</h3>
    <p><span>${links}</span></p>
    </div>
    `
};
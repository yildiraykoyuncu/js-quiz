const resourcesDisplay = (obj) => {
    
    const links = obj.resourceLink.map(link => {
        return`<a href="${link}">${link}</a><br>`
    }).join("")
    return `<div id="study-resources">

    <p>The study resources: <span>${links}</span></p>
    
    </div>
    `    
    };

    

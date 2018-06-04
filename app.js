document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#app").innerHTML = makeContent();
});

function makeContent() {
    return div({htmlClass: "main", style: "color: #4179d3"}, 
        templater.elementBuilder("h1", {}, "Hello birdFeet")
    );
}

function div(attributes, content) {
    return templater.elementBuilder("div", attributes, content);
}
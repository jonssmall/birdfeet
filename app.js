document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#app").appendChild(makeContent());
});

function makeContent() {
    const h1 = templater.elementBuilder({name: "h1", content: ["Hello birdFeet"]});
    // const p = templater.elementBuilder("p", {}, "Little text.");
    // const button = templater.elementBuilder("button", {onClick: "testClick()"}, "Click here.");
    // const input = templater.elementBuilder("input", {});

    return div({htmlClass: "main", style: "color: #4179d3"},
        h1
    );
}

function div(attributes, ...content) {
    return templater.elementBuilder({name: "div", attributes, content});
}

function testClick() {
    alert("hello");
}
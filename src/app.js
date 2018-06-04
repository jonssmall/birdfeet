import templater from './templater';
import { setTimeout } from 'timers';

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#app").innerHTML = makeContent();
});

function makeContent() {
    const h1 = templater.elementBuilder("h1", {}, "Hello birdFeet");
    const p = templater.elementBuilder("p", {}, "Little text.");
    const button = templater.elementBuilder("button", {onClick: "testClick();"}, "Click here.");

    return div({htmlClass: "main", style: "color: #4179d3"},
        h1, p, button
    );
}

function div(attributes, ...content) {
    return templater.elementBuilder("div", attributes, ...content);
}

function testClick() {
    debugger;
    console.log(this);
    alert("hello");
}

setTimeout(() => testClick(), 1000);
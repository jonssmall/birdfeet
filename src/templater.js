'use strict';

function elementBuilder(name, attributes, ...content) {
    const template = document.createElement('template');
    const element = document.createElement(name);

    content.forEach(c => {
        if(typeof c === 'string') {
            element.appendChild(document.createTextNode(c));
        } else {
            element.appendChild(c);
        }
    });

    template.appendChild(setAttributes(element, attributes));
    return template.firstChild;
}

function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(a => {
        const key = reservedKeywords.includes(a) ? keywordResolver(a) : a;
        element.setAttribute(key, attributes[a]);
    });
    return element;
}

const reservedKeywords = ["htmlClass", "htmlFor"];

function keywordResolver(key) {
    return key.replace("html", "").toLowerCase();
}

const templater = {
    elementBuilder
};

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = templater;
} else {
    window.templater = templater;
}
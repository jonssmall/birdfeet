"use strict";

function elementBuilder(name, attributes, content) {
    return `
    ${openingTag(name, attributes)}
    ${content}
    ${closingTag(name)}
    `;
}

function openingTag(name, attributes) {
    const combined = `${name} `
}

function closingTag(name) {

}

function attributeBuilder(attributes) {
    return Object.keys(attributes).map(a => {
        const key = reservedKeywords.includes(a) ?  keywordResolver(a) : a;
        return `${key}="${attributes[a]}"`;
    }).join(" ");
}

const selfClosing = ["area", "base", "br", "col", "embed", "hr", "img", "input", 
    "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr"];

const reservedKeywords = ["htmlClass", "htmlFor"];

function keywordResolver(key) {
    return key.replace("html", "").toLowerCase();
}

module.exports = {
    elementBuilder, openingTag, closingTag, attributeBuilder
};
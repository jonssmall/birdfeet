"use strict";

function elementBuilder(name, attributes = {}, ...content) {
    if(selfClosing.includes(name)) {
        return selfClosingTag(name, attributes);
    } else {
        return `${openingTag(name, attributes)}${content.join("")}${closingTag(name)}`;
    }
}

function openingTag(name, attributes) {
    const combined = `${name} ${attributeBuilder(attributes)}`.trim();
    return `<${combined}>`;
}

function closingTag(name) {
    return `</${name}>`;
}

function selfClosingTag(name, attributes) {
    const combined = `${name} ${attributeBuilder(attributes)}`.trim();
    return `<${combined}/>`;
}

function attributeBuilder(attributes) {
    return Object.keys(attributes).map(a => {
        const key = reservedKeywords.includes(a) ? keywordResolver(a) : a;
        return `${key}="${attributes[a]}"`;
    }).join(" ");
}

const selfClosing = ["area", "base", "br", "col", "embed", "hr", "img", "input", 
    "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr"];

const reservedKeywords = ["htmlClass", "htmlFor"];

function keywordResolver(key) {
    return key.replace("html", "").toLowerCase();
}

const templater = {
    elementBuilder, openingTag, closingTag, attributeBuilder, selfClosingTag
};

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = templater;
} else {
    window.templater = templater;
}
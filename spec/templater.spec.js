"use strict";

const templater = require("../src/templater");

describe("Attribute builder", () => {
    it("transforms a JS object into an html5 attribute string", () => {
        expect(templater.attributeBuilder(attributes))
            .toBe(attributeString);
    });
});

describe("Opening tag builder", () => {
    it("not self-closing, no attributes", () => {
        expect(templater.openingTag("div", {}))
            .toBe("<div>");
    });
    it("not self-closing, with attributes", () => {
        expect(templater.openingTag("span", attributes))
            .toBe(`<span ${attributeString}>`);
    });
});

describe("Closing tag builder", () => {
    it("closes a non-self-closing tag", () => {
        expect(templater.closingTag("div"))
            .toBe("</div>");
    });
});

describe("Self-closing tag builder", () => {
    it("closes without attributes", () => {
        expect(templater.selfClosingTag("meta", {}))
            .toBe("<meta/>");
    });
    it("closes with attributes", () => {
        expect(templater.selfClosingTag("img", attributes))
            .toBe(`<img ${attributeString}/>`);
    });
});

describe("Element builder", () => {
    it("tells the difference between self-closing and regular", () => {
        expect(templater.elementBuilder("img"))
            .toBe("<img/>");
        expect(templater.elementBuilder("div"))
            .toBe("<div></div>");
    });
    it("builds an element with attributes and content", () => {
        expect(templater.elementBuilder("div", attributes, "Hello, Jasmine!"))
            .toBe(`<div ${attributeString}>Hello, Jasmine!</div>`);
    });
    it("can nest elements by calling builder as content", () => {
        expect(templater.elementBuilder("div", {}, templater.elementBuilder("img")))
            .toBe("<div><img/></div>");
    });
    it("can nest elements as siblings via rest parameters", () => {
        expect(templater.elementBuilder("div", {}, 
                templater.elementBuilder("img"),
                templater.elementBuilder("h1", {}, "Hello, Jasmine!")))
            .toBe("<div><img/><h1>Hello, Jasmine!</h1></div>");
    });
});

const attributes = {
    htmlClass: "warning big-button",
    id: "my-button",
    href: "www.google.com"
};

const attributeString = 'class="warning big-button" id="my-button" href="www.google.com"';
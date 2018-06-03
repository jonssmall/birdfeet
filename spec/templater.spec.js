"use strict";

const templater = require("../src/templater");

describe("Attribute builder", () => {
    it("transforms a JS object into an html5 attribute string", () => {
        expect(templater.attributeBuilder(attributes)).toBe(attributeString);
    });
});

describe("Opening tag builder", () => {
    it("not self-closing, no attributes", () => {
        expect(templater.openingTag("div", {})).toBe("<div>");
    });
    it("not self-closing, with attributes", () => {
        expect(templater.openingTag("span", attributes)).toBe(`<span ${attributeString}>`);
    });
});

describe("Closing tag builder", () => {
    it("closes a non-self-closing tag", () => {
        expect(templater.closingTag("div")).toBe("</div>");
    })
});

describe("Self-closing tag builder", () => {
    it("closes without attributes", () => {
        expect(templater.selfClosingTag("meta", {})).toBe("<meta/>");
    })
    it("closes with attributes", () => {
        expect(templater.selfClosingTag("img", attributes)).toBe(`<img ${attributeString}/>`);
    })
})

const attributes = {
    htmlClass: "warning big-button",
    id: "my-button",
    href: "www.google.com"
};

const attributeString = 'class="warning big-button" id="my-button" href="www.google.com"';
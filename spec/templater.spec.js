"use strict";

const templater = require("../src/templater");

describe("Attribute builder", () => {
    it("transforms a JS object into an html5 attribute string", () => {
        expect(templater.attributeBuilder(attributes)).toBe(attributeString);
    });
});

describe("Opening tag builder", () => {
    it("self-closing, no attributes", () => {
        expect(templater.openingTag("meta", {})).toBe("<meta/>");
    });
    it("self-closing, with attributes", () => {
        expect(templater.openingTag("img", attributes)).toBe(`<img ${attributeString}/>`);
    });
    it("not self-closing, no attributes", () => {
        expect(templater.openingTag("div", {})).toBe("<div>");
    });
    it("not self-closing, with attributes", () => {
        expect(templater.openingTag("span", attributes)).toBe(`<span ${attributeString}>`);
    });
});

const attributes = {
    htmlClass: "warning big-button",
    id: "my-button",
    href: "www.google.com"
};

const attributeString = 'class="warning big-button" id="my-button" href="www.google.com"';
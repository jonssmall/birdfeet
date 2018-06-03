"use strict";

const templater = require("../src/templater");

describe("Attribute builder", () => {
    it("transforms a JS object into an html5 attribute string", () => {
        expect(templater.attributeBuilder(attributes)).toBe(attributeString);
    });
});

const attributes = {
    htmlClass: "warning big-button",
    id: "my-button",
    href: "www.google.com"
};

const attributeString = 'class="warning big-button" id="my-button" href="www.google.com"';
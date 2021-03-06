"use strict";

const templater = require("../src/templater");
const { JSDOM } = require("jsdom");
const dom = new JSDOM('<!doctype html><html><body></body></html>');

global['window'] = dom.window;
global['document'] = dom.window.document;

describe("Element builder", () => {
    it("tells the difference between self-closing and regular", () => {
        expect(templater.elementBuilder({name: "img"}).outerHTML)
            .toBe("<img>");
        expect(templater.elementBuilder({name: "div"}).outerHTML)
            .toBe("<div></div>");
    });
    it("builds an element with attributes and content", () => {
        expect(templater.elementBuilder({name: "div", attributes, content: ["Hello, Jasmine!"]}).outerHTML)
            .toBe(`<div ${attributeString}>Hello, Jasmine!</div>`);
    });
    it("can nest elements by calling builder as content", () => {
        expect(templater.elementBuilder({name: "div", content: [templater.elementBuilder({name: "img"})]}).outerHTML)
            .toBe("<div><img></div>");
    });
    it("can nest elements as siblings via rest parameters", () => {
        expect(templater.elementBuilder({name: "div", content: [
            templater.elementBuilder({name: "img"}),
            templater.elementBuilder({name: "h1", content: ["Hello, Jasmine!"]})
        ]}).outerHTML)
            .toBe("<div><img><h1>Hello, Jasmine!</h1></div>");
    });
});

const attributes = {
    htmlClass: "warning big-button",
    id: "my-button",
    href: "www.google.com"
};

const attributeString = 'class="warning big-button" id="my-button" href="www.google.com"';
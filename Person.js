"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.cry = function () {
        console.log("ouin");
    };
    return Person;
}());
exports.default = Person;

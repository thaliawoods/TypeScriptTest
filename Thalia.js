"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Thalia = /** @class */ (function (_super) {
    __extends(Thalia, _super);
    function Thalia(name, age, isAwake) {
        var _this = _super.call(this, name, age) || this;
        _this.isAwake = isAwake;
        return _this;
    }
    Thalia.prototype.thalyClumsyBaddy = function (assiette) {
        assiette.fall();
        console.log(assiette.raviolis);
        if (assiette.isBroken) {
            console.log("Oups");
        }
        else {
            console.log("Ouf");
        }
    };
    Thalia.prototype.thalyClumsy = function (assiette) {
        this.shootThePlate(assiette);
        this.countRavioli(assiette);
        this.checkIfBroken(assiette);
    };
    Thalia.prototype.shootThePlate = function (assiette) {
        assiette.fall();
    };
    Thalia.prototype.checkIfBroken = function (assiette) {
        if (assiette.isBroken) {
            console.log("Oups");
        }
        else {
            console.log("Ouf");
        }
    };
    Thalia.prototype.countRavioli = function (assiette) {
        return assiette.raviolis;
    };
    return Thalia;
}(Person_1.default));
exports.default = Thalia;

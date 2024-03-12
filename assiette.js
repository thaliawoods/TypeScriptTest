"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Assiette = /** @class */ (function () {
    function Assiette(isBroken, raviolis) {
        this.isBroken = isBroken;
        this.raviolis = raviolis;
    }
    Assiette.prototype.fall = function () {
        this.raviolis = 0;
        this.isBroken = true;
    };
    return Assiette;
}());
exports.default = Assiette;

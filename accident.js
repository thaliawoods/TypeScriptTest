"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Thalia_1 = require("./Thalia");
var Assiette_1 = require("./Assiette");
var Onat_1 = require("./Onat");
var thalia = new Thalia_1.default("Thalia", 27, true);
var onat = new Onat_1.default("Onat", 29, true);
var assiette = new Assiette_1.default(false, 9);
// console.log(thalia.countRavioli(assiette))
// thalia.shootThePlate(assiette)
// console.log(thalia.countRavioli(assiette))
// thalia.checkIfBroken(assiette)
// VU QUE PRIVATE
thalia.thalyClumsy(assiette);
var arrayBoard = new Array(onat, thalia);
for (var i = 0; i < arrayBoard.length; i++) {
    console.log("Name: ".concat(arrayBoard[i].name, ", Age: ").concat(arrayBoard[i].age));
}
// console.log(onat.name&&onat.age)

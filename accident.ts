import Thalia from "./Thalia";
import Assiette from "./Assiette";
import Onat from "./Onat";
import Person from "./Person";

let thalia = new Thalia("Thalia", 27, true)
let onat = new Onat("Onat", 29, true)
let assiette = new Assiette(false, 9)
// console.log(thalia.countRavioli(assiette))
// thalia.shootThePlate(assiette)
// console.log(thalia.countRavioli(assiette))
// thalia.checkIfBroken(assiette)
// VU QUE PRIVATE
thalia.thalyClumsy(assiette)

let arrayBoard: Array<Person> = new Array(onat as Person, thalia as Person)

for (let i=0; i<arrayBoard.length; i++) {
    console.log(`Name: ${arrayBoard[i].name}, Age: ${arrayBoard[i].age}`)
}

// console.log(onat.name&&onat.age)
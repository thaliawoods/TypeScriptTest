import Assiette from "./Assiette"
import Person from "./Person"


class Thalia extends Person {
    isAwake: boolean

    constructor(name: string, age: number, isAwake: boolean){
        super(name, age)
        this.isAwake = isAwake
    }


    thalyClumsyBaddy(assiette: Assiette) {
        assiette.fall()
        console.log(assiette.raviolis)
        if(assiette.isBroken) {
            console.log("Oups")
        }
        else {
            console.log("Ouf")
        }
    }
    

    public thalyClumsy(assiette:Assiette) {
        this.shootThePlate(assiette)
        this.countRavioli(assiette)
        this.checkIfBroken(assiette)
    }


    private shootThePlate(assiette: Assiette): void {
        assiette.fall()
    }


    private checkIfBroken(assiette: Assiette): void {
        if(assiette.isBroken) {
        console.log("Oups")
    }
    else {
        console.log("Ouf")
    }
}


    private countRavioli(assiette: Assiette): number {
        return assiette.raviolis
    }
}


export default Thalia
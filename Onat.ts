import Person from "./Person"

class Onat extends Person {
    isStress: boolean

    constructor(name: string, age: number, isStress: boolean) {
        super(name,age)
        this.isStress=isStress
    }
}

export default Onat
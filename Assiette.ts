class Assiette {
    // name: string
    // poids: number
    isBroken: boolean
    raviolis: number

    constructor(isBroken: boolean, raviolis: number) {
        this.isBroken = isBroken
        this.raviolis = raviolis
    }

    fall() {
        this.raviolis = 0
        this.isBroken = true
    }
}

export default Assiette 
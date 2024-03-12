class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    cry() {
        console.log("ouin")
    }
}

export default Person
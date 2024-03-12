// petit cours typescript 

const number: number = 4;
// const bignumber: bigint = 43000000000000000000000000000000000n; marche avec autre VersionTs
const prenom: string = "onat";
const result: boolean = true;
const none: undefined = undefined;
const nonexist: null = null;

let arrayOfNumber: Array<number> = [1,2,3]


let apinumber: number | null = null

function getApi() {
    apinumber = 4
}

getApi()

if (apinumber != null) {
    apinumber = apinumber + 3 
}

console.log(apinumber)


class Thalia {
    name: string;
    age: number;
    isAwake: boolean;

    constructor(name: string, age: number, isAwake: boolean) {
        this.name = name 
        this.age = age
        this.isAwake = isAwake
    }
}

// const newThalia = new Thalia("thalios", "12", false)

const newThalia = new Thalia("thalia", 27, true)



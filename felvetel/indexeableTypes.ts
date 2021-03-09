interface ReadonlyStringArray {
    readonly [index: number]: string;
}

let myArray: ReadonlyStringArray = ["alam", "korte"];
console.log(myArray[2]);
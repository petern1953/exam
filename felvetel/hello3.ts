interface name {
    firstName: string;
    lastName: string;
    [propname: string]: string;
}

class Greeter2 {
    fullName: string = '';
    skills: Array<{ name: string, point: number }> = [
        {
            name: "programming", point: 3
        }
    ];
    readonly skill: string;

    // constructor(firstName: string, lastName: string) {
    constructor(nameObj: name, skill: string = "programming") {
        this.fullName = `${nameObj.firstName} ${nameObj.lastName}`;
        this.skill = skill;
    }

    greet() {
        return `Hello, my name is ${this.fullName}!`;
    }
}
let nameParam: name = { firstName: "Nagy", lastName: "Kázmér", age: "22" };


// g2.skill = "reading"; // csak olvasható!

function printGreeting(nameParam: name) {
    let g2: Greeter2 = new Greeter2(
        nameParam,
        "dancing"
    );
    document.body.innerHTML = `<p>${g2.greet()}</p>`
}
printGreeting(nameParam);

interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

let conf: SquareConfig = {
    color: "red",
    width: 33,
    jay: "Leno",
    as: true
}

// Readonly properties
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 2, y: 3 };

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;

interface LabelledValue {
    label: string;
    size?: number;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 object" };
printLabel(myObj);

interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5;
console.log(p1.x, p1.y);

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
console.log(ro[0]);
console.log(ro[3]);
ro[0] = 12;
ro.push(21);
ro.length = 100;
a = ro;
// property check
interface SquareConfig {
    color?: string;
    width?: number;
    alma: boolean;
    [propName: string]: any;
}

let conf: SquareConfig = {
    color: "red",
    width: 33,
    jay: "leno"
};

console.log(conf.color, conf.width, conf.jay);
// function type
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

console.log(mySearch("alma", "lm"));
// indexable type
interface ReadonlyStringArray {
    readonly [index: number]: string;
}

let myArray: ReadonlyStringArray = ["Alice", "Bob", "Andy"];
myArray.push("Kate");
console.log(myArray.pop());
console.log(myArray[2]);
myArray[2] = "Abe";

// class type
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) { this.currentTime = d; }
}

// Extending interface
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square: Square = {
    color: "blue",
    sideLength: 10
};

console.log(square.color, square.sideLength);

//Hybrid type
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) {
        console.log("start: ", start);
    };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(173);
console.log(c.interval);
c.reset();
console.log(c.interval);
c.interval = 5.0;
console.log(c.interval);

//Interface, extending class 
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { };
}

// Property 'state' is missing in type 'Image' but required in type 'SelectableControl'.
class Image1 implements SelectableControl {
    select() { };
}
// typescript class
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return `Hello, ${this.greeting}`;
    }
}

let greeter = new Greeter("worldy fans");
console.log(greeter.greet());

// TS class inheritance
class Animal {
    move(distance: number = 0) {
        console.log(`Animal moved ${distance} m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof! Woof");
    }
}

const dog = new Dog();
console.log(dog.bark());
console.log(dog.move(123));

// public, private and protected
class Animal1 {
    public name: string;
    private size: number;
    protected aggressive: boolean;
}

class Dog1 extends Animal1 {
    constructor() {
        super();
        this.aggressive = true;
    }
}

const dog1 = new Dog1();
dog1.name = "Bodri";
dog.size = 22;  // error: private!
dog.aggressive = false; // error: protected!

// readonly modifier
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor(theName: string) {
        this.name = theName;
    }
}

let oInstance = new Octopus("Octopus Giganticus");
oInstance.name = "Octopus Pluralis"; // Cannot assign to 'name' because it is a read-only property.

// accessor (by which to get or set a property)
class Employee {
    private _fullName: string;

    get fullName1(): string {
        return this._fullName;
    }

    set fullName1(newName: string) {
        this._fullName = newName;
    }
}

let employee = new Employee();
employee.fullName1 = "Bob Smith";
if (employee.fullName1) {
    console.log(employee.fullName1);
}

// static modifier
class Square {
    static origin: [number, number] = [0, 0];
    public calculateDistance(
        x: number,
        y: number
    ) {
        let xDist = x - Square.origin[0];
        let yDist = y - Square.origin[0];
        return Math.sqrt(xDist ** 2 + yDist ** 2);
    }
}

let square1: Square = new Square();
console.log(square1.calculateDistance(10, 22));
console.log(Square.origin);
console.log(square1.origin);

// abstract class 
abstract class Department {
    constructor(public name: string) { }

    printName(): void {
        console.log(this.name);
    }

    abstract printMeeting(): void;
}

class ConcreteDepartment extends Department {
    printMeeting() {
        console.log("Meeting is awesome");
    }
}

let dep: ConcreteDepartment = new ConcreteDepartment("sale");


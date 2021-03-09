interface name {
    firstName: string;
    lastName: string;
    [propname: string]: string;
}
interface printFn {
    (nameParam: name): void;
}

class Greeter {
    fullName: string = "";
    skills: Array<{ name: string, point: number }> = [
        { name: 'programming', point: 33 }
    ];
    readonly skill: string;
    // constructor(firstName: string, lastName: string) {
    //     this.fullName = `${firstName} ${lastName}`;
    // }
    constructor(nameObj: name, skill: string = "programming") {
        this.fullName = `${nameObj.firstName} ${nameObj.lastName}`;
        this.skill = skill;
    }


    greet() {
        return `Hello, my name is ${this.fullName}.`;
    }
}

let nameParam: name = { firstName: 'József', lastName: 'Cserkó', age: "22" };

const printGreeting: printFn = function(nameParam: name) {

    let g: Greeter = new Greeter(
        nameParam,
        "dancing"
    );
    document.body.innerHTML = g.greet();
}
let g: Greeter = new Greeter(nameParam,
    "dancing"
);

document.body.innerHTML = `<p>${g.greet()}</p>`;

let x: [number, string, boolean];
x = [1, "alma", true];
x.push(true);
x.push(true);
x.push(true);
x.push(true);
let a= x.pop();
let b= x.pop();
let c= x.pop();
let d= x.pop();
let e= x.pop();

enum Printmedia {
    NewsPaper,
    NewsLetter,
    Magazine,
    Book
}

function getMedia(mediaName: string): Printmedia {
    if (mediaName === "Forbes" || mediaName === "Outlook")
        return Printmedia.Magazine;
}

let mediaType: Printmedia = getMedia('Forbes');


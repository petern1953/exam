interface name {
    firstName: string;
    lastName: string;
    [propname: string]: string;
}

interface printFn {
    (nameParam: name): void;
}

class Greeter4 {
    fullName: string = '';
    skills: Array<{ name: string, point: number }> = [
        {
            name: "programming", point: 3
        }
    ];
    readonly skill: string;

    constructor(nameObj: name, skill: string = "programming") {
        this.fullName = `${nameObj.firstName} ${nameObj.lastName}`;
        this.skill = skill;
    }

    greet() {
        return `Hello, my name is ${this.fullName}!`;
    }
}
let nameParam4: name = { firstName: "Nagy", lastName: "Kózmér", age: "22" };

const printGreeting4: printFn = function (nameParam4) {
    let g4: Greeter4 = new Greeter4(
        nameParam4,
        "dancing"
    );
    document.body.innerHTML = `<p>${g4.greet()}</p>`
}
printGreeting4(nameParam4);

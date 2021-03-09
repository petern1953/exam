class Greeter2 {
    fullName: string = '';
    skills: Array<{ name: string, point: number }> = [
        {
            name: "programming", point: 3
        }
    ];

    constructor(firstName: string, lastName: string) {
        this.fullName = `${firstName} ${lastName}`;
    }

    greet() {
        return `Hello, my name is ${this.fullName}!`;
    }
}

let g2: Greeter2 = new Greeter2("kiss", "csaba");

document.body.innerHTML = `<p>${g2.greet()}</p>`

// Tuples:
let x: [number, string, boolean];

x = [11, "hello", false];
// x = ["hello", 11, false];
// x = [11, "hello", false, 22, true, "ola", [a]];

enum Color { Red, Green, Blue };
let c: Color = Color.Green;
enum Color2 { Red2 = 7, Green2 = 9, Blue2 };
let c2: Color2 = Color2.Green2;
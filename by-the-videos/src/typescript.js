var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 object" };
printLabel(myObj);
var p1 = { x: 10, y: 20 };
// p1.x = 5;
console.log(p1.x, p1.y);
var a = [1, 2, 3, 4];
var ro = a;
console.log(ro[0]);
console.log(ro[3]);
ro[0] = 12;
ro.push(21);
ro.length = 100;
a = ro;
var conf = {
    color: "red",
    width: 33,
    jay: "leno"
};
console.log(conf.color, conf.width, conf.jay);
var mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
console.log(mySearch("alma", "lm"));
var myArray = ["Alice", "Bob", "Andy"];
myArray.push("Kate");
console.log(myArray.pop());
console.log(myArray[2]);
myArray[2] = "Abe";
var Clock = /** @class */ (function () {
    function Clock() {
    }
    Clock.prototype.setTime = function (d) { this.currentTime = d; };
    return Clock;
}());
var square = {
    color: "blue",
    sideLength: 10
};
console.log(square.color, square.sideLength);
function getCounter() {
    var counter = function (start) {
        console.log("start: ", start);
    };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(173);
console.log(c.interval);
c.reset();
console.log(c.interval);
c.interval = 5.0;
console.log(c.interval);
//Interface, extending class 
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    ;
    return Button;
}(Control));
// Property 'state' is missing in type 'Image' but required in type 'SelectableControl'.
var Image1 = /** @class */ (function () {
    function Image1() {
    }
    Image1.prototype.select = function () { };
    ;
    return Image1;
}());
// typescript class
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("worldy fans");
console.log(greeter.greet());
// TS class inheritance
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("Animal moved " + distance + " m.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Woof! Woof");
    };
    return Dog;
}(Animal));
var dog = new Dog();
console.log(dog.bark());
console.log(dog.move(123));
// public, private and protected
var Animal1 = /** @class */ (function () {
    function Animal1() {
    }
    return Animal1;
}());
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    function Dog1() {
        var _this = _super.call(this) || this;
        _this.aggressive = true;
        return _this;
    }
    return Dog1;
}(Animal1));
var dog1 = new Dog1();
dog1.name = "Bodri";
dog.size = 22; // error: private!
dog.aggressive = false; // error: protected!
// readonly modifier
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var oInstance = new Octopus("Octopus Giganticus");
oInstance.name = "Octopus Pluralis"; // Cannot assign to 'name' because it is a read-only property.
// accessor (by which to get or set a property)
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName1", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            this._fullName = newName;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullName1 = "Bob Smith";
if (employee.fullName1) {
    console.log(employee.fullName1);
}
// static modifier
var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.calculateDistance = function (x, y) {
        var xDist = x - Square.origin[0];
        var yDist = y - Square.origin[0];
        return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
    };
    Square.origin = [0, 0];
    return Square;
}());
var square1 = new Square();
console.log(square1.calculateDistance(10, 22));
console.log(Square.origin);
console.log(square1.origin);
// abstract class 
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log(this.name);
    };
    return Department;
}());
var ConcreteDepartment = /** @class */ (function (_super) {
    __extends(ConcreteDepartment, _super);
    function ConcreteDepartment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteDepartment.prototype.printMeeting = function () {
        console.log("Meeting is awesome");
    };
    return ConcreteDepartment;
}(Department));
var dep = new ConcreteDepartment("sale");

var Greeter2 = /** @class */ (function () {
    function Greeter2(firstName, lastName) {
        this.fullName = '';
        this.skills = [
            {
                name: "programming", point: 3
            }
        ];
        this.fullName = firstName + " " + lastName;
    }
    Greeter2.prototype.greet = function () {
        return "Hello, my name is " + this.fullName + "!";
    };
    return Greeter2;
}());
var g2 = new Greeter2("kiss", "csaba");
document.body.innerHTML = "<p>" + g2.greet() + "</p>";
// Tuples:
var x;
x = [11, "hello", false];
// x = ["hello", 11, false];
// x = [11, "hello", false, 22, true, "ola", [a]];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var Color2;
(function (Color2) {
    Color2[Color2["Red2"] = 7] = "Red2";
    Color2[Color2["Green2"] = 9] = "Green2";
    Color2[Color2["Blue2"] = 10] = "Blue2";
})(Color2 || (Color2 = {}));
;
var c2 = Color2.Green2;

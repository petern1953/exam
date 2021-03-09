var Greeter2 = /** @class */ (function () {
    // constructor(firstName: string, lastName: string) {
    function Greeter2(nameObj, skill) {
        if (skill === void 0) { skill = "programming"; }
        this.fullName = '';
        this.skills = [
            {
                name: "programming", point: 3
            }
        ];
        this.fullName = nameObj.firstName + " " + nameObj.lastName;
        this.skill = skill;
    }
    Greeter2.prototype.greet = function () {
        return "Hello, my name is " + this.fullName + "!";
    };
    return Greeter2;
}());
var nameParam = { firstName: "Nagy", lastName: "Kázmér", age: "22" };
// g2.skill = "reading"; // csak olvasható!
function printGreeting(nameParam) {
    var g2 = new Greeter2(nameParam, "dancing");
    document.body.innerHTML = "<p>" + g2.greet() + "</p>";
}
printGreeting(nameParam);
var conf = {
    color: "red",
    width: 33,
    jay: "Leno",
    as: true
};
var p1 = { x: 2, y: 3 };
var a = [1, 2, 3, 4];
var ro = a;

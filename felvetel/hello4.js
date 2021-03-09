var Greeter4 = /** @class */ (function () {
    function Greeter4(nameObj, skill) {
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
    Greeter4.prototype.greet = function () {
        return "Hello, my name is " + this.fullName + "!";
    };
    return Greeter4;
}());
var nameParam4 = { firstName: "Nagy", lastName: "Kózmér", age: "22" };
var printGreeting4 = function (nameParam4) {
    var g4 = new Greeter4(nameParam4, "dancing");
    document.body.innerHTML = "<p>" + g4.greet() + "</p>";
};
printGreeting4(nameParam4);

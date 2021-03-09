var Person = /** @class */ (function () {
    function Person(username) {
        this.name = username;
    }
    Person.prototype.eat = function () {
        console.log('eat');
    };
    return Person;
}());

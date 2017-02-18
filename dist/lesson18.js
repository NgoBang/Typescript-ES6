var Person = (function () {
    function Person(name) {
        this.name = name;
        console.log(this.name + " constructor");
    }
    Person.talk = function () {
        console.log('This is static method is talk');
    };
    Person.prototype.run = function () {
        console.log('This is Person running');
    };
    return Person;
}());
var p = new Person("Tedu");
Person.talk();
p.run();
//# sourceMappingURL=lesson18.js.map
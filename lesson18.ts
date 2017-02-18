class Person {
    constructor(name) {
        this.name = name;
        console.log(this.name + " constructor");
    }

    static talk() {
        console.log('This is static method is talk');
    }

    run(){
        console.log('This is Person running');
    }
}

let p = new Person("Tedu");
Person.talk();
p.run();
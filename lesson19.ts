class Person {
    constructor(name) {
        console.log(name + ' Person constructor');
    }
    getId() {
        return 10;
    }
}
class Employee extends Person {
    constructor(name) {
        super(name);
        console.log(name +  ' Employee constructor');
    }

    getId(){
        return super.getId();
    }
}
let emp = new Employee('Bang');
console.log(emp.getId());

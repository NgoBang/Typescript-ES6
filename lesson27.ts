interface Person {
    fname: string,
    lname: string,
    age?: number
}

let p1: Person = {
    fname: "Tedu",
    lname: "Online",
    age: 2
}

let p2: Person = {
    fname: "Tedu 2",
    lname: "Online 2",
}

interface LabelledValue {
    readonly label: string
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: 'This is value' };
printLabel(myObj);
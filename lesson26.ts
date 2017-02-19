//C1
class Person {
    public fname: string;
    public lname: string;
    constructor(fname: string, lname: string) {
        this.fname = fname;
        this.lname = lname;
    }
}

//C2
class Person1 {
    constructor(public fname: string, public lname: string) {

    }
}
var p = new Person1("TEDU", "Online");
console.log(`${p.fname} ${p.lname}`);

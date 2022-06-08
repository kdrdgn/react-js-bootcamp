class Person1 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }
}


let p1 = new Person1('Kadir', 38);
let p2 = new Person1('Fallon');
console.log(p2.getName());

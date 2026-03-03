console.log("This is Object Oriented programming");


// let obj = {
//     a: "Harry",
//     2: "Shiva",
//     b: "1"
// };

// console.log(obj);

// let animal = {
//     eat: true
// };

// let rabbit = {
//     jump: true
// };

// rabbit.__proto__ = animal; //sets rabbit.[[Prototype]] = animal


class Animal {
    constructor(name) {
        this.name = name;
        console.log("Name set ho gya");
    }//ek class me ek hi constructor ho skta hai
    eats() {
        console.log("Kha rha hun re");
    }
    jumps() {
        console.log("Kood rha hun re");
    }
}

// let a = new Animal();
let a = new Animal("Bunny");

console.log(a);

class Lion extends Animal {
    constructor(name,age) {

        super(name)//extend hui hai isliye parent ke constructor ko call karega super keyword se

        this.age = age;
        console.log("Age set ho gya");
    }

    eats(){
        super.eats();// parent ke eats method ko run karega 
        console.log("Eating Fast  ----->>> this is the ex of method overriding")
    }
}

let sher = new Lion("Shera",25);

console.log(sher);

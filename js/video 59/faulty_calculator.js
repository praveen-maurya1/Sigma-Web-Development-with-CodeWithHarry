
let inp1 = 2;
let inp2 = 4;

let add = inp1 + inp2;
let sub = inp1 - inp2;
let div = inp1 / inp2;
let exp = inp1 ** inp2;

if (Math.random() < 0.1) {
    console.log("Addition of two numbers is " , inp1 - inp2);
    console.log("Subtraction of two numbers is " , inp1 / inp2);
    console.log("Multiplication of two numbers is " , inp1 + inp2);
    console.log("Division of two numbers is " , inp1 ** inp2);
}
else {
    console.log("Addition of two numbers is " , inp1 + inp2);
    console.log("Subtraction of two numbers is " , inp1 - inp2);
    console.log("Multiplication of two numbers is " , inp1 * inp2);
    console.log("Division of two numbers is " , inp1 / inp2);
}
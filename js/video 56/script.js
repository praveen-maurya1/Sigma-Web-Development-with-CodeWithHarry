console.log("This is the conditional tutorial")
let age = 5;
let grace = 2;

console.log(age + grace);
console.log(age - grace);
console.log(age / grace);
console.log(age * grace);
console.log(age % grace);
console.log(age ** grace);

if (age > 18) {
    console.log("you can drive");
}
else{
    console.log("you can't drive");
}

let mark = 50;

if (mark>=60 && mark<=100){
    console.log("Grade: A");
}
else if (mark>=50 && mark<60){
    console.log("Grade: B");
}
else if (mark>=33 && mark<50){
    console.log("Grade: C");
}
else if(mark>100){
    console.log("you have entered a invalid number");
}
else{
    console.log("You are fail");
}
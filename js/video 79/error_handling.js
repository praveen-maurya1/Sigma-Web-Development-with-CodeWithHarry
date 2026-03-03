console.log("This is error handling");

let a = parseInt(prompt("Enter first number : "));
let b = parseInt(prompt("Enter second number : "));

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Please Enter a number :");
}

let sum = a + b;
console.log("Sum is : ", sum);

// try {
//     console.log("Sum is : ", sum*x);    
// } catch (error) {
//     console.log("Ye error aaya :-  ",error);
// }

let x = 2;
function main() {
    try {
        console.log("Mul of sum and x is : ", sum * x);
        return true;
    } catch (error) {
        // console.log("Ye error aaya :-  ", error);
        console.log("Error name :-  ", error.name,"\nError msg :- ", error.message);
        return false;
    }
    finally {
        console.log("This is finally block");
    }
}


main();
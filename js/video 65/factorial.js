


// function factorial(num){
//     if (num==1 || num ==0){
//         return 1;
//     }
//     let fact = num*factorial(num-1);
//     return fact;
// }



// let a=factorial(4);

// console.log(a);

function factorial(num) {
    let arr=[];
    for (let i = 0; i < num; i++) {
        arr[i]= i+1;
    }
    const mul = (num1, num2) => {
        return num1 * num2;
    }
    return arr.reduce(mul)
}

let a = factorial(4);

console.log(a);




// let a = 7

// function factorial(number){
//    let arr = Array.from(Array(number+1).keys())//array bnane ka short method
//    let c = arr.slice(1,).reduce((a, b)=> a*b )
//    return c
// }


// function facFor(number){
//     let fac = 1;
//     for (let index = 1; index <= number; index++) {
//         fac = fac * index
//     }
//     return fac
// }
// console.log(factorial(a))
// console.log(facFor(a))
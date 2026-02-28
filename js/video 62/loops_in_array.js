let arr = [1, 2, 4, 5, 7, "raju", 2.36];

// for(let i= 0; i<arr.length; i++){
//     let element= arr[i];
//     console.log(element);
// }

// for (const element of arr) {
//     console.log(element);
// }

// for (const key in arr) {    
//     const element = arr[key];       
//     console.log(element);
// }

// arr.forEach(element => {
//     console.log(element);
// });

arr.forEach((element,index,arr) => {
    console.log(element, index, arr);
});
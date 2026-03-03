// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("raju ra ra");
//         }, 2000);
//     })
// }

// console.log("Loading Modules");

// console.log("Do something else");

// console.log("Loading Data");

// let data = getData();

// data.then((v) => {
//     console.log(data);

//     console.log("process data");

//     console.log("task 2");
// })



// async function getData() {
//         // simulate getting data from server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("raju ra ra");
//         }, 2000);
//     })
// }
// async function main() {

//     console.log("Loading Modules");

//     console.log("Do something else");

//     console.log("Loading Data");

//     let data = await getData();

//     console.log(data);

//     console.log("process data");

//     console.log("task 2");
// }
// main();




async function getData() {// ye function ek promise return krega 

    // simulate getting data from server

    // let x = fetch('https://jsonplaceholder.typicode.com/todos/1')
     
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

    let data = await x.json();
    return data;
}
async function main() {

    console.log("Loading Modules");

    console.log("Do something else");

    console.log("Loading Data");

    let data = await getData();

    console.log(data);

    console.log("process data");

    console.log("task 2");
}
main();
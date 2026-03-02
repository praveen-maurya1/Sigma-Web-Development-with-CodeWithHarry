console.log("This is promises");
// let prom1 = new Promise((resolve, reject) => {
//     let b = Math.random();
//     if (b < .4) {
//         reject("No random number was supporting you");
//     }
//     else {
//         setTimeout(() => {
//             console.log("raju raa raa");
//             resolve("ramu ramesh");
//         }, 2000);
//     }
// })

// prom1.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// })

let prom1 = new Promise((resolve, reject) => {
    let b = Math.random();
    if (b < .4) {
        reject("No random number was supporting you");
    }
    else {
        setTimeout(() => {
            console.log("raju raa raa");
            resolve("ramu ramesh");
        }, 2000);
    }
})
let prom2 = new Promise((resolve, reject) => {
    let b = Math.random();
    if (b < .4) {
        reject("No random number was supporting you 2 ");
    }
    else {
        setTimeout(() => {
            console.log("raju raa raa 2");
            resolve("ramu ramesh 2");
        }, 2000);
    }
})


let prom3=Promise.all([prom1,prom2]);

prom3.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
})
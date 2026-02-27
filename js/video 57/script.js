for (let i = 0; i < 5; i++) {
    console.log("raju rana")
}

let obj = {
    "ram": "sita",
    "raju": "rani",
    "ravan": "rekha",
    "kumbhu": "khadusi"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key, element);
}

for (const element of "object") {
    console.log(element);
}

let i = 0;
while (i < 6) {
    console.log("praveen");
    i++;
}
let a = 0;
do {
    console.log("ninnu");
    a++;
} while (a < 6);
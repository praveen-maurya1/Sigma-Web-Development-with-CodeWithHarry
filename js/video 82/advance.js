
async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(656)
        }, 1000);
    })
}
function sum(a, b, c) {
    return a + b + c;
}
(async function main() { //Immediately Invoked Function Expression (IIFE) 
    let a = await sleep();
    console.log(a);
    let b = await sleep();
    console.log(b);

    // let [x,y,...rest]=[2,5,8,9,6,63,5];
    // console.log(x,y,rest);

    let obj = {
        g: 5,
        f: 8,
        c: 9
    };

    let { g, f } = obj; 
    console.log(g, f);

    let arr=[5,6,9]//agr array me values jyada hogi to wo kisi ko assign nhi hogi

    console.log(sum(arr[0],arr[1],arr[2]));
    console.log(sum(...arr));
    
})()
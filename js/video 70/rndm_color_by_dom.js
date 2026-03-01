function getRandomColor(){
    // a+r(b-a)
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

function color_box() {
    // let colors = ["yellow", "pink", "green", "red", "blue", "aqua", "violet", "orange", "maroon", "aquamarine"];


    document.querySelectorAll(".box").forEach(element => {
        // element.style.backgroundColor = colors[Math.floor(Math.random() * 10)];
        element.style.backgroundColor = getRandomColor();
        element.style.color = getRandomColor();
    })
}

color_box();

// Harry bhai ka solution


// console.log("Script.js initializing")
// // let boxes = document.getElementsByClassName("box")
// let boxes = document.querySelector(".container").children 


// function getRandomColor(){
//     // a+r(b-a)
//     let val1 = Math.ceil(0 + Math.random()* 255);
//     let val2 = Math.ceil(0 + Math.random()* 255);
//     let val3 = Math.ceil(0 + Math.random()* 255);
//     return `rgb(${val1}, ${val2}, ${val3})`
// }
// Array.from(boxes).forEach(e=>{
//     e.style.backgroundColor = getRandomColor()
//     e.style.color = getRandomColor()
// })
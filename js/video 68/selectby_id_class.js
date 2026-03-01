console.log("praveen");

// let boxes=document.getElementsByClassName("box");
// console.log(boxes);

// boxes[2].style.backgroundColor="yellow";
// boxes[2].style.color="red";


// document.getElementById("secondbox").style.backgroundColor="aqua";
// document.getElementById("secondbox").style.color="yellow";

// document.querySelector(".box").style.backgroundColor="red";//first .box class ko select krega


console.log(document.querySelectorAll(".box"));

document.querySelectorAll(".box").forEach (e=>{
    e.style.backgroundColor="red";//querySelectorAll ek node list written krta hai jise iterate krna pdta hai kuchh bhi kaam krneke liye
})

console.log(document.getElementsByTagName("div"))
console.log(document.getElementsByTagName("meta"))

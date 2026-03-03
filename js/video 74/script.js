
// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events


let button = document.getElementById("btn");

button.addEventListener("click", () => {
    document.querySelector(".box").innerHTML = "<b>Very Good</b> aapne to click kar diya";
})

button.addEventListener("contextmenu", () => {
    alert("bom blast yeehhhh!!!....")
})

button.addEventListener("keydown", (e) => {
    // console.log(e.key, e.keyCode);
    console.log(e.key);
})

function color_box() {
    let colors = ["yellow", "pink", "green", "red", "blue", "aqua", "violet", "orange", "maroon", "aquamarine"];
    document.querySelectorAll(".box").forEach(element => {
        element.style.backgroundColor = colors[Math.floor(Math.random() * 10)];
    })
}

color_box();
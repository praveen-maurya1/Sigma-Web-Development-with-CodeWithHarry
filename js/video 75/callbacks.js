console.log("I am the hacker")
console.log("You are the good goat")

setTimeout(() => {
    console.log("I am in the Set time out")
}, 2000)

console.log("I am the hacker")

const callback = (name) => {
    console.log(`raju rastoogi ka name ${name} hai aur ye callback function ke andar hai`);
}

const load_script = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("ramesh");
    document.head.append(sc);
}
load_script("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);
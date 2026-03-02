console.log("I am the hacker")
console.log("You are the good goat")

setTimeout(() => {
    console.log("I am in the Set time out")
}, 2000)

console.log("I am the hacker")

const callback = () => {
    console.log("raju rastoogi");
}

const load_script = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("ramesh");
    document.head.append(sc);
}
load_script("https://www.bing.com/search?q=sigma+web+development+by+code+with+harry&gs_lcrp=EgRlZGdlKgcIABBFGMIDMgcIABBFGMIDMgcIARBFGMIDMgcIAhBFGMIDMgsIAxDsBxiPARjqAjILCAQQ7AcYjwEY6gIyCwgFEOwHGI8BGOoCMgsIBhDsBxiPARjqAjILCAcQ7AcYjwEY6gLSAQ4xMjU5Mjg1NDc1ajBqMagCCLACAQ&FORM=ANSPA1&PC=SCOODB", callback);
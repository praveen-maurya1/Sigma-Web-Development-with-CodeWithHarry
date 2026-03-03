
function hecker(content, a, b) {
    let cont = document.querySelector(".container");
    cont.insertAdjacentHTML("beforeend", `<div class="minicont">
            <div class="msgs">
                <span class="inihack ${a}">
                </span>
                <span class="dot ${b}">
                </span>
            </div>
        </div>`);
    let g = "." + a
    let f = "." + b
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function runLoop() {
        let inihack = document.querySelector(g);
        let str = content;
        for (let i = 0; i < str.length; i++) {
            inihack.append(str[i]);
            await delay(200);
        }
    }
    runLoop();
    let dot_location = document.querySelector(f);
    let dot = "...";
    setTimeout(() => {
        setInterval(() => {
            async function delay2() {
                for (let i = 0; i < dot.length; i++) {
                    dot_location.append(dot[i]);
                    await delay(200);
                }
                document.querySelector(f).innerHTML = "";
            }
            delay2();
        }, 1000)
    }, 3000)
}
hecker("Initializing Hacking", "a1", "b1");

setTimeout(() => {
    hecker("Reading your Files", "a2", "b2");
    setTimeout(() => {
        hecker("Password files Detected", "a3", "b3");
        setTimeout(() => {
            hecker("Sending all passwords and personal files to server", "a4", "b4");
            setTimeout(() => {
                hecker("Cleaning up", "a5", "b5");
            }, 11000)
        }, 4600)
    }, 4600)
}, 4600)

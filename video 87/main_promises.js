import fs from "fs/promises"

let a = await fs.readFile("pra.txt");
console.log(a.toString());

let b = await fs.appendFile("pra.txt", "\n \npraveen is amazing")

let c = await fs.readFile("pra.txt");
console.log(c.toString());

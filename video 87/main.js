// const fs = require("fs")
// const fs = require("fs/promises")

import fs from "fs"

// console.log(fs)

console.log("starting");
// fs.writeFileSync("text.txt","praveen is a good boy");

fs.writeFile("pra.txt","raju is not a good boy",()=>{
    console.log("done");
    fs.readFile("pra.txt",(error,data)=>{
        console.log(error,data.toString());
    });
})


fs.appendFile("pra.txt"," raju ra ra",(e,d)=>{
    console.log(d);
})

console.log("ending");
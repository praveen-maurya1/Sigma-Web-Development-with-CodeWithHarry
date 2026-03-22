// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf

// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip

import fs from "fs/promises"
import fsn from "fs"
import path from "path"

// const fs = require("fs")
// let path = "D:/P_coding/web development/video 91"
// let dir = fs.readdirSync(path)


// for (const element of dir) {
//     let fileName = (element.split(".")[1])
//     console.log(fileName)
//     if (fileName == "jpg") {
//         if (fs.existsSync(`D:/P_coding/web development/video 91/${fileName}`)) {
//             fs.renameSync(`${path}/${element}`, `${path}/jpg/${element}`)
//         }
//         else {
//             fs.mkdirSync(`D:/P_coding/web development/video 91/${fileName}`)
//             fs.renameSync(`${path}/${element}`, `${path}/jpg/${element}`)
//         }
//     }
//     else if (fileName == "png") {
//         if (fs.existsSync(`D:/P_coding/web development/video 91/${fileName}`)) {
//             fs.renameSync(`${path}/${element}`, `${path}/png/${element}`)
//         }
//         else {
//             fs.mkdirSync(`D:/P_coding/web development/video 91/${fileName}`)
//             fs.renameSync(`${path}/${element}`, `${path}/png/${element}`)
//         }
//     }
//     else if (fileName == "pdf") {
//         if (fs.existsSync(`D:/P_coding/web development/video 91/${fileName}`)) {
//             fs.renameSync(`${path}/${element}`, `${path}/pdf/${element}`)
//         }
//         else
//             fs.mkdirSync(`D:/P_coding/web development/video 91/${fileName}`)
//         fs.renameSync(`${path}/${element}`, `${path}/pdf/${element}`)
//     }
//     else if (fileName == "zip") {
//         if (fs.existsSync(`D:/P_coding/web development/video 91/${fileName}`)) {
//             fs.renameSync(`${path}/${element}`, `${path}/zip/${element}`)
//         }
//         else {
//             fs.mkdirSync(`D:/P_coding/web development/video 91/${fileName}`)
//             fs.renameSync(`${path}/${element}`, `${path}/zip/${element}`)
//         }
//     }
// }



const basepath = "D:/P_coding/web development/video 91"

let files = await fs.readdir(basepath)

for (const item of files) {
    console.log("running for ", item)
    let ext = item.split(".")[item.split(".").length - 1]
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {


        if (fsn.existsSync(path.join(basepath, ext))) {
            // Move the file to this directory if its not a js or json file
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
        else {
            fs.mkdir(ext)
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }

}


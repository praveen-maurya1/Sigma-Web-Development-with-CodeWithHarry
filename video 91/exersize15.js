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

const fs = require("fs")
let path = "D:/P_coding/web development/video 91"
let dir = fs.readdirSync(path)


for (const element of dir) {
    let fileName = (element.split(".")[1])
    console.log(fileName)
    if (fileName == "jpg") {
        if (fs.existsSync(`D:/P_coding/web development/video 91/${fileName}`)) {
            fs.renameSync(`${path}/${element}`, `${path}/jpg/${element}`)
        }
        else {
            fs.mkdirSync(`D:/P_coding/web development/video 91/${fileName}`)
            fs.renameSync(`${path}/${element}`, `${path}/jpg/${element}`)
        }
    }
    else if (fileName == "png") {
        if (fs.existsSync(`D:/P_coding/web development/video 91/${fileName}`)) {
            fs.renameSync(`${path}/${element}`, `${path}/png/${element}`)
        }
        else {
            fs.mkdirSync(`D:/P_coding/web development/video 91/${fileName}`)
            fs.renameSync(`${path}/${element}`, `${path}/png/${element}`)
        }
    }
    else if (fileName == "pdf") {
        if (fs.existsSync(`D:/P_coding/web development/video 91/${fileName}`)) {
            fs.renameSync(`${path}/${element}`, `${path}/pdf/${element}`)
        }
        else
            fs.mkdirSync(`D:/P_coding/web development/video 91/${fileName}`)
        fs.renameSync(`${path}/${element}`, `${path}/pdf/${element}`)
    }
    else if (fileName == "zip") {
        if (fs.existsSync(`D:/P_coding/web development/video 91/${fileName}`)) {
            fs.renameSync(`${path}/${element}`, `${path}/zip/${element}`)
        }
        else {
            fs.mkdirSync(`D:/P_coding/web development/video 91/${fileName}`)
            fs.renameSync(`${path}/${element}`, `${path}/zip/${element}`)
        }
    }
}


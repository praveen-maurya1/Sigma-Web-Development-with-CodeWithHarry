// Generate a dummy data in this format in a collection called employees in a db called company

// {
//     name: "Harry",
//     salary: 45000000,
//     language: "Python",
//     city: "New York",
//     isManager: true
// }

// Generate 10 such records when a button called generate data is clicked!
// Create an Express app with mongoose to acheive it
// Everytime the button is clicked, you should clear the collection 

import express from "express";
import { Employee } from "./models/exercise16.js"
import mongoose from "mongoose";


let conn = await mongoose.connect('mongodb://localhost:27017/company');

const app = express()
const port = 3000
app.set('view engine', 'ejs');

let name = ["Harry", "Praveen", "Nitin", "Deepak", "Mukesh"]
let language = ["Python", "C++", "MongoDB", "javaScript", "Java"]
let city = ["New York", "Delhi", "Gurugram", "Bikaner", "Haidrabad"]
let bool = [true, false]
const salary = () => {
    return Math.floor(Math.random() * 1000000)
}
const random = () => {
    return Math.floor(0 + Math.random() * (5 - 0))
}

app.get('/', (req, res) => {
    res.render("index")
})

app.get('/insert', async (req, res) => {
    await Employee.deleteMany({})
    let data = [];
    for (let index = 0; index < 10; index++) {
        data.push({
            name: name[random()],
            salary: salary(),
            language: language[random()],
            city: city[random()],
            isManager: bool[random()]
        })
    }
    await Employee.insertMany(data)
    res.redirect("/")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

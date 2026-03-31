import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js"
// import { title } from "node:process";

let conn = await mongoose.connect("mongodb://localhost:27017/todo")

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({
        title: "This is title",
        desc: "this is desc of this title",
        isDone: false
    })
    todo.save()
    res.send('Hello World!')
})

app.get('/about', async (req, res) => {
    let todo = await Todo.findOne({})
    res.json({ title: todo.title, desc: todo.desc })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

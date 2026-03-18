const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
const birds = require('./routes/birds')



app.use('/birds', birds)

app.use(express.static("public"))

//middleware 1
const middleware1 = function (req, res, next) {

    console.log(req.headers)
    req.harry = "\nthis is harry the great coder"
    fs.appendFileSync("log.txt", `${Date.now()} is a ${req.method}\n`)
    console.log('middleware1')
    console.log(`${Date.now()} is a ${req.method}`)
    next()
}
app.use(middleware1)

//middleware 2
const middleware2 = function (req, res, next) {
    console.log('middleware2')
    next()
}
app.use(middleware2)


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello about!')
})

app.get('/contact', (req, res) => {
    res.send('Hello contact!' + req.harry)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

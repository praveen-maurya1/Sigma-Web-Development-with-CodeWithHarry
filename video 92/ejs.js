const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName = "Adidas"
    let siteText = "search"
    let arr = [7, 8, 8, 9, 54, 5]
    res.render("index", { siteName: siteName, siteText: siteText, arr })
})

app.get('/contact', (req, res) => {
    let contact = "praveen"
    let number = "7896542358"
    res.render("conatct", { contact: contact, number: number })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/about', (req, res) => {
  res.send('About me')
})

app.get('/contact', (req, res) => {
  res.send('Contact us')
})

app.get('/blog', (req, res) => {
  res.send('Blog')
})

app.get('/blog/:slug', (req, res) => {
  //logic to fetch {slug} from DB
  console.log(req.params)//? question mark ke pehle wala
  console.log(req.query)//? question mark ke baad wala
  res.send(`Blog ${req.params.slug}`)
})

app.get('/blog/:slug/:secong', (req, res) => {
  //logic to fetch {slug} from DB
  res.send(`Blog ${req.params.slug} this is second ${req.params.secong}`)
})

app.get('/admin', (req, res) => {
  res.send('Admin page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

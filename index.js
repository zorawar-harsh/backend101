require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/twitter", (req, res) => {
  res.send("Twitter")
})
app.get("/login", (req,res) => {

  res.send("<h1>login please</h1>")

})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.get("/twitter", (req, res) => {
  
  res.send("Twitter")
})


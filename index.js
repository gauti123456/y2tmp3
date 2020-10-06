const express = require('express')

const app = express()

const PORT = 8000

app.get('/',(req,res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get('/privacypolicy',(req,res) => {
    res.sendFile(__dirname + "/privacypolicy.html")
})

app.get('/contactus',(req,res) => {
    res.sendFile(__dirname + "/contactus.html")
})

app.listen(PORT,() => {
    console.log(`App is listening on Port ${PORT}`)
})
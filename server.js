var express = require('express');
var path = require('path')

const app = express()

app.get("/", (req, res) => {
    res.end("<h1>Homepage</h1>")
    console.log('This is homepage.')
})

app.get("/:sym", (req, res) => {
    const sym = req.params.sym
    res.readFile(path.join(__dirname, "HTML", sym))
    console.log(path.join(__dirname, "HTML", sym));
    res.status(200).end()
    // res.end("/.*\.js/")
})

app.listen(2000, (req, res) => console.log("listening..."))
var express = require("express");
var app = express();

app.get("/", (req, res) => {

    var items = [
        { name: 'node.js', url: 'https://nodejs.org/en/' },
        { name: 'ejs', url: 'https://ejs.co' },
        { name: 'expressjs', url: 'https://expressjs.com' },
    ];

    res.render("pages/admin", { title: "Admin", items })
})

app.get("/altas", (req, res) => {
    res.send("Bienvenido a Admin/Altas")
})

app.get("/bajas", (req, res) => {
    res.send("Bienvenido a Admin/Bajas")
})

module.exports = app;
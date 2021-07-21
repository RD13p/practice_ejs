var express = require("express");
var app = express();

app.get("/", (req, res) => {
    //res.send("Bienvenido a Home")
    res.render('pages/home', { title: 'Home' });
});

module.exports = app;
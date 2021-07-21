var config = require("./config");
var express = require("express");
var morgan = require("morgan");

var app = express();
app.use(morgan('dev'));

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var index = require("./routes/index");
var admin = require("./routes/admin");
var api = require("./routes/api");


app.use('/', index);
app.use('/admin', admin);


app.listen(config.app.port, () => {
    console.log("Server running on port " + config.app.port)
})
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 8800;
var database = require('./db/database');
var morgan = require('morgan');
var bodyParser = require('body-parser');

mongoose.connect(database.localUrl);

// set the static files location
app.use('/js', express.static(__dirname + './../public/js'));
app.use('/css', express.static(__dirname + './../public/css'));
app.use('/image', express.static(__dirname + './../public/image'));
app.use('/shopviews', express.static(__dirname + './../public/shopviews'));

app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.json()); // parse application/json

require('./routes.js')(app);

app.listen(port, () => {
    console.log("Started up at port " + port);
});

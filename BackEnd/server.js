var express = require('express');
var bodyParser = require('body-parser');
var db = require('./data/db');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));




app.listen('3000');
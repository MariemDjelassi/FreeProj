var express = require('express');
var bodyParser = require('body-parser');
var db = require('./data/db');
var passport = require('./config/passport');
var cors = require('cors');

var login = require('./routes/api/auth');
var register = require('./routes/api/user');
var CompApi = require('./routes/api/company');
var FreelApi = require('./routes/api/freelancer');
var ProjApi = require('./routes/api/project');

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(cors());

app.use('/auth', login);
app.use('/users', register);
app.use('/Company', CompApi);
app.use('/Freelancer', FreelApi);
app.use('/Project', ProjApi);


// app.listen('3000');
var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port)});
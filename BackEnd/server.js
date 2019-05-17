var express = require('express');
var bodyParser = require('body-parser');
var db = require('./data/db');
var passport = require('./config/passport');
var cors = require('cors');
var path = require('path');
var http = require('http');
var socketIO = require('socket.io');

var login = require('./routes/api/auth');
var register = require('./routes/api/user');
var uploadApi = require('./routes/api/files');
var CompApi = require('./routes/api/company');
var FreelApi = require('./routes/api/freelancer');
var ProjApi = require('./routes/api/project');
var MailApi = require('./routes/api/mail');
var ChatApi = require('./routes/api/chat');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(cors());

app.use('/Auth', login);
app.use('/Users', register);
app.use('/Upload', uploadApi);
app.use('/Company', CompApi);
app.use('/Freelancer', FreelApi);
app.use('/Project', ProjApi);
app.use('/Mail', MailApi);
app.use('/Chat', ChatApi);

var Server = http.createServer(app);  
var io = socketIO.listen(Server);

app.set('io', io);


// app.listen('3000');
var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port)
});

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
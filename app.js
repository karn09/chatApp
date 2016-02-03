var express = require('express');
var app = express();
var swig = require('swig');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var socketio = require('socket.io');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views/');

app.use(express.static('public'));



swig.setDefaults({cache: false});

app.use(morgan('dev'));

var server = app.listen(3000);
var io = socketio.listen(server);
var routes = require('./routes/');
app.use('/', routes(io));
var express = require('express');
var app = express();
var swig = require('swig');
var morgan = require('morgan');



var server = app.listen(3000);
var socketio = require('socket.io');


app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views/');
swig.setDefaults({cache: false});

app.use(morgan('dev'));

var io = socketio.listen(server);
app.use(express.static('public'));

var routes = require('./routes/');
app.use('/', routes(io));
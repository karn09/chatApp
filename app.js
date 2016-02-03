var express = require('express');
var app = express();
var swig = require('swig');

var iosockets = require('socket.io');

app.listen(3000);

app.use(express.static('public'));

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views/');
swig.setDefaults({cache: false});

app.use(morgan('dev'));

var io = socketio.listen(server);

var routes = require('./routes/');
app.use('/', routes(io));
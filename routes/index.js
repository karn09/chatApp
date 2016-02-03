var express = require('express');
var router = express.router();
var chatBank = require('../chatBank');

module.exports = function(io) {

	router.post('/chat', function(req, res) {
		var username = 'you';
		var text = req.params.chat;
		chatBank.add(username, text);
		io.sockets.emit('new_chat', { name: username, text: text });
        res.redirect('/');
	});

    router.get('/', function(req, res) {
        var chats =
            res.render('layout', {
                title: 'Super Amazing Chat Room',
            });
    });



    return router;
}
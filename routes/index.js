var express = require('express');
var router = express.Router();
var chatBank = require('../chatBank');

module.exports = function(io) {

	router.post('/chat/:username', function(req, res) {
		//console.log(req.body);
		var username = req.params.username;
		var text = req.body.chat;
		chatBank.add(username, text);
		//console.log(chatBank.list());
		io.sockets.emit('new_chat', { name: username, text: text });
        res.redirect('/chat/' + username);
	});

	router.post('/enter', function(req, res) {
		var username = req.body.name;
		chatBank.addUser(username);
		io.sockets.emit('user_joined', username);
		res.redirect('/chat/' + username);
	});

    router.get('/', function(req, res) {
            res.render('index', {
                title: 'Super Amazing Chat Room'
                
            });
    });

    router.get('/chat/:username', function(req, res) {
    	var chats = chatBank.list();
    	var users = chatBank.userList();

    	res.render('chat', { 
    			title: 'Super Amazing Chat Room',
                chatBank: chats,
                username: req.params.username,
                users: users
            });
    })



    return router;
};
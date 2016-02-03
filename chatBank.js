data = [];
users = [];
var _ = require('lodash');

function add(name, chatText) {
	data.push({name: name, chatText: chatText});
}

function addUser(name) {
	users.push(name);
}

function list() {
	return _.cloneDeep(data);
}

function userList() {
	return _.cloneDeep(users);
}

module.exports = {add: add, list: list, userList: userList, addUser: addUser};
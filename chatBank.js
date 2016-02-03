data = [];
var _ = require('lodash');

function add(name, chatText) {
	data.push({name: name, chatText: chatText});
}

function list(data) {
	return _.cloneDeep(data);
}

module.exports = {add: add, list:list};
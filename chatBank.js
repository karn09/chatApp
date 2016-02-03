data = [];
var _ = require('lodash');

function add(name, chatText) {
	data.push({name: name, chatText: chatText});
	//console.log (data);
}

function list() {
	return _.cloneDeep(data);
}

module.exports = {add: add, list:list};
const BookController = {};
const Model = require('../models/Book.js');
const moment = require('moment');

BookController.create = function(request, response) {
	var name = request.body.name;
	var author = request.body.author;

	Model.create(name, author, function(error, data) {
		if(error) {
			return response.status(400).send({message:error,timestamp:moment().format()});
		}

		return response.status(200).send({message:data,timestamp:moment().format()});
	});
}

module.exports = BookController;
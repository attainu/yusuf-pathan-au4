const BookController = {};
const Model = require('../models/Book.js');

BookController.search = function(request, response) {
	var language = request.query.language;
    
    Model.search(language, function (result) {

        if (typeof language === "undefined") {
            return response.render('homepage');
        }

        console.log(result.result);
        return response.render('homepage', {
            title: "Book Search",
            result: result.result
        })
    })
}

module.exports = BookController;
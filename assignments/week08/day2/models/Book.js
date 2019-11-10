const Book = {};
var bookdetails = [];

Book.create = function(bookName, authorName, callback) {
	
	// Validate the required data before proceeding with main operation
	if(!bookName) {
		return callback("Error! Book name is required");
	}

	if(!authorName) {
		return callback("Error! Author name is required");
	}

	for(var i = 0; i < bookdetails.length; i++){
		if(bookName === bookdetails[i].bookName){
			return callback("Error! Book name is already there");
		}
	}

	console.log("Created Successfully");
	bookdetails.push({bookName:bookName,authorName:authorName})
	console.log(bookdetails);

	// Spoofing the database call with a delay of 500 milliseconds
	setTimeout(function() {
		return callback(null, "Success! Book has been stored");		
	}, 500);
}

Book.update = function(bookName, authorName, callback) {
	if(!bookName) {
		return callback("Error! Book name is required");
	}	

	if(!authorName) {
		return callback("Error! Author name is required");
	}

	if(bookdetails.length < 1){
		return callback("Error! please first create a book");
	}

	for(var i = 0; i < bookdetails.length; i++){
		if(bookdetails[i].bookName === bookName){
			bookdetails[i].authorName = authorName;
		}
		else{
			return callback("Error! no book of this name is found");
		}
	}

	console.log("Author updated Successfully");
	console.log(bookdetails);

	// Spoofing the database call with a delay of 500 milliseconds
	setTimeout(function() {
		return callback(null, "Success! author has been updated");		
	}, 500);
}

Book.delete = function(bookName, authorName, callback) {
	if(!bookName) {
		return callback("Error! Book name is required");
	}

	if(bookdetails.length < 1){
		return callback("Error! please first create a book");
	}

	for(var i = 0; i < bookdetails.length; i++){
		if(bookdetails[i].bookName === bookName){
			bookdetails.splice(i,1);
		}
		else{
			return callback("Error! no book of this name is found");
		}
	}

	console.log(bookdetails);
	console.log("Deleted Successfully");

	// Spoofing the database call with a delay of 500 milliseconds
	setTimeout(function() {
		return callback(null, "Success! Book has been deleted");		
	}, 500);
}

module.exports = Book;
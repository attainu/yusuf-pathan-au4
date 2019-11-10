const Book = {};
var bookdetails = [];

Book.create = function(bookName, authorName, callback) {
	
	// Validate the required data before proceeding with main operation
	if(!bookName) {
		return callback({
			status: false,
			message: "Error! Book name is required"
	});
	}

	if(!authorName) {
		return callback({
				status: false,
				message: "Error! Author name is required"
		});
	}

	for(var i = 0; i < bookdetails.length; i++){
		if(bookName === bookdetails[i].bookName){
			return callback({
				status: false,
				message: "Error! Book name is already there"});
		}
	}

	console.log("Created Successfully");
	bookdetails.push({bookName:bookName,authorName:authorName})
	console.log(bookdetails);

	// Spoofing the database call with a delay of 500 milliseconds
	setTimeout(function() {
		return callback(null, {
			status: true,
			message: "Success! Book has been stored"});		
	}, 500);
}

module.exports = Book;
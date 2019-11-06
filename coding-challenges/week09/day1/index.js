const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const PORT = 9090;

app.use(express.json());
app.use(express.urlencoded());

// Import Book model
var bookRoute = require('./routes/book.js');

// Register Handlebars as view engine
app.engine('.handlebars', exphbs());
app.set('view engine', '.handlebars');

// Add routes here 
app.get('/', bookRoute.search);


// Start the app on pre defined port number
app.listen(PORT, function() {
	console.log("Application has started and running on port: ", PORT);
}).on('error', function(error) {
	console.log("Unable to start app. Error >>>>", error);
});
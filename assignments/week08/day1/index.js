
const express = require('express'); // function
const app = express();
const exphbs = require('express-handlebars');
const PORT = 9000;

app.use(express.json());
app.use(express.urlencoded());
app.use('/static', express.static('public'));

// Configure Handlebars
const hbs = exphbs.create({
	extname: '.hbs'
});

// Import Book model
var bookRoute = require('./routes/book.js');

// Register Handlebars as view engine
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

// Add routes here 
app.post('/create', bookRoute.create);
app.get('/get', bookRoute.get);
app.put('/update', bookRoute.update);
app.delete('/delete', bookRoute.delete);

// Start the app on pre defined port number
app.listen(PORT, function() {
	console.log("Application has started and running on port: ", PORT);
}).on('error', function(error) {
	console.log("Unable to start app. Error >>>>", error);
});

const express = require('express'); // function
const app = express();
const session = require('express-session');
const PORT = 9000;

app.use(express.json());
app.use(express.urlencoded());
app.use('/static', express.static('public'));

app.use(session({
	name: 'yusuf',
	secret: 'fdwfv34t34#^#%^@#%^',
	resave: true,
	saveUninitialized: true,
	cookie: {
		httpOnly: true,
		maxAge: 20000,
		path: '/',
		sameSite: true,
		secure: false
	}
}))

// Import Book model
var bookRoute = require('./routes/book.js');
var authRoute = require('./routes/auth.js');

app.use(authRoute.checklogin);

// Add routes here 
app.post('/create', bookRoute.create);
app.post('/login', authRoute.login);
app.post('/logout', authRoute.logout);

app.listen(PORT, function() {
	console.log("Application has started and running on port: ", PORT);
}).on('error', function(error) {
	console.log("Unable to start app. Error >>>>", error);
});
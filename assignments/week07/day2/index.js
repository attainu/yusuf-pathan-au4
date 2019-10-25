const express = require('express'); // function
const app = express();
const PORT = 9090;

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('public'));

app.get('/',function (req,res) {
    res.sendFile(__dirname+'/index.html');
})

app.post('/add', function(req, res) {
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    var output = parseInt(num1) + parseInt(num2);
    res.json({result:output});	
});

app.post('/sub', function(req, res) {
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    var output = parseInt(num1) - parseInt(num2);
    res.json({result:output});	
});

app.post('/mul', function(req, res) {
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    var output = parseInt(num1) * parseInt(num2);
    res.json({result:output});	
});

app.post('/div', function(req, res) {
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    var output = parseInt(num1) / parseInt(num2);
    res.json({result:output});	
});

app.listen(PORT, function() {
	console.log("Application has started and running on port: ", PORT);
}).on('error', function(error) {
	console.log("Unable to start app. Error >>>>", error);
})
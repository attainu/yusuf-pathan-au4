const express = require('express'); // function
const app = express();
const PORT = 9090;

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('public'));

app.get('/login',function (req,res) {
    res.sendFile(__dirname+'/login.html');
})

app.post('/login', function(req, res,next) {
    var username = req.body.username;
    var password = req.body.password;
    if(username != '' || password != ''){
        next();
    }
    else{
        res.status(400).send("Please enter some values");
        console.log("Please enter some values");
        return;
    }
}, function(req,res){
    var output;
    var username = req.body.username;
    var password = req.body.password;
    if(username.toLowerCase() === 'yusuf' && password === '1234'){
        output = "logged in successfully";
    }
    else{
        output = "incorrect credentials";
    }
    res.json({result:output});
});

app.get('/register',function (req,res) {
    res.sendFile(__dirname+'/register.html');
});

app.post('/register', function(req, res,next) {
    var username = req.body.username;
    var password = req.body.password;
    var cnfpassword = req.body.cnfpassword;
    if(username != '' || password != '' || cnfpassword != ''){
        next();
    }
    else{
        res.status(400).send("Please enter some values");
        console.log("Please enter some values");
        return;
    }
}, function(req,res){
    var output;
    var cnfpassword = req.body.cnfpassword;
    var password = req.body.password;
    if(cnfpassword === password){
        output = "registered successfully";
        
        
    }
    else{
        output = "password mismatches";
        
    }
    res.json({result:output});
});

app.listen(PORT, function() {
	console.log("Application has started and running on port: ", PORT);
}).on('error', function(error) {
	console.log("Unable to start app. Error >>>>", error);
})
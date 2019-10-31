const express = require('express');
const app = express();
const port = 9090;

app.use(express.json());
app.use(express.urlencoded());

app.post('/add',function(req, res){
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    var result = num1 + num2;
    res.json({
        "num1" : num1,
        "num2" : num2,
        "result" : result
    })
});

app.post('/sub',function(req, res){
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    var result = num1 - num2;
    res.json({
        "num1" : num1,
        "num2" : num2,
        "result" : result
    })
});

app.post('/mul',function(req, res){
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    var result = num1 * num2;
    res.json({
        "num1" : num1,
        "num2" : num2,
        "result" : result
    })
});

app.post('/div',function(req, res){
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    var result = num1 / num2;
    res.json({
        "num1" : num1,
        "num2" : num2,
        "result" : result
    })
});

app.listen(port, function () {
    console.log("Application has started and running on",port);
}).on('error', function (error) {
    console.log("Unable to start app due to ".error);
})
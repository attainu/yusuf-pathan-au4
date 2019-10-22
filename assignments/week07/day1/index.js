const chalk = require('chalk');
const express = require('express');
const app = express();
const port = 9090;

app.get('/homepage', function (req, res) {
    res.status(200).send("This is home page");
})

app.get('/about-us', function (req, res) {
    res.status(200).send("This is About Us page");
})

app.listen(port,function(){
    console.log("Application has started on port",(chalk.yellow(port)));
});
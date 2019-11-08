const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const MongoClient = require('mongodb').MongoClient;
const PORT = 9090;
const csvFilePath='./data.csv';
const csv=require('csvtojson')

// app.use(express.json());
// app.use(express.urlencoded());

//csv to json
// var jsonObj;
// csv()
// .fromFile(csvFilePath)
// .then((jsonObj)=>{
//     console.log(jsonObj); 
// })

// Register Handlebars as view engine
app.engine('.handlebars', exphbs());
app.set('view engine', '.handlebars');

// Database connection
var db = null;
var url = 'mongodb://localhost:27017';
MongoClient.connect(url, function (error, client) {
    if(error){
        throw error;
    }    

    db = client.db('eagle-yusuf-pathan');
    
});
console.log("Connected Succesfully");

var data;
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    data = jsonObj;
    console.log(jsonObj);
    
    /**
     * [
     * 	{a:"1", b:"2", c:"3"},
     * 	{a:"4", b:"5". c:"6"}
     * ]
     */ 
})
console.log(data);

var data = jsonObj;
    console.log(jsonObj);
    console.log(data);
    var collection = db.collection('users');

    collection.insertOne(data, function(error){
        if(error){
            console.log(error);
            return res.send({
                status:false,
                message:"Failed to add the data"
            })
        }
            console.log(data);
            return res.send({
                status:true,
                message:"Added data successfully"
            })
    })

// Add routes here 
app.get('/users', function(req, res){
    res.render('homepage')
})

app.listen(PORT, function() {
	console.log("Application has started and running on port: ", PORT);
}).on('error', function(error) {
	console.log("Unable to start app. Error >>>>", error);
});
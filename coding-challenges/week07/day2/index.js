const express = require('express'); // function
const app = express();
const PORT = 9090;

app.get('/', function(req, res) {
    var array =["Ananya", "Anamika", "Nisha", "Arkesh" ,"Nishant", "Nishank", "Ansal", "Gopi" ];
    var input = req.query.input.toLowerCase();
    var output = [];
    for(var i = 0; i < array.length; i++){
        if(array[i].toLowerCase().startsWith(input)){
            output.push(array[i]);
        }
    }
    if(output == ''){
        res.send(JSON.stringify(output));
        return;
    }
    else{
        res.send(JSON.stringify(output));
        return;
    }	
});


app.listen(PORT, function() {
	console.log("Application has started and running on port: ", PORT);
}).on('error', function(error) {
	console.log("Unable to start app. Error >>>>", error);
})
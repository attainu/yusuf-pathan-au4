const http = require("http");
const app = require("./app");


let server = http.createServer(app);
server.listen(5000, function() {
    console.log("Connection is ready");
});
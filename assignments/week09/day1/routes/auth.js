const AuthController = {};
const Model = require('../models/Auth.js');

AuthController.login = function(request, response){
    var username = request.body.username;
    var password = request.body.password;

    Model.login(username, password, request, function(error,data){
        if(error){
            return response.send({message:error});
        }

        return response.send({message:data});
    })
   
}

AuthController.logout = function(request,response){
    var session = request.session;

    Model.logout(session, function(data){
        return response.send({data});
    })
}

AuthController.checklogin = function (request, response, next) {
    var session = request.session.user
    var url = request.originalUrl;

    if(url === '/login'){
        return next();
    }

    if(typeof session === "undefined"){
        return response.send({
            status: false,
            message: "unauthorized request"
        })
    }
    else{
        if(url === '/logout'){
            response.clearCookie('yusuf');
        }
        return next();
    }
}

module.exports = AuthController;
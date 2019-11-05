const Auth = {};
var users = []

Auth.login = function(username, password, request, callback){
    users = [{
        username: "yusuf",
        password: "123456Y"
    },{
        username: "pathan",
        password: "abc789"
    }];

    var user = null;

    users.forEach(function (value, index) {
        if(value.username === username){
            if(value.password === password){
                user = value;
            }
        }
    }); 
     
    if(!user){
        return callback({
            status: false,
            message: "invalid username or password"
        })
    }
    
    console.log(request.session);
    
    request.session.user = user;
    
    return callback(null,{
        status: true,
        message: "successfully logged in"
    });
}

Auth.logout = function(session, callback){
    session.destroy();
    console.log("logged out");

    return callback({
        status: true,
        message: "logged out"
    })
}

module.exports = Auth;

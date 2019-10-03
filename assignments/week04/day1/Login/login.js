document.querySelector("#login").addEventListener("click",function (email,password) {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(email == "" || password == ""){
        alert("please enter some value");
        return;
    }    
    if(email === 'yusuf' && password === '12345678'){
        alert("Login successful");
    }
    else{
        alert("Wrong Credentials")
    }
})
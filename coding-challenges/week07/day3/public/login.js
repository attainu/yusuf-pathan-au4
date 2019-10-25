$(document).ready(function() {
    $('#login').on('click',function (username,password) {
        var username = $('#username').val();
        var password = $('#password').val();
    
    $.ajax({
        method:"POST",
        url:"/login",
        data:{"username":username,"password":password},
        dataType:'json',
        success:function(data){
            alert("Result : " + data.result);
        },
        error:function(error){
            console.log(error);
        }
        })
    });

    
})
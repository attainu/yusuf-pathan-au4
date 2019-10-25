$(document).ready(function() {
    $('#register').on('click',function (username,password,cnfpassword) {
        var username = $('#username').val();
        var password = $('#password').val();
        var cnfpassword = $('#cnfpassword').val();
    $.ajax({
        method:"POST",
        url:"/register",
        data:{"username":username,"password":password,"cnfpassword":cnfpassword},
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
$(document).ready(function() {
    $('#add').on('click',function (num1,num2) {
        num1 = $('#num1').val();
        num2 = $('#num2').val();
    
    $.ajax({
        method:"POST",
        url:"/add",
        data:{"num1":num1,"num2":num2},
        dataType:'json',
        success:function(data){
            alert("Result : " + data.result);
        },
        error:function(error){
            console.log(error);
        }
    })
});

$('#sub').on('click',function (num1,num2) {
    num1 = $('#num1').val();
    num2 = $('#num2').val();

$.ajax({
    method:"POST",
    url:"/sub",
    data:{"num1":num1,"num2":num2},
    dataType:'json',
    success:function(data){
        alert("Result : " + data.result);
    },
    error:function(error){
        console.log(error);
    }
})
});

$('#mul').on('click',function (num1,num2) {
    num1 = $('#num1').val();
    num2 = $('#num2').val();

$.ajax({
    method:"POST",
    url:"/mul",
    data:{"num1":num1,"num2":num2},
    dataType:'json',
    success:function(data){
        alert("Result : " + data.result);
    },
    error:function(error){
        console.log(error);
    }
})
});

$('#div').on('click',function (num1,num2) {
    num1 = $('#num1').val();
    num2 = $('#num2').val();

$.ajax({
    method:"POST",
    url:"/div",
    data:{"num1":num1,"num2":num2},
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
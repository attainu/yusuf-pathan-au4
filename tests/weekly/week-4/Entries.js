$('.alert').hide();
$('table').hide();
$(document).ready(function () {
    var ar = [];
    $('.btn').on('click',function () {
        $('.alert').hide();
        var name = $('#name').val();
        var age = parseInt($('#age').val());
        
        if (name == '' || name == null){
            $('.alert').removeClass().addClass("alert alert-warning").text("Please enter a value").show();
            return;
        }

        if(isNaN(age)){
            $('.alert').removeClass().addClass("alert alert-warning").text("Please enter some age").show();
            return;
        }

        if(age<15){
            $('.alert').removeClass().addClass("alert alert-warning").text("Sorry your data cannot be added").show();
            return;
        }

        if(ar.length > 0){
            for(var i = 0; i < ar.length; i++){
                if(ar[i].name === name){
                    $('.alert').removeClass().addClass("alert alert-warning").text("Value already exists").show();
                    return;
                }
            }
            ar.push({"name":name,"age":age});
        }
        else{
            ar = [{"name":name,"age":age}];
        }
        console.log(ar);
        // var array = [{"name":name,"age":age}];
        // console.log(array[0].name);
        // console.log(array);
        // array[0].name="yus";
        // console.log(array[0].name);
        // console.log(array);
        $('table').show();
        $('tbody').html("");
        for(var i = 0; i < ar.length; i++){
            $('tbody').append('<tr><td><strong>'+ar[i].name+'</strong></td><td><i>'+ar[i].age+'</i></td></tr>');
        }
        $('.alert').removeClass().addClass("alert alert-success").text("Value added successfully").show();
    });
});
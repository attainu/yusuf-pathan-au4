$('.alert').hide();
$(document).ready(function () {
    var ar = [];
    $('.btn').on('click',function () {
        $('.alert').hide();
        var name = $('#name').val();
        var age = parseInt($('#age').val());
        
        if (name == '' || name == null){
            $('.alert').text("enter a valid value").show();
            return;
        }

        if(isNaN(age) || age < 15){
            $('.alert').text("enter a value").show();
            return;
        }

        if(ar.length > 0){
            for(var i = 0; i < ar.length; i++){
                if(ar[i].name === name){
                    $('.alert').text("Value already exists").show();
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
        $('ul').html("");
        for(var i = 0; i < ar.length; i++){
            $('ul').append('<li class="list-group-item">Name:<strong>'+ar[i].name+'</strong>  Age:<i>'+ar[i].age+'</i></li>');
        }
    });
});
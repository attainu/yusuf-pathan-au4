$(document).ready(function() {
    $.ajax({
        method:"GET",
        url:"cities.json",
        success:function(response) {
                var value = 'a';
                var ar = [];
                    for(var i = 0; i < response.length; i++){
                    var city = (response[i].name);
                    if(city.charAt(0).toLowerCase() === value){
                        ar.push(city);
                    }
                }
                console.log(ar);
        },
        error:function(error) {
            console.log(error);
        }    
    });
});

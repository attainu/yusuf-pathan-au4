var ar=[];
    $.ajax({
        method:"GET",
        url:"cities.json",
        datatype:'json',
        success:function(data) {
                // var data = JSON.parse(data);
                //console.log(data);
            for(var i=0;i<data.length;i++){
            ar.push(data[i]);
            }
        },
        error:function(error) {
            console.log(error);
        }    
    });
// console.log(ar);
// $('<p/>').text(ar[1]).appendTo('.row');
$('#check').on('click',function() {    
    var value = $('#letter').val();
    $('ul').html("");
        for(var i = 0; i < ar.length; i++){
        var city = (ar[i].name);
        if(city.charAt(0).toLowerCase() == value){
            $('ul').append('<li class="list-group-item">'+city+'</li>')
        }
    }
});

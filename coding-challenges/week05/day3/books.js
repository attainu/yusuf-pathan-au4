$(document).ready(function() {
    $.ajax({
        url:"https://raw.githubusercontent.com/attainu/attainu-eagle/master/coding-challenges/week-5/day-3/books.json",
        method:"GET",
        success:function(data) {
            var data = JSON.parse(data);
            console.log(data);
            $('#search').on('click',function() {
                $('#data').html("");
                $('<table/>').appendTo('#data');
                $('table').addClass("table table-dark");
                
                // var thead =('<thead><tr><th>Title</th><th>Author</th><th>Country</th><th>Language</th><th>Link</th><th>Pages</th><th>Year</th></tr></thead>');
                $('<tr><th>Title</th><th>Author</th><th>Country</th><th>Language</th><th>Link</th><th>Pages</th><th>Year</th></tr>').appendTo('table');
                // $('<tbody/>').appendTo('table');
                var input = $('#input').val()
                // $('tbody').empty();
                for(var i = 0; i < data.length; i++){
                    if(input.toLowerCase() === data[i].language.toLowerCase()){
                        $('<tr><td>'+data[i].title+'</td><td>'+data[i].author+'</td><td>'+data[i].country+'</td><td>'+data[i].language+'</td><td><a href=">'+data[i].link+'">'+data[i].link+'</a></td><td>'+data[i].pages+'</td><td>'+data[i].year+'</td></tr>').appendTo('table');
                    }
                }
                return;
            })
        },
        error:function(error) {
            console.log(error);
		}
    });
    
});
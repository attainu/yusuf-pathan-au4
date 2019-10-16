$(document).ready(function() {
    $.ajax({
        url:"details.json",
        method:"GET",
        success:function (data) {
            // var data = JSON.parse(data);
            console.log(data);

            var appName = data.appName;
            $('h1').text(appName);

            for(var i = 0; i < data.headers.length; i++){
                $('#header').append('<th id = "' + data.headers[i] + '">'+data.headers[i]+'</th>');
            }

            for(var i = 0; i < data.users.length; i++){
                $('tbody').append('<tr> <td>' + (i+1) + '</td> <td>' + data.users[i].name + '</td> <td>' + data.users[i].email + '</td> <td>' + data.users[i].country + '</td> <td>' + data.users[i].salary + '</td> <td> <button class = "btn btn-danger">Delete</button> </td> <tr>');
            }

            var ar=[];
            $('#Salary').on('click',function () {
                $('tbody').remove();
                for(i = 0; i < data.users.length; i++){
                    ar.push(data.users[i].salary);
                }
                var sorted = ar.sort();
                console.log(sorted);
                for(var i = 38; i >= 0; i--){
                    for(j = 0; j < data.users.length; j++){
                        if(ar[i] == data.users[j].salary){
                            $('tbody').append('<tr> <td>' + i + '</td> <td>' + data.users[j].name + '</td> <td>' + data.users[j].email + '</td> <td>' + data.users[j].country + '</td> <td>' + data.users[j].salary + '</td> <td> <button class = "btn btn-danger">Delete</button> </td> <tr>');
                        }
                    }
                }
            })

            $('.btn').on('click',function () {
                $(this).closest('tr').remove();
            })
        },
        error:function(error) {
            console.log(error);
		}
        
    })
})
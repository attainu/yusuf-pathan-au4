function getimage(data) {
    $.get("https://dog.ceo/api/breeds/image/random",function(data) {
        data = data.message;
        console.log(data);
        $('#image').attr("src",data);
        
    });    
}
getimage();

$(document).ready(function(){
    $('.btn').on('click',function () {
        var data = getimage(data);
        $('#image').attr("src",data);
    });
});
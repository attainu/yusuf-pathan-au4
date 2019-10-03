$(document).ready(function() {
    $.ajax({
        method:"GET",
        url:"quiz.json",
        success:function(response) {
            var randomNumber = Math.floor( Math.random() * 10 );
            var ques = response[randomNumber].question;
            var ans = response[randomNumber].answer;
            console.log(ques);
            console.log(ans);
            $('#questions').text(ques).appendTo("#questions");
            var timer = setInterval(function() {

                var count = parseInt($('#timer').html());
                if (count !== 0) {
                   $('#timer').html(count - 1);
                } else {
                    $('#check').attr('disabled',true)
                    clearInterval(timer);
                    alert("time is over");
                }
              }, 1000);
        
              $('#check').on('click',function () {
                if($('#ans').val() === ans){
                    console.log($('#ans').val());
                    alert("correct answer \n please refresh page for new question");
                    clearInterval(timer);
                }
                else{
                    alert("incorrect answer \n please try again");
                }
            })
        },
        error:function(error) {
            console.log(error);
        }
        
    });
});
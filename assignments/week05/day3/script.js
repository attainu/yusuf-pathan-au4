$(document).ready(function() {
    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen(); 
          }
        }
    }
    console.log(document.documentElement);
    $('#image').on('click',function () {
        toggleFullScreen();
    })
})
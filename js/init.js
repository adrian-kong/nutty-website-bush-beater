$( document ).ready(function(){
 $(".parallax").parallax();//parallax init
 $('.carousel').carousel();
});

autoplay()   
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}
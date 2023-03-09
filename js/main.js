$(document).ready(function(){
    $('.mobile-nav').click(function(){
        $('nav').slideDown(1000);
    })
    $('.close').click(function(){
        $('nav').slideUp(1000);
    })
})
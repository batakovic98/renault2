$(document).ready(function(){
   
    $('#cenUl').css({display: "none",left: "auto"});
    $('#cenLi').hover(function() {
    $(this).find('ul').stop(true, true).slideDown('fast');
        }, function() {
        $(this).find('ul').stop(true,true).fadeOut('fast');
    });

    $("#header ul li a").hover(function(){
        $(this).css({color:"white"});
    },
    function(){
        $(this).css({color:"black"});
    });

    $(".tekst a").hover(function(){
        $(this).css({color:"white"});
    },
    function(){
        $(this).css({color:"black"});
    });

    $(".tekst ").hover(function(){
        $(this).css({backgroundColor:"rgba(140,140,140,0.8)"});
    },
    function(){
        $(this).css({backgroundColor:"rgba(170,170,170,0.8)"});
    });

    $('#scrollToTop').click(function () {
        var offset = 220;
        var duration = 500;
        jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('#scrollToTop').fadeIn(duration);
            } else {
                jQuery('#scrollToTop').fadeOut(duration);
            }
        });
    
        $('html').animate({
            scrollTop: 0
        }, 2000);
    });


})


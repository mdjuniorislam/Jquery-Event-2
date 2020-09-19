$(document).ready(function(){
    $(".click button").click(function(){
        $('.click h2').toggle(2000);
    });

});

$(document).ready(function(){
    $(".left button").click(function(){
        $('.submit p').hide(2000)
        });
       $('.left button').click(function(){
$('.left button').hide(2000);
       });

         $(".right button").click(function(){
        $('.submit p').show(2000)
        $('.right button').click(function(){
            $('.left button').show(2000);
                   });

});
});

$(document).ready(function(){
    $(".left1 button").mouseenter(function(){
        $('.text-color h2').css({"background-color":"#FF61A5" ,
        "color":"#fff"
    
    
    });
    });

    $(".right1 button").mouseleave(function(){
        $('.text-color h2').css({"background-color":"#FF61A5" ,
        "color":"#fff"
    
    
    });
    });


});
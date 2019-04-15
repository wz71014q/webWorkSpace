$(function () {
    $("#move li").mouseenter(function () {
        $(this).find('i').animate({top:"-95px",opacity:0.6},300,function () {
            $(this).css({top:"30px"});
            $(this).animate({top:"0px",opacity:1},300);
        });
    });
});


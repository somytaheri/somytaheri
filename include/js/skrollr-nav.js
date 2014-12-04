
var pageHeight = $("#home").height();
var scrollAnimation = function(y,t){
    $('html, body').animate({scrollTop : pageHeight*y},1000*t,"swing");
    return false;
};
var y1;
var scrollTime = function(){
    var scrollPosition = $(window).scrollTop();
     y1=scrollPosition/pageHeight;
    return y1;
};

$("#navHome").click(function(){
    scrollTime();
    var t = Math.abs(0-y1);
    scrollAnimation(0,t);
    console.log(t);
});
$("#navProfile").click(function(){
    scrollTime();
    var t = Math.abs(2-y1);
    scrollAnimation(2,t);
    console.log(t);


});
$("#navAbout").click(function(){
    scrollTime();
    var t = Math.abs(3-y1);
    scrollAnimation(3,t);
    console.log(t);
});
$("#navContact").click(function(){
    scrollTime();
    var t = Math.abs(5-y1);
    scrollAnimation(5,t);
    console.log(t);
});



var pageHeight=$("#home").height();
var scrollAnimation = function(y,t){
    $('html, body').animate({scrollTop : pageHeight*y},1500*t);
    return false;
};

$("#navHome").click(function(){
    scrollAnimation(0,1);
});
$("#navProfile").click(function(){
    scrollAnimation(2,2);
});
$("#navAbout").click(function(){
    scrollAnimation(3,3);
});
$("#navContact").click(function(){
    scrollAnimation(5,4);
});
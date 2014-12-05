var
    pageHeight = $("#home").height(),
    pageWidth = $("#home").width();

var scrollAnimation = function(x,y){
    $("#slides").transition({ x: pageWidth*-x,y:pageHeight*-y },1500,"in");
    return false;
};


$("#navHome").click(function(){
    scrollAnimation(0,0);
});

$("#navProfile").click(function(){
    scrollAnimation(0,1);
});

$("#navAbout").click(function(){
    scrollAnimation(1,1);
});

$("#navContact").click(function(){
    scrollAnimation(1,0);
});

;/**
 * Created by somi on 5/12/14.
 */
var date = new Date();
var currentYear = date.getFullYear();
$('.year').text(currentYear);
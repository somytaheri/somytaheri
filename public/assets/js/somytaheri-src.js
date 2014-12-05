/**
 * Created by somi on 5/12/14.
 */
if (document.documentElement.clientWidth >768){
        var s = skrollr.init();
        //var _smoothScrolling = on;
}
;var y1,
    pageHeight = $("#home").height();

var scrollAnimation = function(y,t){
    $('html, body').animate({scrollTop : pageHeight*y},1000*t,"swing");
    console.log(y);
    return false;
};

var scrollTime = function(){
    var scrollPosition = $(window).scrollTop();
     y1=scrollPosition/pageHeight;
    return y1;
};

$("#navHome").click(function(){
    scrollTime();
    var t = Math.abs(0-y1);
    scrollAnimation(0,t);

});

$("#navProfile").click(function(){
    scrollTime();
    var t = Math.abs(2-y1);
    scrollAnimation(2,t);
});

$("#navAbout").click(function(){
    scrollTime();
    var t = Math.abs(3-y1);
    scrollAnimation(3,t);
});

$("#navContact").click(function(){
    scrollTime();
    var t = Math.abs(5-y1);
    scrollAnimation(5,t);
});


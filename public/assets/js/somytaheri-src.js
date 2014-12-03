/**
 * Created by somi on 3/12/14.
 */
// overlay fx on blog-slides
$( '#blog-slides .cycle-slideshow' ).on( 'cycle-before', function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag) {
    $(outgoingSlideEl).parent().parent().siblings("#blog-slides-overlay-wrapper").find(".blog-slides-overlay").animate({
        left: "-350px"
    });
});

$( '#blog-slides .cycle-slideshow' ).on( 'cycle-after', function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag) {
    $(incomingSlideEl).parent().parent().siblings("#blog-slides-overlay-wrapper").find(".blog-slides-overlay").animate({
        left: "0px"
    });
});
;//$(function() {
//    $(".page-scroll a").bind("click", function(event) {
//        var $anchor = $(this);
//        console.log($($anchor.attr("href")));
//        $("html, body").stop().animate({
//            scrollTop: $($anchor.attr("href")).offset().top
//    }, 1500);
//    event.preventDefault();
//});
//});
// $(function() {
//     $('a[href*=#]:not([href=#])').click(function() {
//         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//             var target = $(this.hash);
//             target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//             if (target.length) {
//                 $('html,body').animate({
//                     scrollTop: target.offset().top
//                 }, 1000);
//                 return false;
//             }
//         }
//     });
// });

//$('a').click(function(){
//    $('html, body').animate({
//        scrollTop: $( $.attr(this, 'href') ).offset().top
//    }, 500);
//    return false;
//});

//$(function() {
//    $(".page-scroll a").bind("click", function(event) {
//        var $anchor = $(this);
//        $("html, body").stop().animate({
//            scrollTop: $($anchor.attr("href")).offset().top
//    }, 1500);
//    event.preventDefault();
//});
//});

console.log($("#home").position());
//console.log($("#home").height());
console.log("home");
console.log($("#portfolio").position());
console.log("portfolio");
console.log($("#about").position());
console.log($("#contact").position());
//$("#navProfile").click(function(){
//    console.log("hi");
//    $("#portfolio").offset({ top: 0, left: 0});
//    console.log($("#portfolio").position());
//});
//
//$("#home").click(function() {
//    alert( "Handler for .click() called." );
//});

//
var pageHeight=$("#home").height();
//
//$("#navProfile").click(function(){
//    console.log("hi");
//    $('html, body').animate({scrollTop : 900},800);
//    console.log(hheight);
//    return false;
//});
//
var scrollAnimation = function(y,t){
    $('html, body').animate({scrollTop : pageHeight*y},1500*t);
    console.log(hheight);
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
});;/**
 * Created by somi on 1/12/14.
 */

jQuery(document).ready(function ($) {
    var options = {
        $AutoPlay: true,
        $AutoPlayInterval: 3000,
        $SlideDuration: 1000,
        $ArrowNavigatorOptions: {                           //[Optional] Options to specify and enable arrow navigator or not
            $Class: $JssorArrowNavigator$,                  //[Requried] Class to create arrow navigator instance
            $ChanceToShow: 1,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
            $AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
            $Steps: 1 ,                                     //[Optional] Steps to go for each navigation request, default value is 1

        }
    };
    var jssor_slider1 = new $JssorSlider$('slider1_container', options);

});

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
;
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

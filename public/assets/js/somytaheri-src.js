//$(function() {
//    $(".page-scroll a").bind("click", function(event) {
//        var $anchor = $(this);
//        console.log($($anchor.attr("href")));
//        $("html, body").stop().animate({
//            scrollTop: $($anchor.attr("href")).offset().top
//    }, 1500);
//    event.preventDefault();
//});
//});
//$(function() {
//    $('a[href*=#]:not([href=#])').click(function() {
//        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//            var target = $(this.hash);
//            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//            if (target.length) {
//                $('html,body').animate({
//                    scrollTop: target.offset().top
//                }, 1000);
//                return false;
//            }
//        }
//    });
//});

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
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

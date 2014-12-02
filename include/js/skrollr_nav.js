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
});
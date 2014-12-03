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

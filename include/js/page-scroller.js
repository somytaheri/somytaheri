$(document).ready(function() {
    var
        pageHeight = $("#home").height(),
        pageWidth = $("#home").width();

    var headerAnimation = function () {
        $(".header").animate({
            opacity:0
        }, 400, function(){
            $(".header").animate({
                opacity:1
            }, 700);
        });
        return false;
    };
    var footerAnimation = function () {
        $(".footer").animate({
            opacity:0
        }, 400, function(){
            $(".footer").animate({
                opacity:1
            }, 700);
        });
        return false;
    };

    var scrollAnimation = function (x, y) {
        $("#slides").transition({x: pageWidth * -x, y: pageHeight * -y}, 1000);

        return false;
    };


    $("#navHome").click(function () {
        scrollAnimation(0, 0);
        footerAnimation();
        headerAnimation();

    });

    $("#navProfile").click(function () {
        scrollAnimation(0, 1);
        footerAnimation();
        headerAnimation();
    });

    $("#navAbout").click(function () {
        scrollAnimation(1, 1);
        footerAnimation();
        headerAnimation();
    });

    $("#navContact").click(function () {
        scrollAnimation(1, 0);
        footerAnimation();
        headerAnimation();
    });

    $(".header").click(function () {
        scrollAnimation(0, 0);
        footerAnimation();
        headerAnimation();
    });


});




$(document).ready(function() {
    var
        pageHeight = $("#home").height(),
        pageWidth = $("#home").width();

    var scrollAnimation = function (x, y) {
        $("#slides").transition({x: pageWidth * -x, y: pageHeight * -y}, 1000);
        return false;
    };


    $("#navHome").click(function () {
        scrollAnimation(0, 0);
        console.log("hi");
    });

    $("#navProfile").click(function () {
        scrollAnimation(0, 1);
    });

    $("#navAbout").click(function () {
        scrollAnimation(1, 1);
    });

    $("#navContact").click(function () {
        scrollAnimation(1, 0);
    });
});


$("#blog-slides .cycle-slideshow").on("cycle-before",function(a,b,c){$(c).parent().parent().siblings("#blog-slides-overlay-wrapper").find(".blog-slides-overlay").animate({left:"-350px"})}),$("#blog-slides .cycle-slideshow").on("cycle-after",function(a,b,c,d){$(d).parent().parent().siblings("#blog-slides-overlay-wrapper").find(".blog-slides-overlay").animate({left:"0px"})});var pageHeight=$("#home").height(),scrollAnimation=function(a,b){return $("html, body").animate({scrollTop:pageHeight*a},1e3*b,"swing"),!1},y1,scrollTime=function(){var a=$(window).scrollTop();return y1=a/pageHeight};$("#navHome").click(function(){scrollTime();var a=Math.abs(0-y1);scrollAnimation(0,a),console.log(a)}),$("#navProfile").click(function(){scrollTime();var a=Math.abs(2-y1);scrollAnimation(2,a),console.log(a)}),$("#navAbout").click(function(){scrollTime();var a=Math.abs(3-y1);scrollAnimation(3,a),console.log(a)}),$("#navContact").click(function(){scrollTime();var a=Math.abs(5-y1);scrollAnimation(5,a),console.log(a)}),jQuery(document).ready(function(){{var a={$AutoPlay:!0,$AutoPlayInterval:3e3,$SlideDuration:1e3,$ArrowNavigatorOptions:{$Class:$JssorArrowNavigator$,$ChanceToShow:1,$AutoCenter:2,$Steps:1}};new $JssorSlider$("slider1_container",a)}});
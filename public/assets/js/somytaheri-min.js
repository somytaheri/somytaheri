if(document.documentElement.clientWidth>768)var s=skrollr.init();var y1,pageHeight=$("#home").height(),scrollAnimation=function(a,b){return $("html, body").animate({scrollTop:pageHeight*a},1e3*b,"swing"),console.log(a),!1},scrollTime=function(){var a=$(window).scrollTop();return y1=a/pageHeight};$("#navHome").click(function(){scrollTime();var a=Math.abs(0-y1);scrollAnimation(0,a)}),$("#navProfile").click(function(){scrollTime();var a=Math.abs(2-y1);scrollAnimation(2,a)}),$("#navAbout").click(function(){scrollTime();var a=Math.abs(3-y1);scrollAnimation(3,a)}),$("#navContact").click(function(){scrollTime();var a=Math.abs(5-y1);scrollAnimation(5,a)});
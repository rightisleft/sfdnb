$(window).on("resize",function(){var t=$(window).height()-$(".bottom-part").height();$("#home").css("height",t);var e=$(window).height()-$(".bottom-part").height()-50;$("#offer-part").css("height",e),$(window).width()<1200&&$("#offer-part").css("height",t)}),$(document).ready(function(){"use strict";var t=$("html, body");$("a").click(function(){return t.animate({scrollTop:$($.attr(this,"href")).offset().top},600,"easeInOutCubic"),!1});var e=$(window).height()-$(".bottom-part").height();$("#home").css("height",e);var o=$(window).height()-$(".bottom-part").height()-50;$("#offer-part").css("height",o),$(window).width()<1200&&$("#offer-part").css("height",e),$("a.trigger, button.close-offer").on("click",function(){$("#offer-part").toggleClass("offer-open"),$("#home").toggleClass("home-hide")}),$(document).mouseup(function(t){var e=$("#offer-part");e.is(t.target)||0!==e.has(t.target).length||($("#offer-part").removeClass("offer-open"),$("#home").removeClass("home-hide"))})});
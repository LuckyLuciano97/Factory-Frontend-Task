"use strict";

$(document).ready(function(){let a=0,b=0,c=0,d=0;$("#next").on("click",function(){a=$(".top-row .images").first().outerWidth(),b=$(".bottom-row .images").first().outerWidth();var c=$(".top-row .images:first"),d=$(".bottom-row-container .bottom-row .images").first();$("#next").attr("disabled","disabled"),setTimeout(function(){$("#next").removeAttr("disabled")},1e3),$("#prev").attr("disabled","disabled"),setTimeout(function(){$("#prev").removeAttr("disabled")},1e3),$(".top-row .images").animate({left:"-="+a},"fast"),$(".top-row .images:first").fadeOut("fast",function(){$(".top-row .images").css({left:"0"}),$(".top-row").append(c),$(".top-row .images").last().fadeIn()}),$(".bottom-row-container .bottom-row .images").animate({left:"-="+b},"fast"),$(".bottom-row-container .bottom-row .images").first().fadeOut("fast",function(){$(".bottom-row-container .bottom-row .images").css({left:"0"}),$(".bottom-row").append(d),$(".bottom-row .images").last().fadeIn()})}),$("#prev").on("click",function(){c=$(".top-row .images").last().width(),d=$(".bottom-row-container .bottom-row .images").last().width();var a=$(".top-row .images").last(),b=$(".bottom-row-container .bottom-row .images").last(),e=$(a).clone(),f=$(b).clone();$("#next").attr("disabled","disabled"),setTimeout(function(){$("#next").removeAttr("disabled")},1e3),$("#prev").attr("disabled","disabled"),setTimeout(function(){$("#prev").removeAttr("disabled")},1e3),$(".top-row .images").animate({left:"+="+c},function(){$(e).insertBefore($(".top-row .images:first")),$(".top-row .images").css({left:"0"}),$(a).remove()}),$(".bottom-row-container .bottom-row .images").animate({left:"+="+d},function(){$(f).insertBefore($(".bottom-row .images:first")),$(".bottom-row-container .bottom-row .images").css({left:"0"}),$(b).remove()})})})
(function(){$(function(){return $(".feature-list ul li a").on("click",function(){var e,t,n;return e=$(this),t=$("#feature-video iframe"),n=t.attr("src").replace(/[0-9]+/,e.attr("href").replace("#","")||"123"),t.attr("src",n),$(".feature-list li a").removeClass("active"),e.addClass("active"),!1})})}).call(this);
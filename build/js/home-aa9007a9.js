(function(){$(function(){return $("#reel").transition({x:-1910,rotate:"-360deg",delay:500,duration:1500,easing:"ease"}),$("#tagline img").transition({opacity:1,duration:3e3,delay:800}),$("#tagline div").transition({opacity:1,duration:1e3,delay:1800}),$("#reel").on("click",function(){return $(this).transition({rotate:"+=360deg",duration:1500,easing:"ease"})})})}).call(this),function(){$(function(){var e,t,n,r,i,s;return e=$("aside"),n=e.offset(),r=e.find("li"),i=r.find("a"),s=$("section"),t=e.height(),n.top-=35,n.left=$(".container",s.first()).offset().left,e.css("left",n.left),$(window).on("resize",function(){return n.left=$(".container",s.first()).offset().left,e.css("left",n.left)}),$(window).on("scroll",function(){var o;o=$(document).scrollTop(),o>=n.top&&!e.hasClass("fixed")?e.addClass("fixed"):o<=n.top&&e.removeClass("fixed");if(o<n.top)return;return s.each(function(e,n){var s,u;u=$(n),u.data().frame||u.data({frame:{top:u.offset().top,bottom:u.offset().top+u.height()},link:i.filter('[href="#'+u.attr("id")+'"]')}),s=o+t/2;if(s>=u.data().frame.top&&s<=u.data().frame.bottom)return r.removeClass("active"),u.data().link.closest("li").addClass("active")})}),i.on("click",function(e){var t,n;t=$(this).data().el||$(this.hash),$(this).data().el=t;if(!t.length)return;return n=t.offset().top,$("html,body").animate({scrollTop:n-20},"slow"),e.preventDefault()})})}.call(this);
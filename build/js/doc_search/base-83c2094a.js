!function(){var e;e=function(){function e(){this.init_events()}return e.prototype.minimum_length=3,e.prototype.results=$("#search-content"),e.prototype.form=$(".docs aside form"),e.prototype.urlRegExp=new RegExp(/^.*\/\/[^\/]+/),e.prototype.init_events=function(){var e=this;return this.form.on("submit",function(){var t;return t=e.form.find("input"),t.data("val",t.val()),e.perform_search(t.val()),!1}),this.results.on("click","a",function(){return expandTreeWithPath($(this).attr("href"))}),this.form.find("input").keydown(function(t){var n,i,r,a,o;if(i=e.form.find("input"),r=t.keyCode,a=e.results.find("li"),o=a.filter(".selected"),e.results.is(":visible")){if(13===r&&o.length){if(i.val()!==i.data("val"))return;t.preventDefault(),window.location.href=o.find("a").attr("href")}if(40===r||38===r)return t.preventDefault(),n=void 0,a.removeClass("selected"),40===r?n=!o.length||o.is(":last-child")?a.eq(0):o.next():38===r&&(n=!o.length||o.is(":first-child")?a.last():o.prev()),e.results.scrollTop(n[0].offsetTop),n.addClass("selected")}})},e.prototype.perform_search=function(e){var t=this;return e=$.trim(e.toLowerCase()),e.length>=this.minimum_length?(this.results.html("<li><span>Loading...</span></li>"),$.ajax({url:"https://api.swiftype.com/api/v1/public/engines/search.json",data:{q:e,engine_key:"9ss2uGXz9XP6kyd6y6CN"},dataType:"jsonp"}).done(function(e){var n,i,r,a,o,s,l;if(e.record_count<1)return t.results.html("<li><span>No results found. Please refine your search.</span></li>");for(t.results.html(""),s=e.records.page,l=[],a=0,o=s.length;o>a;a++)n=s[a],i=n.highlight.title?n.highlight.title:n.highlight.sections?""+n.title+"<small>"+n.highlight.sections+"</small>":""+n.title+"<small>"+n.highlight.body+"</small>",r=n.url.replace(t.urlRegExp,""),l.push(t.results.append("<li><a href='"+r+"'>"+i+"</a></li>"));return l})):this.results.html("<li><span>Should be "+this.minimum_length+" characters or more.</span></li>"),$(":not(#search-content)").one("click",function(){return t.results.fadeOut()}),this.results.fadeIn()},e}(),$(function(){return new e})}.call(this);
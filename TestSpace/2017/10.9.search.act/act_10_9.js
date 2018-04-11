/* JavaScript Document*/
$(document).ready(function () {
	"use strict";
	$(".search_input").on('keyup', function () {
		var searchText = $(".search_input").val();
		$.get('http://api.bing.com/qsonhs.aspx?q=' + searchText, function (d) {
			var ds = d.AS.Results[0].Suggests;
			var html = " ";
			for (var i = 0; i < ds.length; i++) {
				html = "<li>" + ds[i].Txt + "</li>";
			}
			$("#search_suggest").slideDown(100);
		});
		$(document).on("click", function () {
			$("#search_suggest").slideUp(100);
		});
		$(".search_input").on("click", function (event) {
			event.stopPropagation();
		});
	});

});
//jquery方法



/*$(document).ready(function () {
	"use strict";
	$(".search_input").on('keyup', function () {
		$("#search_suggest").slideDown(100);
		$(document).on("click", function () {
			$("#search_suggest").slideUp(100);
		});
		$(".search_input").on("click", function (event) {
			event.stopPropagation();
		});
	});

});
function GetDom(id){
	"use strict";
	return document.getElementById(id);
}
function addEvent(id,event,fn){
	"use strict";
	var el=GetDom(id)||document;
	if(el.addEventListener)
		{
			el.addEventListener(event,fn,false);
		}
	else if(el.attachEvent)
		{
			el.attachedEvent("on"+event,fn);
		}
}*/
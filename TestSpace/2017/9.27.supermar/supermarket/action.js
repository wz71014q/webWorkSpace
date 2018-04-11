/**
 * Created by 190881 on 2017/9/27.
 */
$(document).ready(function () {
	"use strict";
	$(window).scroll(function () { //滚动条滚动时触发
		var top = $(document).scrollTop();
		var menu = $("#menu");
		var items = $("#content").find(".item");
		var currentId;
		loop1:
		items.each(function () {
			var $this = $(this);
			var itemTop;
			itemTop = $this.offset().top;
			if (top > itemTop - 200) {
				currentId = "#" + $this.attr("id");
			} else {
				return false;
			}
		});
		var currentLink = menu.find(".current");
		if (currentId && currentLink.attr("href") !== currentId) {
			currentLink.removeClass("current");
			menu.find("[href=" + currentId + "]").addClass("current");
		}
	});
}); //jquery实现方式
/*window.onload = move;

function move() {
	"use strict";
	window.onscroll = function () {
		var top = document.documentElement.scrollTop || document.body.scrollTop;

		var items = document.getElementsByClassName("item");
		var menus = document.getElementById("menu").getElementsByTagName("a");
		var currentID = "";
		for (var i = 0; i < items.length; i++) {
			var whichitem = items[i];
			var whichitemTop = whichitem.offsetTop;
			if (top > whichitemTop - 200) {
				currentID = whichitem.id;
			} else {
				break;
			}
		}
		if (currentID) {
			for (var j = 0; j < menus.length; j++) {
				var whichmenu = menus[j];
				var wholehref = whichmenu.href.split("#");
				if (wholehref[wholehref.length - 1] !== currentID) {
					removeClass(whichmenu, "current");
				} else {
					addClass(whichmenu, "current");
				}
			}
		}
	};
}

/*function getByClass(obj, cls) {
	"use strict";
	//	var oparent = document.getElementById(obj) || document;
	var result =[];
	var elements = (obj || document).getElementsByTagName("*");
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].className === cls) {
			result.push(elements[i]);
		}
		return result;
	}
}
*/
/*function hasClass(obj, cls) { //判断是否有该类名
	"use strict";
	//	var oparent = document.getElementById(obj) || document;
	return obj.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}

function removeClass(obj, cls) { //删除类
	"use strict";
	//	var oparent = document.getElementById(obj) || document;
	if (hasClass(obj, cls)) {
		var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
		obj.className = obj.className.replace(reg, "");
	}
}

function addClass(obj, cls) { //添加类
	"use strict";
	//	var oparent = document.getElementById(obj) || document;
	if (!hasClass(obj, cls)) {
		obj.className += " " + cls;
	}
}*/

// JavaScript Document
function JSClock() {
	"use strict";
	var time = new Date();
	var hour = time.getHours();
	var minute = time.getMinutes();
	var second = time.getSeconds();
/*	var temp=hour;*/
	var temp = "" +((hour > 12) ? hour - 12 : hour);
	if (hour === 0) {
		temp = "12";
	}
	temp += ((minute < 10) ? ":0" : ":") + minute;
	temp += ((second < 10) ? ":0" : ":") + second;
	temp += (hour >= 12) ? " P.M." : " A.M.";
	return temp;
}
window.onload =function(){
	"use strict";
	document.getElementsByTagName("p")[0].innerHTML=JSClock();
} ;
var a = 5;
var b = 10;
document.getElementsByTagName("p")[1].innerHTML=`Fifteen is ${a + b} and\nnot ${2 * a + b}.`;//嵌入表达式


var colors=["red","green","blue"];
colors.forEach(function(color){//简洁的遍历方法
	"use strict";
	document.write(color);
});
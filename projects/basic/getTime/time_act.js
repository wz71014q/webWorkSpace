// JavaScript Document
function JSClock() {
	let time = new Date();
	let hour = time.getHours();
	let minute = time.getMinutes();
	let second = time.getSeconds();
/*	var temp=hour; */
	let temp = "" +((hour > 12) ? hour - 12 : hour);
	if (hour === 0) {
		temp = "12";
	}
	temp += ((minute < 10) ? ":0" : ":") + minute;
	temp += ((second < 10) ? ":0" : ":") + second;
	temp += (hour >= 12) ? " P.M." : " A.M.";
	return temp;
}
window.onload =function(){
	

	document.getElementsByTagName("p")[0].innerHTML=JSClock();
} ;
let a = 5;
let b = 10;
document.getElementsByTagName("p")[1].innerHTML=`Fifteen is ${a + b} and\nnot ${2 * a + b}.`;// 嵌入表达式


let colors=["red","green","blue"];
colors.forEach(function(color){// 简洁的遍历方法
	

	document.write(color);
});
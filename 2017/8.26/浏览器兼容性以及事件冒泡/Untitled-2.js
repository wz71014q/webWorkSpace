// JavaScript Document
var EventUtil=
{//新建对象
 addHandler: function(element, type, handler)
 {//定义添加事件句柄
   if(element.addEventListener){//检查是否支持DOM2级
     element.addEventListener(type, handler, false);}   else if(element.attachEvent){//是否IE
     element.attachEvent("on" + type, handler);}
   else {//DOM0级（老版本浏览器）
     element["on" + type]= handler;}//element.===element[] 
 }, 
 removeHandler: function(element, type, handler)
 {//删除事件句柄
   if(element.removeEventListener){
     element.removeEventListener(type, handler, false);   }
   else if(element.detachEvent){
     element.detachEvent("on" + type, handler);}
   else{
     element["on"+type]=null;}
  } 
}
function act1()
{
	alert("110");
	EventUtil.preventDefault(event);
/*	event.stopPropagation();*/
}
function act2(event)
{
	event=event||window.event;//兼容DOM和IE8以下
	var ele=event.target||event.srcElement;//DOM对象事件和IE对象事件
	alert(ele);//获取事件目标
/*	event.stopPropagation();//阻止事件冒泡*/
}
function act3(event)
{
	alert(event.type);//获取事件类型
}
function act4(event)
{
	alert(event.target.nodeName);//event.target只能是事件直接作用的对象
}
function act5()
{
	var ul=document.getElementById("uuul");
	alert(ul.nodeName);
}
function act()
{
	var a1=document.getElementById("a1");
	var a2=document.getElementById("a2");
	var a3=document.getElementById("a3");
	var ul=document.getElementById("uuul");
    EventUtil.addHandler(a1,'click',act1);
	EventUtil.addHandler(a2,'click',act2);
	EventUtil.addHandler(a3,'click',act3);
	EventUtil.addHandler(ul,'click',act5);
}
/*function ac()
{//名称可以自己起
	var a2=document.getElementById("a2");
    Eve.addH(a2,'click',act1);
	Eve.addH(a2,'click',act2);
}*/
window.onload=act;
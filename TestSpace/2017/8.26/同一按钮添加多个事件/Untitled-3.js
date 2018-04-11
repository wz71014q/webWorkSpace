// JavaScript Document
function act()
{
var btn=document.getElementById("a1");
btn.addEventListener("click",act1,false);
//btn.removeEventListener("click",act1,false);
btn.addEventListener("click",function(){
	alert("222");},false)
}
function act1(){
	alert("110");
	}
function act2(){
btn.addEventListener("click",act1,false);
//btn.removeEventListener("click",act1,false);
btn.addEventListener("click",function(){alert("222");},false)
	}
function act3(){
	alert("110");
	}
window.onload=act;
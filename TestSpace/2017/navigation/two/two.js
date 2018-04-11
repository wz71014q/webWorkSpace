// JavaScript Document
function aaa()
{
var links=document.getElementsByTagName("a");
for(var i=0;i<links.length;i++)
{
	links[i].onclick=function()
	{al(this);}
	}}
function al(whichpic)
{
	var rrr=whichpic.getAttribute("alt");
	alert(rrr);}
window.onload=aaa;
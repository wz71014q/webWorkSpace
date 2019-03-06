// 点击图标，实现替换元素的目标
/* eslint-disable */
import './index.html';
import './style.css';

window.onload=test;
function test()
{
	var i=0;
     $("#d1").click(function(){
	 if(i==0){alert(i);i=1;}
	 else if(i==1)
	 {alert(i);i=0;}
	 });
	  $("#d2").click(function(){
	$("#in1").replaceWith('<input type="text" id="innn1" name="Uname" value='+$("#in1").html()+'>');
	$("#innn1").val($("#innn1").attr("value")).focus().val(t);
	var t=$("#innn1").val($("#innn1").attr("value"));
	$("#innn1").focusout(function(e) {
        $("#innn1").replaceWith('<p id="in1">'+$("#innn1").val()+'</p>');
		});
	 });
	 
}

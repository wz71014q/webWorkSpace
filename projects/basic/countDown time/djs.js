// JavaScript Document
window.onload=function()
{
　　var timedate=new Date("2020,8,30");//自定义结束时间
　　var now=new Date();//获取当前时间
　　var date= timedate.getTime() - now.getTime();//得出的为毫秒
　　var time=date/(1000 * 60 * 60 * 24);
//1000 * 60 * 60 * 24一天的秒数
   if(time>0){
     document.getElementById("timeShow").innerHTML = Math.ceil(time);
	}
};
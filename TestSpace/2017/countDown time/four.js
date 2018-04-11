// JavaScript Document
function ttim()
{
  setInterval(clock,100);
}
function clock()
{
   var time=new Date();
   var day=time.getDay();
   var week=["日","一","二","三","四","五","六"];        
   var aTime=time.getFullYear()+"年"+parseInt(time.getMonth()+1)+"月"+time.getDate()+"日"+tr(time.getHours())+":"+tr(time.getMinutes())+":"+tr(time.getSeconds())+"星期"+week[day];
   document.getElementById("tim").innerHTML=aTime;
}
function tr(i)
{
	if(i<10)i="0"+i;
	else i=i;
	return i;
	}
window.onload=ttim;
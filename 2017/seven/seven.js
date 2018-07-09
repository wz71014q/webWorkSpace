// JavaScript Document
function act()
{
	var diva=document.getElementById("tabs");
    var divb=diva.getElementsByTagName("div");
	var list=document.getElementsByTagName("li");
	for(var i=0;i<list.length;i++){
		list[i].index=i;
		list[i].onclick=function(){
			for(var j=0;j<list.length;j++){
				list[j].className="";
			    divb[j].className="hide";
				}
			this.className="on";
			divb[this.index].className="";
			}
	}
}

window.onload=act;
// JavaScript Document
window.onload=test;
function test(){
	$("#sub").click(function(e) {
    var request;
	if(window.XMLHttpRequest)
	{
		request=new XMLHttpRequest();
		}
	else{
		request=new ActiveXObject("Microsoft.XMLHTTP");//兼容IE5/6
		}
	request.open("GET","server.php?number="+$("#int").val(),"true");
	request.send();
	request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	request.send("name=小王&sex=男");
	request.onreadystatechange=function(){
		if(request.readyState===4&&request.status===200)
		{
			//
			}
		}
});
}
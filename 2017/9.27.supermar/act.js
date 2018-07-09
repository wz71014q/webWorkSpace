// JavaScript Document
// JavaScript Document
window.onload=test;
function test(){
$("sub").click(function(e){
    var request;
	if(window.XMLHttpRequest)
	{
		request=new XMLHttpRequest();
		}
	else{
		request=new ActiveXObject("Microsoft.XMLHTTP");//兼容IE5/6
		}
		
		

	var $this = $(this);
	$("#pic").load("E:\Dreamweaver\笔记\jQuery表单对象选择器.jpg",function()
	{
        $this.attr("disabled", "true");
     });
});

}
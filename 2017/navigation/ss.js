// JavaScript Document
function fun()
 {
        var oTab = document.getElementById("tabs");
        var div = oTab.getElementsByTagName("div");
        var li = document.getElementsByTagName("li");
        for(var i=0;i<li.length;i++){//获取所有i编号的元素
           li[i].index =i;  //定义一个index属性对li进行编号
            li[i].onclick = function(){//再注册一个点击事件，当点击的时候所有标签都恢复最初状态
            for(var n=0;n<li.length;n++){//这步是相对于未被点击部分的样式
                li[n].className = "";
                div[n].className = "hide";
            }
            this.className = "on";//再对点击事件添加相应的属性
            div[this.index].className = "";//通过之前的index编号绑定的指定div
            }
        }
 }
 window.onload=fun;
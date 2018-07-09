/* eslint-disable */
//canvas的默认坐标是向右为X正轴，向下为Y正轴
var context;
function canvasStart() {
    var obj=document.getElementById("canvas");
    obj.width=1024;
    obj.height=768;
    if(obj.getContext){
        context=obj.getContext("2d");
        //用context绘图
    }else {
        alert("当前浏览器不支持canvas!")
    }
    draw();
}

function draw() {//向右为x轴正方向，向下为y轴正方向
    /*状态设置*/
    context.beginPath();//第一个路径开始
    context.moveTo(100,100);//起点
    context.lineTo(700,700);//下一点
    context.lineTo(100,700);
    context.lineTo(100,100);
    context.lineWidth=5;//设置线条宽度
    context.strokeStyle="#ff0000";//设置线条颜色
    context.closePath();//第一个路径结束,如果图形没有闭合，这个方法会自动将图形首尾相连，闭合起来
    /*状态设置*/
    context.stroke();//画出线条
    /*状态设置*/
    context.fillStyle="#00ff00";//填充颜色
    /*状态设置*/
    context.fill();//画出面


    /*状态设置*/
    context.beginPath();//第二个路径开始
    context.moveTo(200,200);//起点
    context.lineTo(700,200);//下一点
    context.lineTo(700,700);
    context.lineTo(200,200);
    context.lineWidth=5;//设置线条宽度
    context.strokeStyle="#0000ff";//设置线条颜色
    context.closePath();//第二个路径结束
    /*状态设置*/
    context.stroke();//画出线
}

window.onload=canvasStart;
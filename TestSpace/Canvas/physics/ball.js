function initBall() {
    var canvas=document.getElementById("ball");
    var context=canvas.getContext("2d");
    var ball={x:500,y:200,Vx:-4,Vy:-15,g:3,f:0.5,R:10,beg:0,end:2*Math.PI,color:"#ff0000"};

    canvas.width=1250;
    canvas.height=500;

    var _timer=setInterval(function () {
        renderBall(ball,context);
        update(ball,context,_timer);
    },50)
}

function renderBall(obj,ctx) {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    ctx.beginPath();
    ctx.fillStyle=obj.color;
    ctx.arc(obj.x,obj.y,obj.R,obj.beg,obj.end);
    ctx.fill();
    ctx.closePath();
}

function update(obj,ctx,T) {
    obj.x+=obj.Vx;
    obj.y+=obj.Vy;
    obj.Vy+=obj.g;

    if(obj.y>=ctx.canvas.height-obj.R){
        obj.y=ctx.canvas.height-obj.R;
        obj.Vy=-obj.Vy*obj.f;
    }
    if(obj.Vy!=0&&Math.abs(obj.Vy)<=0.4){
        obj.y=ctx.canvas.height-obj.R;
        obj.Vy=0;
        obj.g=0;
    }
    console.log("Vy="+obj.Vy+"|Vy|="+Math.abs(obj.Vy));
    if(obj.x<=2*obj.R){
        clearInterval(T);
    }
}
window.onload=initBall;
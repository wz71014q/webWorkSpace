var aLi;
function moveDiv() {
    aLi=document.getElementsByTagName("li");
    for(var i=0;i<aLi.length;i++){
        aLi[i].timer=null;
        aLi[i].addEventListener('mouseover',function () {
            startMove(this,0)
        });
        aLi[i].addEventListener('mouseout',function () {
            startMove(this,-100)
        });
    }
}

function startMove(obj,target) {
    clearInterval(obj.timer);
    var alpha=30;
    obj.timer=setInterval(function () {
        var speed=(target-obj.offsetLeft)/5;
        speed=speed<0?Math.floor(speed):Math.ceil(speed);
        if(obj.offsetLeft==target){
            clearInterval(obj.timer);
        }else {
            obj.style.left = obj.offsetLeft + speed + "px";
            alpha = speed + alpha;
            if (alpha>=100) {
                alpha=100;
            }else if(alpha<30){
                alpha=30;
            }
            console.log("speed:"+speed+"----------alpha:"+alpha);
            obj.style.filter = "alpha(opacity:" + alpha + ")";
            obj.style.opacity = alpha / 100;
        }
    },30);
}
window.onload=moveDiv;
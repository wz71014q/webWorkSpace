var fov;
function moveDiv() {
    fov=document.getElementById("fov");
    fov.addEventListener('mouseover',function () {
        startMove(0)
    });
    fov.addEventListener('mouseout',function () {
        startMove(-100)
    });
}

var timer;
function startMove(target) {
    clearInterval(timer);
    var alpha=30;
    timer=setInterval(function () {
        var speed=(target-fov.offsetLeft)/5;
        speed=speed<0?Math.floor(speed):Math.ceil(speed);
        if(fov.offsetLeft==target){
            clearInterval(timer);
        }else {
            fov.style.left = fov.offsetLeft + speed + "px";
            alpha = speed + alpha;
            if (alpha>=100) {
                alpha=100;
            }else if(alpha<30){
                alpha=30;
            }
            console.log("speed:"+speed+"----------alpha:"+alpha);
            fov.style.filter = "alpha(opacity:" + alpha + ")";
            fov.style.opacity = alpha / 100;
        }
    },30);
}
window.onload=moveDiv;
var fov;
function moveDiv() {
    fov=document.getElementById("fov");
    fov.addEventListener('mouseover',function () {
        startMove(this,'width',200)
    });
    fov.addEventListener('mouseout',function () {
        startMove(this,'width',100)
    });
}

var alpha;
function startMove(obj,attr,target) {
    var icur;
    clearInterval(obj.timer);
    obj.timer=setInterval(function () {
        var speed=(target-icur)/5;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        if(attr==='opacity'){
            icur=parseFloat(getStyle(obj,attr))*100;
        }else {
            icur=parseInt(getStyle(obj,attr));
        }
        if(icur===target){
            clearInterval(obj.timer);
        }else {
            if(attr==='opacity'){
                obj.style[attr]=(icur+speed)/100;
            }else {
                obj.style[attr]=icur+speed+"px";
            }
            console.log("当前属性："+attr+":"+obj.style[attr]);
        }
    },30);
}

function getStyle(obj,attr) {
    //解决offset+attr无效的情况
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else {
        return getComputedStyle(obj,false)[attr];
    }
}

window.onload=moveDiv;
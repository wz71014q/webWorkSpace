/* eslint-disable */
console.time();
var myEndTime = []
var controal = {
  Go: '1',
  end: '0',
  clockOff: '2'
}
var CANVAS_WIDTH;
var CANVAS_HEIGHT;
var RADIOS;
var MARGIN_TOP;
var MARGIN_LEFT;
var endTime = new Date(2018, 1, 6, 17, 30, 0);//在Date中第二个参数“月份”的索引值从0开始，等于1时表示二月
var curShowTime = 0;
var nextShowTime = 0;
var balls = [];
const ballColor = ["#ff0000", "#483D8B", "#DAA520", "#ff00ff", "#0000CD", "#5500ff", "#FF00FF", "#FFD700", "#4B0082", "#00BFFF"];//这里const是定义一个常量


function initCountDown() {
    CANVAS_WIDTH = document.body.clientWidth;
    CANVAS_HEIGHT = document.body.clientHeight * 2 / 3;
    RADIOS = CANVAS_WIDTH * 2 / 3 / 108 - 1;
    MARGIN_TOP = document.body.clientHeight / 5;
    MARGIN_LEFT = document.body.clientWidth / 6;
    var myCanvas = document.getElementById("countDown");
    var context = myCanvas.getContext("2d");
    myCanvas.width = CANVAS_WIDTH;
    myCanvas.height = CANVAS_HEIGHT;
    curShowTime = getCurTime();
    setInterval(function () {
        renderBall(context);
        updateTimer(context);
    }, 50);
}

function renderBall(cont) {//将数字排列出来
    cont.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    var h = parseInt(curShowTime / (60 * 60));
    var m = parseInt((curShowTime - h * 3600) / 60);
    var s = curShowTime % 60;
    var timeArray, x;
    x = MARGIN_LEFT;
    timeArray = timeGo(h, m, s);
    for (var i = 0; i < timeArray.length; i++ , x += 15 * (RADIOS + 1)) {
        drawBalls(x, MARGIN_TOP, timeArray[i], cont);
        if (i === 1 || i === 3) {
            x += 15 * (RADIOS + 1);
            drawBalls(x, MARGIN_TOP, 10, cont);
            x -= 6 * (RADIOS + 1);
        }
    }
}

function drawBalls(x, y, number, ctx) {//画圆
    ctx.fillStyle = "#00ff00";
    for (var i = 0; i < digit[number].length; i++) {
        for (var j = 0; j < digit[number][i].length; j++) {
            if (digit[number][i][j] === 1) {
                ctx.beginPath();
                ctx.arc(x + j * 2 * (RADIOS + 1) + (RADIOS + 1), y + i * 2 * (RADIOS + 1) + (RADIOS + 1), RADIOS, 0, 2 * Math.PI);//默认顺时针
                ctx.closePath();
                ctx.fill();
            }
        }
    }
}

function updateTimer(ctx) {
    /**************************************************************************************/
    nextShowTime = getCurTime();
    var nextHours = parseInt(nextShowTime / (60 * 60));
    var nextMinutes = parseInt((nextShowTime - nextHours * 3600) / 60);
    var nextSecond = nextShowTime % 60;

    var nowHours = parseInt(curShowTime / (60 * 60));
    var nowMinutes = parseInt((curShowTime - nowHours * 3600) / 60);
    var nowSecond = curShowTime % 60;
    if (nowSecond != nextSecond) {
        curShowTime = nextShowTime;
    }
    /**************************************************************************************/
    //下面添加新的小球
    var curTimeArray, nextTimeArray, x;
    x = MARGIN_LEFT;
    curTimeArray = timeGo(nowHours, nowMinutes, nowSecond);
    nextTimeArray = timeGo(nextHours, nextMinutes, nextSecond);
    for (var i = 0; i < curTimeArray.length; i++ , x += 15 * (RADIOS + 1)) {//需要添加新小球的位置
        if (curTimeArray[i] != nextTimeArray[i]) {
            addBalls(x, MARGIN_TOP, nextTimeArray[i]);//nextTimeArray[i]-curTimeArray这里可以控制新添加的小球是旧时间还是新时间
        }
        if (i === 1 || i === 3) {
            x += 9 * (RADIOS + 1);
        }
    }
    ballMove(ctx);//动态小球
}

function addBalls(x, y, number) {
    for (var i = 0; i < digit[number].length; i++) {
        for (var j = 0; j < digit[number][i].length; j++) {
            if (digit[number][i][j] === 1) {
                var aBall = {
                    x: x + j * 2 * (RADIOS + 1) + (RADIOS + 1),
                    y: y + i * 2 * (RADIOS + 1) + (RADIOS + 1),
                    R: RADIOS,
                    g: 1.5 + Math.random(),
                    f: 0.75,
                    Vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,//Math.pow返回x的y次幂,这里是取[-1,1]之间的值，然后乘以4
                    Vy: -5,
                    color: ballColor[Math.floor(Math.random() * ballColor.length)]//Math.floor向下取整
                };
                balls.push(aBall);
            }
        }
    }
}

function ballMove(ctx) {
    for (var i = 0; i < balls.length; i++) {
        ctx.beginPath();
        ctx.fillStyle = balls[i].color;
        ctx.arc(balls[i].x, balls[i].y, RADIOS, 0, 2 * Math.PI);//默认顺时针
        ctx.closePath();
        ctx.fill();//这里的小球是运动的小球，不能放在addBalls里，否则运动的不会画出来，只会画初始化的

        balls[i].x += balls[i].Vx;
        balls[i].y += balls[i].Vy;
        balls[i].Vy += balls[i].g;
        if (balls[i].y >= ctx.canvas.height - balls[i].R) {//底部碰撞检测
            balls[i].y = ctx.canvas.height - balls[i].R;
            balls[i].Vy = -balls[i].Vy * balls[i].f;
        }
        // if(balls[i].x>=ctx.canvas.width-balls[i].R){//右壁碰撞检测
        //     balls[i].x=ctx.canvas.width-balls[i].R;
        //     balls[i].Vx=-balls[i].Vx*balls[i].f;
        // }
        if (balls[i].Vy != 0 && Math.abs(balls[i].Vy) <= 0.05) {
            balls[i].y = ctx.canvas.height - balls[i].R;
            balls[i].Vy = 0;
            balls[i].g = 0;
        }
    }
    var cnt = 0;
    for (var j = 0; j < balls.length; j++) {//清除屏幕外的小球
        if (balls[j].x > -RADIOS && balls[j].x < (ctx.canvas.width + RADIOS)) {
            balls[cnt++] = balls[j];
        } else {
            balls.pop();
        }
    }
    // console.log("balls的长度："+balls.length);
}

function getCurTime() {
    var ret = endTime.getTime() - new Date().getTime();
    ret = Math.round(ret / 1000);
    return ret >= 0 ? ret : 0;
}

function timeGo(h, m, s) {//将时分秒放进一个数组
    var array = [h, m, s];
    var result = [];
    array.forEach(function (num) {//简洁的遍历方法,ie9.0才支持
        var fir = num / 10;
        var sec = num % 10;
        result.push(parseInt(fir), parseInt(sec));
    });
    // console.log(result);
    return result;
}
/**********************************************************/
/* 输入内容 */
function initButton() {
  var buttons = getElementsByClassName('button')
  buttons[0].onclick = function () {
    myEndTime = getNowTime(controal.Go)
    endTime = new Date(myEndTime[0], myEndTime[1], myEndTime[2], myEndTime[3], myEndTime[4], myEndTime[5])
  }
  buttons[1].onclick = function () {
    endTime = new Date(0, 0, 0, 0, 0, 0)
  }
  buttons[2].onclick = function () {
    myEndTime = getNowTime(controal.clockOff)
    endTime = new Date(myEndTime[0], myEndTime[1], myEndTime[2], myEndTime[3], myEndTime[4], myEndTime[5])
  }
}

function getElementsByClassName (classname) {
  /* getElementsByClassName的兼容性方法 */
  if (document.getElementsByClassName) {
    return document.getElementsByClassName(classname)
  }
  var eleArr = document.getElementsByTagName('*')
  var classArr = []
  for (var i = 0; i < eleArr.length; i++) {
    var classnameArr = eleArr[i].className.split(' ')
    for (var j = 0; j < classnameArr.length; j++) {
      if (classnameArr[j] === classname) {
        classArr.push(eleArr[i])
      }
    }
  }
  return classArr
}

function getNowTime (flag) {
  var h, m, s
  var aaa = []
  var time = new Date()
  var myhour = parseInt(getElementsByClassName('intHour')[0].value)
  var mymin = parseInt(getElementsByClassName('intMin')[0].value)
  var y = time.getFullYear()
  var mon = parseInt(time.getMonth())
  var nowD = time.getDate()
  var nowH = time.getHours()
  var nowM = time.getMinutes()
  var nowS = time.getSeconds()
  if (flag === controal.Go) {
    nowD = calculateTime(nowD, myhour + nowH, mymin + nowM, 0)[0]
    h = calculateTime(nowD, myhour + nowH, mymin + nowM, 0)[1]
    m = calculateTime(nowD, myhour + nowH, mymin + nowM, 0)[2]
    s = 0
  } else if (flag === controal.clockOff) {
    if (nowH * 3600 + nowM * 60 >= 42300) {
      h = 17
      m = 30
      s = 0
    } else {
      h = 11
      m = 45
      s = 0
    }
  } else {
    h = 0; m = 0; s = 0
  }
  console.log('目標時間：year:' + y + ',month:' + parseInt(mon + 1) + ',day:' + nowD + 'hour:' + h + ',minute:' + m + ',second:' + s)
  aaa.push(y, mon, nowD, h, m, s)
  return aaa
}

function calculateTime (dd, hh, mm, ss) {
  var tArray = []
  if (ss >= 60) {
    mm += 1
    ss -= 60
  }
  if (mm >= 60) {
    hh += 1
    mm -= 60
  }
  if (hh >= 24) {
    dd += 1
    hh -= 24
  }
  tArray.push(dd, hh, mm, ss)
  return tArray
}
/**********************************************************/
window.onload = function () {
    initButton()
    initCountDown()
}
console.timeEnd();
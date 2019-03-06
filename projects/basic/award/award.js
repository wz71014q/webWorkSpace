// 抽奖系统
import './award.html';

let qwe = ['拯救者系列', '小新系列', 'MAC Pro', '暗影精灵', '飞行堡垒', '游匣', '顽石4代', '谢谢参与'];
let timer = null;
let f = 0;
function act() {
  let b1 = document.getElementById('bt1');
  let b2 = document.getElementById('bt2');
  b1.onclick = tim;
  b2.onclick = end;
  document.onkeypress = key;
}
function tim() {
  clearInterval(timer);
  timer = setInterval(fun, 50);
}
function end() {
  clearInterval(timer);
}
function fun() {
  let ran = Math.floor(Math.random() * qwe.length);// 产生随机数，但是随机数的范围在0~1内，需要扩大并向下取整
  let sp = document.getElementById('sp');
  sp.innerHTML = qwe[ran];
}
function key(event) {
  const _event = event || window.event;
  let kk = _event.which || _event.keyCode;// 获取按下键盘的编码，兼容
  if (kk === 13 && f === 0) { tim(); f = 1; } else { end(); f = 0; }
}
window.onload = act;

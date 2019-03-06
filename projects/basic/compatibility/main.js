// 浏览器兼容性
import './index.html';
import './style.css';

let EventUtil = {
  addHandler(element, type, handler) {
    let ele = element;
    if (ele.addEventListener) { // 检查是否支持DOM2级
      ele.addEventListener(type, handler, false);
    } else if (ele.attachEvent) { // 是否IE
      ele.attachEvent('on' + type, handler);
    } else { // DOM0级（老版本浏览器）
      ele['on' + type] = handler;
    }// element.===element[]
  },
  removeHandler(element, type, handler) { // 删除事件句柄
    let ele = element;
    if (ele.removeEventListener) {
      ele.removeEventListener(type, handler, false);
    } else if (ele.detachEvent) {
      ele.detachEvent('on' + type, handler);
    } else {
      ele['on' + type] = null;
    }
  }
};
function act1(event) {
  console.log('110');
  event.preventDefault(event);
/* event.stopPropagation(); */
}
function act2(event) {
  const _event = event || window.event;// 兼容DOM和IE8以下
  let ele = _event.target || _event.srcElement;// DOM对象事件和IE对象事件
  console.log(ele);// 获取事件目标
/* event.stopPropagation();//阻止事件冒泡 */
}
function act3(event) {
  console.log(event.type);// 获取事件类型
}
function act4(event) {
  console.log(event.target.nodeName);// event.target只能是事件直接作用的对象
}
function act5() {
  let ul = document.getElementById('uuul');
  console.log(ul.nodeName);
}
function act() {
  let a1 = document.getElementById('a1');
  let a2 = document.getElementById('a2');
  let a3 = document.getElementById('a3');
  let ul = document.getElementById('uuul');
  EventUtil.addHandler(a1, 'click', act1);
  EventUtil.addHandler(a1, 'click', act2);
  EventUtil.addHandler(a2, 'click', act4);
  EventUtil.addHandler(a3, 'click', act3);
  EventUtil.addHandler(ul, 'click', act5);
}
window.onload = act;

import './index.html';
import './style.css';

const pickerWrapper = document.createElement('div');
let startPoint = [];
const picker = {
  angle: 0, // 整体转的角度
  angleCache: 0, // 角度缓存
  riadio: 300, // 元素半径
  itemAngle: 0, // 元素分布角度
  itemCount: 0, // 元素数量
  itemWidth: 200, // 元素宽度
  itemMaxHeight: 200, // 元素最大高度
  itemId: 0 // 选择ID
};
function init(count) {
  picker.itemCount = count;
  picker.itemAngle = 360 / count;
  picker.itemMaxHeight = Math.round(2 * Math.tan(picker.itemAngle / 2 * Math.PI / 180) * picker.riadio) - 20; // 元素最大高度
  document.getElementById('app').appendChild(document.createElement('div'));
  classManager.addClass(document.querySelectorAll('div')[1], 'container');
  setStyle(count);
  handleManager.addHandle(pickerWrapper, handleManager.startEvent, touchEvent.touchStart);
}
function setStyle(count) {
  const container = document.getElementsByClassName('container')[0];
  classManager.addClass(pickerWrapper, 'picker-wrapper');
  container.appendChild(pickerWrapper);
  pickerWrapper.style.width = `${picker.itemWidth}px`;
  pickerWrapper.style.height = `${picker.itemMaxHeight}px`;
  for (let i = 0; i < count; i += 1) {
    pickerWrapper.appendChild(document.createElement('figure'));
    classManager.addClass(document.querySelectorAll('figure')[i], 'item');
    document.querySelectorAll('figure')[i].appendChild(document.createElement('p'));
    document.querySelectorAll('p')[i].innerHTML = i;
    classManager.addClass(document.querySelectorAll('p')[i], 'item-text');
    document.querySelectorAll('figure')[i].style.width = `${picker.itemWidth}px`;
    document.querySelectorAll('figure')[i].style.height = `${picker.itemMaxHeight}px`;
    document.querySelectorAll('figure')[i].style.transform = `rotateX(${360 / count * i}deg) translateZ(${picker.riadio}px)`;
  }
}
const touchEvent = {
  touchStart(eve) {
    let _eve = eve || window.event;
    _eve.preventDefault();
    _eve.stopPropagation();
    startPoint = [_eve.clientX || _eve.targetTouches[0].pageX, _eve.clientY || _eve.targetTouches[0].pageY];
    handleManager.addHandle(document, handleManager.moveEvent, touchEvent.touching);
    handleManager.addHandle(document, handleManager.stopEvent, touchEvent.touchEnd);
  },
  touching(eve) {
    let _eve = eve || window.event;
    _eve.preventDefault();
    _eve.stopPropagation();
    const movingPoint = [_eve.clientX || _eve.targetTouches[0].pageX, _eve.clientY || _eve.targetTouches[0].pageY];
    let verticalDistance = 0;
    verticalDistance = startPoint[1] - movingPoint[1];
    handleManager.rotate(pickerWrapper, verticalDistance);
  },
  touchEnd(eve) {
    let _eve = eve || window.event;
    _eve.preventDefault();
    _eve.stopPropagation();
    const endPoint = [_eve.clientX || _eve.changedTouches[0].pageX, _eve.clientY || _eve.changedTouches[0].pageY];
    picker.angleCache += Math.round((startPoint[1] - endPoint[1]) * 3 / (5 * Math.PI));

    let angleCount = Math.abs(parseInt(picker.angle / picker.itemAngle, 10));
    if (Math.abs(picker.angle % 36) <= 18) { // 未满20%，返回原位置
      picker.angleCache = picker.angle / Math.abs(picker.angle) * picker.itemAngle * angleCount;
      handleManager.rotate(pickerWrapper, '', picker.angle / Math.abs(picker.angle) * picker.itemAngle * angleCount);
    } else { // 超过20%，返回+1原位置
      picker.angleCache = picker.angle / Math.abs(picker.angle) * picker.itemAngle * (angleCount + 1);
      handleManager.rotate(pickerWrapper, '', picker.angle / Math.abs(picker.angle) * picker.itemAngle * (angleCount + 1));
    }

    picker.itemId = Math.abs(picker.angleCache / picker.itemAngle) % picker.itemCount;
    if (picker.angleCache >= 0 && picker.itemId % 10 !== 0) {
      picker.itemId = picker.itemCount - picker.itemId;
    }
    console.log('picker.itemId', picker.itemId);
    touchEvent.clear();
  },
  clear() {
    handleManager.removeHandle(pickerWrapper, handleManager.touchStart, touchEvent.touchStart);
    handleManager.removeHandle(document, handleManager.moveEvent, touchEvent.touching);
  }
};
const handleManager = {
  startEvent: 'ontouchstart' in window ? 'touchstart' : 'mousedown',
  moveEvent: 'ontouchmove' in window ? 'touchmove' : 'mousemove',
  stopEvent: 'ontouchend' in window ? 'touchend' : 'mouseup',
  // passive:true: 告诉浏览器，事件里不会调用preventDefault，则浏览器不会在滑动时暂停200ms左右检测是否调用了preventDefault
  addHandle(obj, event, handle) {
    obj.addEventListener(event, handle, { passive: false, capture: false });
  },
  removeHandle(obj, event, handle) {
    obj.removeEventListener(event, handle, false);
  },
  rotate(obj, verticalDistance, addAngle) {
    if (addAngle !== undefined) {
      picker.angle = addAngle;
    } else {
      picker.angle = Math.round(verticalDistance * 3 / (5 * Math.PI)) + picker.angleCache;
    }
    obj.style.transform = `rotateX(${picker.angle}deg)`;
  }
};
const classManager = {
  addClass(obj, cls) {
    if (!this.hasClass(obj, cls)) {
      obj.className += ` ${cls}`;
    }
  },
  hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
  }
};
init(10);

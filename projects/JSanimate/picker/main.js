import './index.html';
import './style.css';

const handleManager = {
  startEvent: 'ontouchstart' in window ? 'touchstart' : 'mousedown',
  moveEvent: 'ontouchstart' in window ? 'touchmove' : 'mousemove',
  stopEvent: 'ontouchstart' in window ? 'touchend' : 'mouseup',
  addHandle(obj, event, handle) {
    obj.addEventListener(event, handle);
  },
  removeHandle(obj, event, handle) {
    obj.removeEventListener(event, handle);
  }
};
class CubeObject {
  constructor() {
    this.itemContent = document.getElementsByClassName('container')[0];
    this.itemWidth = window.getComputedStyle(this.itemContent).width;
  }
}
const container = new CubeObject();
let startPoint = 0;
const touchEvent = {
  touchStart(eve) {
    let _eve = eve || window.event;
    startPoint = _eve.clientX;
    console.log('touchStart', _eve.clientX);
    console.log('startPoint', startPoint);
    handleManager.addHandle(container.itemContent, handleManager.moveEvent, touchEvent.touching);
  },
  touching(eve) {
    let _eve = eve || window.event;
    const movingPoint = _eve.clientX;
    const direction = movingPoint > startPoint ? 1 : -1;
    if (direction > 0) {
      addClass(container.itemContent, 'turnLeft');
      removeClass(container.itemContent, 'turnRight');
    } else {
      addClass(container.itemContent, 'turnRight');
      removeClass(container.itemContent, 'turnLeft');
    }
    console.log('touching', direction);
  },
  touchEnd(eve) {
    let _eve = eve || window.event;
    console.log('touchEnd', _eve.clientX);
    handleManager.removeHandle(container.itemContent, handleManager.moveEvent, touchEvent.touching);
  }
};
handleManager.addHandle(container.itemContent, handleManager.startEvent, touchEvent.touchStart);
handleManager.addHandle(container.itemContent, handleManager.stopEvent, touchEvent.touchEnd);

function hasClass(obj, cls) {
  return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}
function addClass(obj, cls) {
  if (!hasClass(obj, cls)) {
    obj.className += ` ${cls}`;
  }
}
function removeClass(obj, cls) {
  if (hasClass(obj, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    obj.className = obj.className.replace(reg, ' ');
  }
}
// function rotate(obj, dir) {
//   let angle = 0;
//   obj.style.transform = `rotate3d(0, 1, 0, ${angle}deg)`;
// }

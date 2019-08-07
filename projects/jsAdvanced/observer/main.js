import './index.html';
import './style.css';

const data = {
  name: 'Alice'
}

function observer(obj) {
  if (!obj || typeof obj !== 'object') {
    return;
  }
  defineObjProperty(obj, 'name', data.name);
}

function defineObjProperty(obj, props, value) {
  Object.defineProperty(obj, props, {
    get() {
      return val;
    },
    set(val) {
      return 'set ' + val;
    }
  })
}

observer(data);
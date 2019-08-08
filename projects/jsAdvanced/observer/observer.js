

function observer(obj) {
  if (!obj || typeof obj !== 'object') {
    return;
  }
  Object.keys(obj).forEach(key => {
    initWatcher(obj, key);
    defineObjProperty(obj, key, obj[key]);
  })
  console.log(obj);
}
// 初始化数据订阅池
function initWatcher(obj, key) {
  obj._watchers = {
    [key]: []
  };
}
// 设置对象成员的访问器属性，监听数据变化
function defineObjProperty(obj, key, value) {
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log('对方已更新，快更新');
      return value;
    },
    set(newVal) {
      console.log(key + ' 已发生变化，请注意查收！');
      obj._watchers[key].forEach(item => {
        item.update();
      })
      value = 'set value ' + newVal;
    }
  })
}

// data.name = 'Tom';
// console.log(data.name);
export default observer;
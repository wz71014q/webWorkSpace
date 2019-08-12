// 为data中的每个属性添加getter、setter。数据变化后触发watcher
function observer(obj) {
  const _this = this;
  if (!obj || typeof obj !== 'object') {
    return;
  }
  Object.keys(obj).forEach(key => {
    initWatcher.call(_this, key);
    defineObjProperty.call(_this, obj, key, obj[key]);
  })
}
// 初始化数据订阅池
function initWatcher(key) {
  this._watchers[key] = [];
}
// 设置对象成员的访问器属性，监听数据变化
function defineObjProperty(obj, key, value) {
  observer(value);
  const watchersPool = this._watchers;
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      return value;
    },
    set(newVal) {
      if (newVal !== value) {
        value = newVal;
        Object.keys(watchersPool).forEach(key => {
          watchersPool[key].forEach(item => {
            item.update();
          });
        })
      }
    }
  })
}

export default observer;
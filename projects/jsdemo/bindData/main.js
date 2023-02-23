import './index.html';
import observer from './observer';
import getElement from './complier';

function Wue(options = {}) {
  this.$el = document.querySelector(options.el);
  this.$data = options.data;
  this._watchers = {}; // 监听池，存放data和w-model绑定的中每个数据的watcher
  this._observer(this.$data);
  this._complier(this.$el);
}
Wue.prototype._observer = observer;
Wue.prototype._complier = getElement;
// 创建新的Wue实例
const app = new Wue({
  el: '#root',
  data: {
    name: 'Alice',
    age: 18
  }
});
window.app = app;
// 手动修改Data数据，触发UI更新
document.querySelector('.submit').addEventListener('click', function() {
  app.$data.name = 'Tom';
}, false)
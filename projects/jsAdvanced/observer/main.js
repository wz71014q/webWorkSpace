import './index.html';
import './style.css';
import Watcher from './watcher';
import observer from './observer';
import getElement from './complier';
// TODO:　observer与complier已实现，缺少watcher
function Wue(options = {}) {
  this.$el = document.querySelector(options.el);
  this.$data = options.data;
  this._watchers = {};
  this._observer(this.$data);
  this._complier(this.$el);
}
Wue.prototype._observer = observer;
Wue.prototype._complier = getElement;
const app = new Wue({
  el: '#root',
  data: {
    name: 'Alice',
    age: 18
  }
});
document.querySelector('.submit').addEventListener('click', function() {
  app.$data.name = 'Tom';
}, false)
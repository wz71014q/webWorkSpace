function Watcher({el, vm, val, attr} = options) {
  this.el = el;
  this.vm = vm;
  this.val = val;
  this.attr = attr;
  this.update();
}
Watcher.prototype.update = function () {
  // 更新input值
  console.log('watcher', this);
  this.el[this.attr] = this.vm.$data[this.val];
  // this.vm.$data[this.val] = this.el[this.attr];
}

export default Watcher;
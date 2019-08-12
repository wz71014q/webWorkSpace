// Watcher，个人觉得更应该叫Writer。用来将complier与observer连接起来。当input数据发生变化时，触发input事件，再触发watcher，修改data中的数据
// 反过来，data数据变化，触发setter，进而触发watcher，修改input的数据
function Watcher({el, vm, val, attr} = options) {
  this.el = el;
  this.vm = vm;
  this.val = val;
  this.attr = attr; // dom获取值，如value获取input的值 / innerHTML获取dom的值
  this.update();
}
Watcher.prototype.update = function () {
  // 更新input值
  this.el[this.attr] = this.vm.$data[this.val];
}

export default Watcher;
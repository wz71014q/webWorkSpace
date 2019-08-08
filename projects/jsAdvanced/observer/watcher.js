function Watcher(el, vm, val, attr) {
  this.el = el;
  this.vm = vm;
  this.val = val;
  this.attr = attr;
}
Watcher.prototype.update = function () {
  this.el[this.attr] = this.vm.$data[this.val];
}
Watcher.prototype.addSub = function() {
  this.subs.push(sub);
}
Watcher.prototype.update = function() {
  this.subs.forEach((sub) => {
    sub.update();
  })
}

export default Watcher;
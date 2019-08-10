// 手写发布订阅模式
function Emitter(options = {}) {
  this.name = options.name;
  this.subscriber = {
    [this.name]: []
  }; // 订阅者列表
}

Emitter.prototype.$on = function(sub) {
  this.subscriber[this.name].push(sub);
}
Emitter.prototype.$emit = function() {
  this.subscriber[this.name].forEach(suber => {
    suber.apply(this, arguments);
  });
}

export default Emitter;
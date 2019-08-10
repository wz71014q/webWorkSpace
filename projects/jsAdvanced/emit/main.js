import './index.html';

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


// 订阅者：
const alice = new Emitter({
  name: 'Alice'
});
console.log('alice, ', alice);
alice.$on((item) => {
  console.log('alice订阅的鞋子：', item.shoes);
});
alice.$on((item) => {
  console.log('alice订阅的裙子：', item.skirt);
});

const tom = new Emitter({
  name: 'Tom'
});
console.log('Tom, ', tom);
tom.$on((item) => {
  console.log('Tom, ', tom);
  console.log('tom订阅的鞋子：', item.shoes);
});
tom.$on((item) => {
  console.log('tom订阅的裙子：', item.skirt);
});

document.querySelector('.trigger').addEventListener('click', () => {
  alice.$emit({shoes: 'red', skirt: 'blue'});
  tom.$emit({shoes: 'black', skirt: 'red'});
})
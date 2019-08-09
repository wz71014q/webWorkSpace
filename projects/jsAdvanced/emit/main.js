import './index.html';

// 手写发布订阅模式
function Emiter() {
  this.subscriber = []; // 订阅者列表
}

Emiter.prototype.addSub = function(sub) {
  this.subscriber.push(sub);
}
Emiter.prototype.trigger = function() {
  this.subscriber.forEach(suber => {
    suber.apply(this, arguments);
  });
}


// 订阅者：
const alice = new Emiter();
alice.addSub((item) => {
  console.log('我订阅的鞋子：', item.shoes);
});
alice.addSub((item) => {
  console.log('我订阅的裙子：', item.skirt);
});

document.querySelector('.trigger').addEventListener('click', function() {
  alice.trigger({shoes: 'red', skirt: 'blue'});
})
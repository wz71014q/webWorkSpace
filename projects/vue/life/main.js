import Vue from 'vue';
import App from './App.vue';
import router from './router';

const $vm = new Vue({
  el: '#root',
  components: { App },
  template: '<App/>',
  router
});
Vue.use($vm);

console.log('start');
setTimeout(() => {
  console.log('timeout');
}, 0);
$vm.$nextTick(() => {
  console.log('$vm.nextTick 1');
});
requestAnimationFrame(() => {
  console.log('requestAnimationFrame');
});
new Promise((resolve, reject) => {
  console.log('new promise');
  resolve('resolved');
}).then(res => {
  console.log(res);
})
process.nextTick(() => {
  console.log('process nextTick');
})
console.log('end');
$vm.$nextTick(() => {
  console.log('$vm.nextTick 2');
});
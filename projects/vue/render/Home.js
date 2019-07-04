import Vue from 'vue';
import Hello from './Hello';
import HelloSelf from './Hello/hello';

Vue.component(Hello.name, Hello);
Vue.use(Hello);

const Constructor = Vue.extend({
  template: '<div id="home" >我是Home组件<Hello>hello world</Hello></div>',
  name: 'Home'
});
const vm = new Constructor().$mount('#mount');
// console.log(vm);
// console.log(HelloSelf);
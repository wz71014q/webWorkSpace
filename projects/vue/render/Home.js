import Vue from 'vue';
import Hello from './hello';

Vue.component(Hello.name, Hello);

const Constructor = Vue.extend({
  template: '<div id="home" >我是Home组件<Hello>hello world</Hello></div>'
});
const vm = new Constructor().$mount('#mount');
console.log(vm);
console.log(Hello);
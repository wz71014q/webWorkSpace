import Vue from 'vue';
import Home from './example/Home';
import Dialog from './src/index';

Vue.use(Dialog);

const $vm = new Vue({
  el: '#app',
  components: {Home},
  template: '<Home/>'
});
Vue.use($vm);

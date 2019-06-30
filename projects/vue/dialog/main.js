import Vue from 'vue';
import Home from './excample/Home';
import Dialog from './src/index';

Vue.use(Dialog);

const $vm = new Vue({
  el: '#app',
  components: {Home},
  template: '<Home/>'
});
Vue.use($vm);

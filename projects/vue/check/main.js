import Vue from 'vue';
import Home from './excample/Home';

const $vm = new Vue({
  el: '#app',
  components: {Home},
  template: '<Home/>'
});
Vue.use($vm);

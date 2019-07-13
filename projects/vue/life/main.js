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

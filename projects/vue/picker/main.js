import Vue from 'vue';
import App from './App.vue';
import Picker from './index';

Vue.use(Picker);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});

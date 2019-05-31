import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import { Picker } from './index';
import store from './store';

Vue.use(Vuex);
Vue.use(Picker);

const $vm = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store
});
Vue.use($vm);

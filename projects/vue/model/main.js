import Vue from 'vue';
import Vuex from 'vuex';
import father from './father.vue';

Vue.use(Vuex);

const $vm = new Vue({
  el: '#app',
  components: { father },
  template: '<father/>',
});
Vue.use($vm);

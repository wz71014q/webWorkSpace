import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './src/router';

Vue.use(Vuex);

const vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
vm.$on((res) => {
  console.log(res);
});
Vue.use(vm);

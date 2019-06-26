import Vue from 'vue';
import Vuex from 'vuex';
import App from './src/App';
import router from './src/router';
import './src/style/index.scss';

Vue.use(Vuex);

const $vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
Vue.use($vm);

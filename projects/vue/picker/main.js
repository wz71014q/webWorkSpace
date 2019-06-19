import Vue from 'vue';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';
import App from './src/App';
import { Picker } from './index';
import store from './src/store';
import router from './src/router';
import './src/style/index.scss';


Vue.use(Vuex);
Vue.use(Picker);
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'zh_CN',
  messages: {
    en: require('./src/i18n/en'),
    zh_CN: require('./src/i18n/zh_CN.js')
  }
});

const $vm = new Vue({
  el: '#app',
  i18n,
  store,
  router,
  components: { App },
  template: '<App/>'
});
Vue.use($vm);

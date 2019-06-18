import VueI18n from 'vue-i18n'; // 国际化
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import store from './store';


Vue.use(VueI18n);
Vue.use(Vuex);

/**
 * @constant i18n
 * @description 实例化i18n
 */
const i18n = new VueI18n({
  locale: 'zh_CN', // 语言标识
  messages: {
    en: require('../src/i18n/en'),
    zh_CN: require('../src/i18n/zh_CN'),
  },
});

/**
 * @constant vm
 * @description 实例化vue
 */
const vm = new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>',
});
Vue.use(vm);

import Vue from 'vue';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import Vant from 'vant';
import 'vant/lib/index.css';
import 'element-ui/lib/theme-chalk/index.css';
import root from './root.vue';

// element slider
Vue.use(Vuex);
Vue.use(ElementUI);
Vue.use(Vant);

const $vm = new Vue({
  el: '#app',
  components: { root },
  template: '<root/>',
});
Vue.use($vm);

import Vue from 'vue';
import Father from './src/Father';

const $vm = new Vue({
  el: '#app',
  components: { Father },
  template: '<Father/>'
});
Vue.use($vm);

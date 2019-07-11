import Vue from 'vue';
import Father from './Father';

const $vm = new Vue({
  el: '#root',
  components: { Father },
  template: '<Father/>'
});
Vue.use($vm);

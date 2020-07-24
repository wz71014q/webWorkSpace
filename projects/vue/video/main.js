import Vue from 'vue';
import VConsole from 'vconsole';
import 'video.js/dist/video-js.css';
import App from './App';

const vconsole = new VConsole(); // eslint-disable-line

const $vm = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});
Vue.use($vm);

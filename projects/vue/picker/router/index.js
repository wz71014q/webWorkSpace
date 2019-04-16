import Vue from 'vue';
import Router from 'vue-router';
import picker from '../src/picker.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'picker',
      component: picker,
    },
  ],
});

import Vue from 'vue';
import Router from 'vue-router';

const Home = r => require.ensure([], () => r(require('../view/Home')), 'listener/js/home');
const Menu = r => require.ensure([], () => r(require('../view/Menu')), 'listener/js/Menu');

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/Home' },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Menu',
      name: 'Menu',
      component: Menu,
    }
  ],
});

export default router;

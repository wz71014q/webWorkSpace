import Vue from 'vue';
import Router from 'vue-router';

const Home = r => require.ensure([], () => r(require('../view/Home')), 'Index/js/home');
const Index = r => require.ensure([], () => r(require('../view/Index')), 'Index/js/index');

Vue.use(Router);

const router = new Router({
  routes: [
    { path: '/', redirect: '/Home' },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index,
    }
  ],
});

export default router;

import Vue from 'vue';
import Router from 'vue-router';
// 页面统一使用懒加载，格式如下
const Home = r => require.ensure([], () => r(require('../pages/Home')), 'shoplist/js/home');
const login = r => require.ensure([], () => r(require('../pages/login')), 'shoplist/js/login');
const more = r => require.ensure([], () => r(require('../pages/more')), 'shoplist/js/more');
const shop = r => require.ensure([], () => r(require('../pages/shop')), 'shoplist/js/shop');

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
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop,
    },
    {
      path: '/Error',
      name: 'Error',
      component: Error,
    },
    {
      path: '/more',
      name: 'more',
      component: more,
    },
  ],
});

export default router;

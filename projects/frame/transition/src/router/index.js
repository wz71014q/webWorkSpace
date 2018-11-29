import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import HomeChildA from '@/components/HomeChildA';
import HomeChildB from '@/components/HomeChildB';
import Show from '@/components/Show';
import Mode from '@/components/Mode';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/',
      redirect: 'Home',
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      redirect: 'HomeChildA',
      children: [
        {
          path: '/HomeChildA',
          name: 'HomeChildA',
          component: HomeChildA,
        },
        {
          path: '/HomeChildB',
          name: 'HomeChildB',
          component: HomeChildB,
        },
      ],
    },
    {
      path: '/Mode',
      name: 'Mode',
      component: Mode,
    },
    {
      path: '/Show',
      name: 'Show',
      component: Show,
    },
  ],
});

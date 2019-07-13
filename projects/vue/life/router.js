import Vue from 'vue';
import Router from 'vue-router';

const Father = () => import('./Father');
const Grand = () => import('./Grand');

Vue.use(Router);

const routes = [
  { path: '/', redirect: '/Father' },
  {
    name: 'Father',
    path: '/Father',
    component: Father
  },
  {
    name: 'Grand',
    path: '/Grand',
    component: Grand
  }
];

const router = new Router({routes});

export default router;

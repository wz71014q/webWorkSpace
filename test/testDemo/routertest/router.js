import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './Home.vue';
import Menu from './Menu.vue';

const routes = [
  { name: 'Home', path: '/Home', component: Home },
  { name: 'Menu', path: '/Menu', component: Menu }
];

Vue.use(VueRouter);

export default new VueRouter({ routes });


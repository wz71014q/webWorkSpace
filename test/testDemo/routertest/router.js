import Vue from 'vue';
import VueRouter from 'vue-router';
import Child from './child.vue';

const routes = [
  { name: 'child', path: '/child', component: Child }
];

Vue.use(VueRouter);

export default new VueRouter({ routes });


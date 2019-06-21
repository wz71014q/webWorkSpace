import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({ mode: 'history', routes });

function bustCache() {
  console.log('5');
}

export function beforeEach(to, from, next) {
  if (to.meta.shouldBustCache) {
    bustCache();
  }
  next();
}

router.beforeEach((to, from, next) => beforeEach(to, from, next));

export default router;


import Home from '../view/Home';
import Menu from '../view/Menu';
import Detail from '../view/Detail';

const routes = [
  { name: 'Home', path: '/', component: Home },
  {
    name: 'Detail',
    path: '/Detail',
    component: Detail,
    beforeEnter: (to, from, next) => {
      if (from.name === 'Home') {
        console.log('i\'m back');
      }
      next();
    }
  },
  {
    name: 'Menu',
    path: '/Menu',
    component: Menu,
    meta: {
      shouldBustCache: true
    }
  }
];


export default routes;


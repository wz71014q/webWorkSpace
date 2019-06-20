import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import App from './App';
import Home from './Home';
import Menu from './Menu';

jest.mock('./Home', () => ({
  name: 'Home',
  render: h => h(
    'div',
    {
      class: {
        show: true
      },
      attrs: {
        id: 'txt'
      }
    },
    'i\'m render text'
  )
}));

const routes = [
  { name: 'Home', path: '/Home', component: Home },
  { name: 'Menu', path: '/Menu', component: Menu }
];
const router = new VueRouter({ routes });

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('router', () => {
  it('App router test', () => {
    const wrapper = mount(App, { localVue, router });
    router.push({ name: 'Menu' });
    expect(wrapper.find(Menu).exists()).toBe(true);
    router.push({ name: 'Home' });
    expect(wrapper.find(Home).exists()).toBe(true);
    expect(wrapper.find('#txt').text()).toBe('i\'m render text');
    expect(wrapper.vm.$router.currentRoute.name).toBe('Home');
  });
});
describe('Menu mock router', () => {
  it('renders a username from query string', () => {
    const username = 'alice';
    const wrapper = shallowMount(Menu, {
      mocks: {
        $route: {
          params: { username }
        }
      }
    });
    expect(wrapper.find('.username').text()).toBe(username);
  });
});

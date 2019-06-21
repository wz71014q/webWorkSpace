import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import App from '../../App';
import Home from '../view/Home';
import Menu from '../view/Menu';
import Detail from '../view/Detail';

jest.mock('../view/Detail', () => ({
  name: 'Detail',
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
  { name: 'Home', path: '/', component: Home },
  { name: 'Menu', path: '/Menu', component: Menu },
  { name: 'Detail', path: '/Detail', component: Detail }
];
const router = new VueRouter({ routes });

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('router', () => {
  it('App router test', () => {
    const wrapper = mount(App, { localVue, router });
    router.push({ name: 'Menu' });
    expect(wrapper.find(Menu).exists()).toBe(true);
    router.push({ name: 'Detail' });
    expect(wrapper.find(Detail).exists()).toBe(true);
    expect(wrapper.find('#txt').text()).toBe('i\'m render text');
    expect(wrapper.vm.$route.name).toBe('Detail');
  });
});
describe('Menu mock router', () => {
  it('renders a username from query string', () => {
    const msg = 'alice';
    const shallowWrapper = shallowMount(Menu, {
      mocks: {
        $route: {
          params: { msg }
        }
      }
    });
    expect(shallowWrapper.find('.username').text()).toBe(msg);
  });
});

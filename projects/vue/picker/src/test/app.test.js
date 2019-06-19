import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import App from '../App';
import Home from '../view/Home.vue';
import router from '../router';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('App', () => {
  it('renders a child component via routing', () => {
    const wrapper = mount(App, { localVue, router });
    router.push({ name: 'Home' });
    expect(wrapper.find(Home).exists()).toBe(true);
  });
});

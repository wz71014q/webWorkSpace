import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import router from './router';
import Father from './father';
import Child from './child';

jest.mock('./child.vue', () => ({
  name: 'child',
  render: h => h('div')
}));

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('Father', () => {
  it('renders a child component via routing', () => {
    const wrapper = mount(Father, { localVue, router });
    router.push({ name: 'child' });
    expect(wrapper.find(Child).exists()).toBe(true);
  });
});

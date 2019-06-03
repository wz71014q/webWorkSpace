
import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import mystore from '../projects/vue/picker/store';
import picker from '../testDemo/picker.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

let wrapper;

describe('vue组件测试', () => {
  let actions;
  let store;
  beforeEach(() => { // 每次测试前确保我们的测试实例都是是干净完整的。返回一个wrapper对象
    actions = {
      actionClick: jest.fn(),
      actionInput: jest.fn()
    };
    store = new Vuex.Store({
      state: {},
      actions
    });
    wrapper = shallowMount(mystore.actions, { store, localVue });
  });
  it('renders a div', () => {
    expect(wrapper.contains('div')).toBe(true);
  });
  test('Should have two input & one button', () => {
    const img = wrapper.find('.img'); // 通过find来查找dom或者vue实例
    expect(wrapper.classes()).toContain('img');
    expect(img.length).toBe(1); // 应该有个.img
    expect(img).toBeTruthy(); // 应该有一个登录按钮。 只要断言条件不为空或这false，toBeTruthy就能通过。
  });
});

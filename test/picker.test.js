
import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import mystore from '../projects/vue/picker/store';
import picker from '../testDemo/picker.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

let wrapper;

describe('picker测试', () => {
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
});

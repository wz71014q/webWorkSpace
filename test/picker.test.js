
import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import picker from '../testDemo/picker.vue';

// 创建一个扩展的 `Vue` 构造函数
const localVue = createLocalVue();

// 正常安装vuex插件
localVue.use(Vuex);

let wrapper;

describe('picker测试', () => {
  let actions;
  let store;
  beforeEach(() => { // 每次测试前确保我们的测试实例都是是干净完整的。返回一个wrapper对象
    store = new Vuex.Store({
      state: {},
      actions
    });
    wrapper = shallowMount(picker, { store, localVue });
  });
  it('renders a div', () => {
    expect(wrapper.contains('div')).toBe(true);
  });
});
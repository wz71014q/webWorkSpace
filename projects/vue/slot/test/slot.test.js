import Vue from 'vue';
import { mount } from '@vue/test-utils';
import child from '../src/child';

let wrapper;
let vm;

const Item = {
  template: `
      <div>
          <div class="item" @click="openItem">itemChild</div>
      </div>
  `,
  data() {
      return {
      }
  },
  methods: {
    $_closeItem() {
      this.$emit('close');
      console.log('render click');
    },
    openItem() {
      this.$parent.$_open(this._uid);
      console.log('openItem');
    },
    $_openItem() {
      this.$emit('_openItem');
    }
  }
}

const Constructor = Vue.extend(Item);

console.log(new Constructor());

const childItem = new Constructor().$mount();

describe('check child', () => {
  afterEach(() => {
    vm && vm.$destroy();
    wrapper && wrapper.destroy();
  });
  it('child', () => {
    wrapper = mount(child, {
      slots: {
        default: [new Constructor()],
      }
    });
    expect(wrapper.find('.item').text()).toBe('itemChild');
    wrapper.find('.item').trigger('click');
    // console.log(wrapper.emitted());
    // expect(wrapper.emitted().input.length).toBe(1);
    // expect(wrapper.element).toMatchSnapshot();
  });
});

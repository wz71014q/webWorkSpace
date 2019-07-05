import Vue from "vue";
import Home from '../src/Home';

let wrapper;
let vm;

const Item = {
  template: `<h1 class="itemH" @click="toggle">getFather</h1>`,
  name: 'ExtendItem',
  data() {
    return {
      show: true
    };
  },
  methods: {
    toggle() {
      this.$parent.open(this._uid);
    },
    getChild() {
      console.log('getChild');
    }
  }
}

const App = {
  template: `<Home><Item/></Home>`,
  name: 'ExtendHome',
  components: {
    Home,
    Item
  },
  data() {
    return {
    };
  },
  methods: {
  }
}

const Constructor = Vue.extend(App);
vm = new Constructor().$mount();

describe('slot', () => {
  afterEach(() => {
    vm && vm.$destroy();
    wrapper && wrapper.destroy();
  }, 100);
  it('slot', () => {
    // console.log(vm.$el.querySelector('.text').textContent);
    // console.log(vm.$el.querySelector('.text').innerHTML);
    expect(vm.$el.querySelector('.itemH').innerHTML).toEqual('getFather');
  });
});

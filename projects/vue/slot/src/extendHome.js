import Vue from "vue";
import Home from './Home.vue';
import ExtendItem from './extendItem';

const Item = {
  template: `<Home><ExtendItem/></Home>`,
  name: 'ExtendHome',
  components: {
    Home,
    ExtendItem
  },
  data() {
    return {
    };
  },
  methods: {
  }
}

const Constructor = Vue.extend(Item);
const vm = new Constructor().$mount('#root');

export default vm;
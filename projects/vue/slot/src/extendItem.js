// import Vue from "vue";

const Item = {
  template: `<h1 @click="toggle">getFather</h1>`,
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

// const Constructor = Vue.extend(Item);
// const vm = new Constructor().$mount('');

export default Item;
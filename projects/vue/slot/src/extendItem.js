import Vue from "vue";

// 使用构造函数创建组件，手动挂载s

const Item = {
  template: `<div class="item" @click="openItem">itemChild</div>`,
  name: 'Item',
  data() {
    return {
    };
  },
  methods: {
    $_closeItem() {
      this.$emit("close");
      console.log("render click");
    },
    openItem() {
      this.$parent.$_open(this._uid);
      console.log("openItem");
    },
    $_openItem() {
      this.$emit("_openItem");
    }
  }
}

const Constructor = Vue.extend(Item);
const vm = Constructor;

export default vm;
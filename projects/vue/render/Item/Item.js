import Vue from "vue";

// 使用构造函数创建组件，手动挂载s

const Constructor = Vue.extend({
  template: `<div class="item" @click="openItem">itemChild</div>`,
  name: 'Item',
  data() {
    return {
      enthusiasm: this.initialEnthusiasm
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
});
const vm = new Constructor().$mount("#mountnode");
// console.log(vm);

Vue.component("ele", {
  template:
    '<div id="element" :class="{show: show}" @click="handleClick">我是ele组件</div>',
  data() {
    return {
      show: true
    };
  },
  methods: {
    handleClick() {
      console.log("clicked");
    }
  }
});

export default vm;
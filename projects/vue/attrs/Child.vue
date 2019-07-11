<template>
  <div>
    <p>name: {{ name}}</p>
    <p>Child的$attrs是父组件中的不作为props传入的绑定值: {{ $attrs }}</p>
    <p>可以用$attrs将父组件的属性值传给Child的子组件</p>
    <grand-child v-bind="$attrs"></grand-child>
  </div>
</template>

<script>
import GrandChild from './GrandChild';

export default {
  name: 'Child',
  components: {
    GrandChild
  },
  data() {
    return {
      width: 300
    };
  },
  // 父组件中给Child组件绑定的的非props属性将作为普通HTML属性渲染出来（除了class和style, id可以继承），如<div age="18" sex="女" height="158" title="A Girl"></div>，如果不想这样，就设置为false
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default() {
        return '';
      }
    }
  },
  created() {
    console.log(this.$attrs);
  }
};
</script>

<style scoped>
#child {
  border: aqua solid 1px;
}
</style>

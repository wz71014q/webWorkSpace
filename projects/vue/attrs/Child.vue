<template class="border">
  <div>
    <p>name: {{ name}}</p>
    <p>GrandChild的$attrs: {{ $attrs }}</p>
    <grand-child v-bind="$attrs"></grand-child>
  </div>
</template>
<script>
import GrandChild from './GrandChild';

export default {
  components: {
    GrandChild
  },
  inheritAttrs: false, // 可以关闭自动挂载到组件根元素上的没有在props声明的属性
  props: {
    name: String // name作为props属性绑定
  },
  created() {
    console.log(this.$attrs);
  }
};
</script>
<template>
  <div>
    <p>age: {{ age}}</p>
    <p>childCom2: {{ $attrs }}</p>
  </div>
</template>

<script>

export default {
  name: 'GrandChild',
  inheritAttrs: false,
  props: {
    age: {
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
<template>
  <div>
    <p @click="setFatherData">age: {{ age}}</p>
    <p @click="onShow">childCom2: {{ $attrs }}</p>
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
    console.log(this.$listeners);
  },
  methods: {
    onShow() {
     this.$emit('getChildData');
    },
    setFatherData() {
     this.$emit('getDataFromChild');
    }
  }
};
</script>
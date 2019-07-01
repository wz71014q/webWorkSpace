<template>
  <div id="app">
    hello world
    <div @click="showDialog">click Me</div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
    };
  },
  methods: {
    showDialog() {
      this.$showDialog({
        content: '您确定吗？',
        confirmText: '好的',
        cancelText: '不行'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

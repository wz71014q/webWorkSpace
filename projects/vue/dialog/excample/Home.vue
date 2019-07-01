<template>
  <div id="app">
    hello world
    <div class="btn" @click="showDialog">click Me</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    showDialog() {
      this.$showDialog({
        content: "您确定吗？",
        confirmText: "好的",
        cancelText: "不行",
        confirm: () => {
          console.log('confirm do something');
        },
        cancel: () => {
          console.log('cancel do something');
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  width: 200px;
  height: 100px;
  background: aqua;
  text-align: center;
  &::after {
    content: "";
    height: 100%;
    width: 0;
    display: inline-block;
    vertical-align: middle;
  }
}
</style>

<template>
  <div>
    <div class="btn" @click="showConfirm">click Me</div>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {
  },
  data() {
    return {
      showdialog: false
    };
  },
  methods: {
    showConfirm() {
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
    },
    cancel() {
      this.showdialog = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  width: 200px;
  height: 100px;
  text-align: center;
  background: aqua;
  &::after {
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
    content: "";
  }
}
</style>

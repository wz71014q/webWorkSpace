<template>
  <div>
    <div class="btn" @click="showConfirm">click Me</div>
    <Dialog :showDialog = "showdialog" @cancel="cancel"/>
  </div>
</template>

<script>
import Dialog from '../src/Dialog';

export default {
  name: "Home",
  components: {
    Dialog
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

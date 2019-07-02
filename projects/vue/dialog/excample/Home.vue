<template>
  <div>
    <div class="btn" @click="showConfirm">click Me</div>
    <Dialog :showDialog = "showdia" @cancel="cancel"/>
  </div>
</template>

<script>
import Dialog from '../src/transition';

export default {
  name: "Home",
  components: {
    Dialog
  },
  data() {
    return {
      showdia: false
    };
  },
  methods: {
    showConfirm() {
      this.showdia = true;
      // this.$showDialog({
      //   content: "您确定吗？",
      //   confirmText: "好的",
      //   cancelText: "不行",
      //   confirm: () => {
      //     console.log('confirm do something');
      //   },
      //   cancel: () => {
      //     console.log('cancel do something');
      //   }
      // });
    },
    cancel() {
      this.showdia = false;
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

<template>
  <div class="mask">
    <div class="content">
      <p>{{ title }}</p>
      <div class="btn">
        <div @click="cancel">{{ cancelText }}</div>
        <div @click="confirm">{{ confirmText }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  data() {
    return {
      title: '标题',
      cancelText: '取消',
      confirmText: '确认'
    }
  },
  destroyed() {
    document.removeChild(this.$el);
  },
  methods: {
    confirm() {
      console.log('confirm');
      this.$destroy();
    },
    cancel() {
      console.log('cancel');
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.mask{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background: rgba(0,0,0,.35);
  .content {
    margin: 0 auto;
    width: 400px;
    height: 300px;
    background: #fff;
    border-radius: 10px;
    &::after {
      content: '';
      height: 100%;
      width: 0;
      display: inline-block;
      vertical-align: middle;
    }
    p {
      height: 70%;
      &::after {
        content: '';
        height: 100%;
        width: 0;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
  .btn {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 30%;
    div {
      height: 100%;
      flex-grow: 1;
      border: 1px solid #000;
    }
  }
}
</style>
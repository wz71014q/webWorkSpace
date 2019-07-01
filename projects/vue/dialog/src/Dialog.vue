<template>
    <div class="mask">
      <div class="pop-wrapper">
        <span>{{ content }}</span>
        <div @click="confirm">{{ confirmText }}</div>
        <div @click="cancel">{{ cancelText }}</div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Dialog',
  data() {
    return {
      
    }
  },
  props: {
    content: {
      type: String,
      default() {
        return 'title';
      },
    },
    confirmText: {
      type: String,
      default() {
        return '确定';
      },
    },
    cancelText: {
      type: String,
      default() {
        return '取消';
      }
    },
    animate: {
      type: Boolean,
      default() {
        return true;
      }
    }
  },
  methods: {
    confirm() {
      this.$emit('confirm');
    },
    cancel() {
      this.$emit('cancel');
    }
  },
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
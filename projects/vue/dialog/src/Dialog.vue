<template>
  <transition name="fade">
    <div class="mask" v-show="showDialog">
      <transition name="slide">
        <div class="wrapper" v-show="showDialog">
          <p>{{ content }}</p>
          <div class="btn">
            <div @click="confirm">{{ confirmText }}</div>
            <div @click="cancel">{{ cancelText }}</div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Dialog",
  data() {
    return {};
  },
  props: {
    showDialog: {
      type: Boolean,
      default() {
        return false;
      }
    },
    content: {
      type: String,
      default() {
        return "title";
      }
    },
    confirmText: {
      type: String,
      default() {
        return "确定";
      }
    },
    cancelText: {
      type: String,
      default() {
        return "取消";
      }
    },
    methods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    confirm() {
      this.$emit("confirm");
    },
    cancel() {
      this.$emit("cancel");
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  background: rgba(0, 0, 0, 0.35);
  .wrapper {
    margin: 0 auto;
    width: 400px;
    height: 300px;
    background: #fff;
    border-radius: 10px;
    p {
      height: 70%;
      &::after {
        content: "";
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
    border-top: 1px solid #000;
    div {
      height: 100%;
      flex-grow: 1;
      &::after {
        content: "";
        height: 100%;
        width: 0;
        display: inline-block;
        vertical-align: middle;
      }
    }
    div ~ div {
      border-left: 1px solid #000;
    }
  }
  .slide-enter-active {
    animation: slide-in 3s;
  }
  .slide-leave-active {
    animation: slide-out 3s;
  }
  @keyframes slide-in {
    0% {
      transform: translateY(50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  @keyframes slide-out {
    0% {
      transform: translateY(0px);
      opacity: 1;
    }
    100% {
      transform: translateY(50px);
      opacity: 0;
    }
  }
}
</style>
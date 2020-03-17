<template>
  <transition name="mask">
    <div class="mask" v-show="showDialog" @click.self="cancel">
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
    handle: {
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
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  text-align: center;
  background: rgba(0, 0, 0, 0.35);
  .wrapper {
    width: 60%;
    max-width: 300px;
    height: 20%;
    margin: 0 auto;
    border-radius: 10px;
    background: #fff;
    p {
      height: 70%;
      &::after {
        display: inline-block;
        width: 0;
        height: 100%;
        vertical-align: middle;
        content: "";
      }
    }
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 30%;
    border-top: 1px solid #000;
    div {
      flex-grow: 1;
      height: 100%;
      &::after {
        display: inline-block;
        width: 0;
        height: 100%;
        vertical-align: middle;
        content: "";
      }
    }
    div ~ div {
      border-left: 1px solid #000;
    }
  }
}
.mask-enter-active {
  animation: mask-in 0.5s;
}
.mask-leave-active {
  animation: mask-out 0.5s;
}
@keyframes mask-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes mask-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.slide-enter-active {
  animation: slide-in 0.5s;
}
.slide-leave-active {
  animation: slide-out 0.5s;
}
@keyframes slide-in {
  0% {
    transform: translate3d(0, 50px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes slide-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, 50px, 0);
    opacity: 0;
  }
}
</style>
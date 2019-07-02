<template>
  <div>
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
  </div>
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
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  background: rgba(0, 0, 0, 0.35);
  .wrapper {
    margin: 0 auto;
    width: 60%;
    height: 20%;
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
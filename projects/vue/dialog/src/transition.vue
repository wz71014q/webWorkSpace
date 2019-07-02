<template>
  <transition name="maskShow">
    <div
      class="mask"
      v-show="showDialog"
      @click.self="cancel">
    </div>
  </transition>
</template>

<script>
export default {
  name: "Dialog",
  props: {
    showDialog: {
      type: Boolean,
      default() {
        return false;
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
  width: 100%;
  height: 100%;
  text-align: center;
  background: rgba(0, 0, 0, 0.35);
  .maskShow-enter,
  .maskShow-leave-to {
    opacity: 0;
  }
  .maskShow-enter-active,
  .maskShow-leave-active {
    transition: all 3s;
  }
  .maskShow-enter-to,
  .maskShow-leave {
    opacity: 1;
  }
}
</style>

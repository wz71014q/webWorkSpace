<template>
  <div>
    <ul>
      <li :name="itemName" @click="change" :class="{gray: disabled, color: checked}">
        <slot></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Check",
  data() {
    return {};
  },
  props: {
    disabled: {
      type: Boolean,
      default() {
        return false;
      }
    },
    checked: {
      type: Boolean,
      default() {
        return false;
      }
    },
    itemName: {
      type: Number,
      default() {
        return 0;
      }
    }
  },
  methods: {
    change(event) {
      this.$emit("input", this.itemName);
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.gray {
  opacity: 0.5;
}
</style>
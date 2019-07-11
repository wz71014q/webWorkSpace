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
    return {
      changed: false
    };
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
      type: String,
      default() {
        return '';
      }
    }
  },
  inject: ['groupInstance'],
  methods: {
    change() {
      if (!this.disabled) {
        this.changed ? this.groupInstance.unselect(this.itemName)
          : this.groupInstance.select(this.itemName);
        this.changed = !this.changed
      }
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
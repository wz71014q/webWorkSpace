<template>
  <!-- fnx 多选框组件 -->
  <div class="checkbox" @click="handleClick">
    <div :class="{'active-radio-item': isChecked, 'disable': disable}">
      <span class="icon"></span>
      <span class="label">{{ label }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    selectValue: {
      type: Array,
      default () {
        return []
      }
    },
    label: {
      type: [String, Number],
      default: ''
    },
    disable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  computed: {
    isChecked() {
      if (this.isGroup) {
        return this.$parent.checkedValue.includes(this.label);
      } else {
        return this.selectValue.includes(this.label);
      }
    },
    isGroup () {
      return this.$parent.$options.componentName === 'ComponentsGroup'
    }
  },
  methods: {
    handleClick () {
      if (!this.disable) {
        if (this.isGroup) {
          this.$parent.onGroupChange(this.label, this.isChecked)
        } else {
          this.$emit('change', this.label)
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.checkbox {
  margin: 20px 0;
  .icon {
    display: inline-block;
    box-sizing: border-box;
    width: 0.2rem;
    height: 0.2rem;
    margin-right: 0.12rem;
    border: 0.02rem solid $theme-color;
    vertical-align: middle;
    background-position: center;
    background-size: 180% 180%;
  }
  .label {
    vertical-align: middle;
    overflow-wrap: break-word;
  }
}
.active-radio-item {
  .icon {
    background-color: $theme-color;
    background-image: url(~@/assets/Yes_small_white@3x.png);
  }
}
.disable {
  opacity: 0.6;
}
</style>

<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>

export default {
  name: 'ComponentsGroup',
  componentName: 'ComponentsGroup',
  props: {
    value: {}
  },
  data () {
    return {
      checkedValue: []
    }
  },
  provide () {
    return {
      onGroupChange: this.onGroupChange
    }
  },
  methods: {
    onGroupChange (value, isChecked) {
      if (isChecked) {
        this.checkedValue.splice(this.checkedValue.indexOf(value), 1)
      } else {
        this.checkedValue.push(value)
      }
      this.$emit('input', this.checkedValue)
    }
  }
}
</script>

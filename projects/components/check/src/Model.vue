<template>
  <div>
    <ul>
      <input type="text" :value="value" @input="$emit('input', ($event.target.value))"/>
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
    value: {
      type: String,
      default() {
        return '';
      }
    }
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
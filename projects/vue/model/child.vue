<template>
  <div>
    this is child, {{value}}
    <input type="text" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: 'Child',
  data() {
    return {
    };
  },
  props: {
    value: ''
  },
  computed: {
  },
  mounted() {
  },
  methods: {
    setData() {
    }
  }
};
</script>

<style scoped>
.wrapper{
  color: aquamarine;
  background: #000;
}
</style>

<template>
  <div>
    <p>this is default slot</p>
    <slot></slot>
    <p>this is name slot</p>
    <slot name="nameSlot"></slot>
    <p>this is scope slot {{ title }}</p>
    <slot name="scope" :option="option"></slot>
  </div>
</template>

<script>

export default {
  name: 'Child',
  data() {
    return {
      option: ['apple', 'orange', 'banana']
    };
  },
  props: {
    title: String,
  },
  methods: {
    setData() {
      console.log('data');
    }
  }
};
</script>

<style scoped>

</style>

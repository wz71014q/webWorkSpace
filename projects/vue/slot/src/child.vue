<template>
  <div>
    <p>i'm from child</p>
    <slot>
    </slot>
    <p>i'm from child</p>
    <p>this is name slot</p>
    <slot name="nameSlot"></slot>
    <p>this is name slot</p>
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
  }
};
</script>

<style scoped>

</style>

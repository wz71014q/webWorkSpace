<template>
  <div>
    <p>i'm from child</p>
    <slot>
    </slot>
    <p>i'm from child</p>
    <p>this is name slot</p>
    <slot name="nameSlot"></slot>
    <p>this is name slot</p>
  </div>
</template>

<script>

export default {
  name: 'Child',
  data() {
    return {
    };
  }
};
</script>

<style scoped>

</style>

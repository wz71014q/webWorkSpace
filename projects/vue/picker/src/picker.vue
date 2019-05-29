<template>
  <div>
    hello {{ msg }}
    <img :src='img'>
  </div>
</template>

<script>

export default {
  name: 'Picker',
  data() {
    return {
      msg: 'picker',
      img: require('@/images/book.png')
    };
  }
};
</script>

<style scoped>

</style>

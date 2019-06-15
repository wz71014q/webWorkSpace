<template>
  <div class="picker-home">
    <Slotdemo/>
  </div>
</template>

<script>
import Slotdemo from './src/Slotdemo.vue';

export default {
  name: 'Home',
  components: {
    Slotdemo
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<style scoped>
.btn {
  border: 1px solid aqua;
}
.btn:active {
  background-color: aquamarine;
}
</style>

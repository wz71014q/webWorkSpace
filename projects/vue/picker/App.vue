<template>
  <div class="picker-home">
    this is picker-home
    <Picker/>
  </div>
</template>

<script>
import { Picker } from './index';

export default {
  name: 'Home',
  components: {
    Picker
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style scoped>
.btn {
  border: 1px solid aqua;
}
.btn:active {
  background-color: aquamarine;
}
</style>

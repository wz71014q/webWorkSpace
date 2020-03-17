<template>
  <div class="mode">
    Mode
  </div>
</template>

<script>
export default {
  name: 'Mode',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  methods: {
    setMsg() {
      console.log('msg');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mode {
  color: coral;
  font-size: 80px;
}
</style>

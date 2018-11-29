<template>
  <div class="show">
    show
  </div>
</template>

<script>
export default {
  name: 'Show',
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
.show {
  font-size: 80px;
  color:coral;
}
</style>

<template>
  <div class="mode">
    Child===A
  </div>
</template>

<script>
export default {
  name: 'ChildA',
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
  color: darkgreen;
  font-size: 80px;
}
.child-enter {
  transform: translateY(100px);
  opacity: 0;
}
.child-enter-active {
  transition: all 1s;
}
.child-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.child-leave {
  transform: translateY(0);
  opacity: 1;
}
.child-leave-active {
  transition: all 1s;
}
.child-leave-to {
  transform: translateY(100px);
  opacity: 0;
}
</style>

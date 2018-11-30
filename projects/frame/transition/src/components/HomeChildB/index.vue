<template>
  <div class="mode">
    Child===B
  </div>
</template>

<script>
export default {
  name: 'ChildB',
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
  font-size: 80px;
  color:coral;
}
.child-enter {
  opacity: 0;
  transform: translateY(100px);
}
.child-enter-active {
  transition: all 1s;
}
.child-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.child-leave {
  opacity: 1;
  transform: translateY(0);
}
.child-leave-active {
  transition: all 1s;
}
.child-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
</style>

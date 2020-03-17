<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
  <transition name="slider">
    <router-view/>
  </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  margin-top: 60px;
  color: #2c3e50;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  transition: opacity 1s;
}
.slide-enter-to {
  opacity: 1;
}
.slide-leave {
  opacity: 1;
}
.slide-leave-active {
  transition: opacity 0.5s;
}
.slide-leave-to {
  opacity: 0;
}
</style>

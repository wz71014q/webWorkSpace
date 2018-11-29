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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
  transition: opacity .5s;
}
.slide-leave-to {
  opacity: 0;
}
</style>

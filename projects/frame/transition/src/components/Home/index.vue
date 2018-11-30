<template>
  <div class="home">
    Home
    <h2 class="msg" @click="goChildA">ChildA</h2>
    <h2 class="msg" @click="goChildB">ChildB</h2>
    <div class="foot">
      <span class="foot-child" @click="goShow">Show</span>
      <span class="foot-child" @click="goMode">Mode</span>
    </div>
    <div class="child-holder">
      Child
      <transition name="child">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
    };
  },
  methods: {
    goChildA() {
      this.$router.push({name: 'HomeChildA'});
    },
    goChildB() {
      this.$router.push({name: 'HomeChildB'});
    },
    goMode() {
      this.$router.push({name: 'Mode'});
    },
    goShow() {
      this.$router.push({name: 'Show'});
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  width: 100%;
  height: 300px;
  border: 1px solid #000;
  font-size: 80px;
  color: aquamarine;
}
.msg,.foot {
  font-size: 30px;
  cursor: pointer;
}
.child-holder {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  border: 1px solid #000;
}
/* .slider-enter {
  opacity: 0;
  transform: translateY(100px);
}
.slider-enter-active {
  transition: all 1s;
}
.slider-enter-to {
  opacity: 1;
  transform: translateY(0);
} */

.slider-leave {
  opacity: 1;
  /* transform: translateY(0); */
}
.slider-leave-active {
  transition: all 1s;
}
.slider-leave-to {
  opacity: 0;
  /* transform: translateY(100px); */
}
</style>

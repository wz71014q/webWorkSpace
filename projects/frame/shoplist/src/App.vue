<template>
  <div id='app'>
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'App',
  created: function () {
    console.log('APP初始化')
  },
  mounted: function () {
    this.$router.push('/') /* 刷新回主页 */
  },
  computed: {
  },
  watch: {
    'isBegin': 'controlHandle'
  },
  methods: {
  }
}
</script>
<style scoped>
.onlineMask {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 300;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.3;
}
.hidden {
  display: none;
}
</style>
<style>
@font-face {
  font-family: 'HelveticaNeue-Thin';
  src: url('./font/HelveticaNeue-Thin.otf');
}
html,
body,
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: HelveticaNeue-Thin, 'SansGBW310f690482b1c406', Avenir, Helvetica, '微软雅黑', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #efefef;
}
</style>
<style>
* {
  /* 禁止IOS长按复制 */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>

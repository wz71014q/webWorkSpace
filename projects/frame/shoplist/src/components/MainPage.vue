<template>
<!-- 主页面，与故障页面同一级 -->
<div class="mainPage">
    <router-view/>
</div>
</template>

<script>
import AllFruit from '@/components/AllFruit'
export default {
  name: 'MainPage',
  components: {
    AllFruit
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainPage {
  width: 100%;
  height: 100%;
}
</style>

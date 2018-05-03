<template>
<!-- 头部和中间模式部分的容器，是MainPage的子组件，与SetPage和AppointmentPage同级 -->
<div class="controlPage">
    <FruitHead/>
    <FruitList/>
</div>
</template>

<script>
import FruitHead from '@/components/FruitHead'
import FruitList from '@/components/FruitList'
export default {
  name: 'AllFruit',
  components: {
    FruitHead,
    FruitList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.controlPage{
    width: 100%;
    height: 86%;
}
</style>

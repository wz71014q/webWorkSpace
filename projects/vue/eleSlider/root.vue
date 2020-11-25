<template>
  <div class="block">
    <span class="demonstration">不显示间断点</span>
    <el-slider
      v-model="value"
      :step="1"
      :min="0"
      :max="1000"
      show-input
      label="labellabel"
      :show-input-controls="false">
    </el-slider>
    <div>{{ value }}</div>
    <van-slider
      :min="0"
      :max="1000"
      :step="1"
      v-model="value"
      @change="onChange" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0
    };
  },
  methods: {
    onChange () {
      console.log('onChange')
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .el-slider__button {
  border: 1px solid #000;
}
</style>
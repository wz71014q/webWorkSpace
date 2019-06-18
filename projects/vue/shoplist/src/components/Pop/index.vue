<template>
  <!-- 一个自定义的简易抽屉组件, 配合mixins/config/advanced-config.js里的配置使用 -->
  <transition
    name="maskShow"
    mode="in-out">
    <div
      v-show="selAdvanced"
      class="mask"
      @click.self="cancel">
      <transition
        name="slider"
        mode="in-out">
        <div
          v-show="selAdvanced"
          class="pop-wrapper">
          <div
            class="pull-down"
            @click="pullDown">
            <img
              class="img"
              src="../../assets/img/ic_pulldown.png">
          </div>
          <div class="btn-wrapper">
            <div
              class="advanced-funtion"
              :class="{invalid: item.invalid}"
              :ref="'advanced-' + index"
              v-for="(item, index) in dataSorce"
              :key="item.index">
              <img
                class="advanced-img"
                @click="handleAdvancedImg(index)"
                :src="item.invalid ?
                  item.ImgUrl : (changeColor ?
                    (item.selected ? item.warmImgUrl : item.ImgUrl)
              : (item.selected ? item.selectedImgUrl : item.ImgUrl))">
              <div
                v-if="!item.changeRouter"
                @click="handleAdvancedTxt(index)"
                class="advanced-name">{{ item.name }}</div>
              <div
                v-else
                @click="handleAdvancedTxt(index)"
                class="advanced-name advanced-more">
                {{ item.name }}
                <img
                  class="moreContent"
                  src="../../assets/img/ic_more.png">
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'Pop',
  props: {
    selAdvanced: { // 是否点击了高级功能
      type: Boolean,
      default() {
        return false;
      },
    },
    changeColor: { // 改变图标颜色
      type: Boolean,
      default() {
        return false;
      },
    },
    dataSorce: { // 数据源
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    /**
     * @function handleAdvancedImg
     * @param index 高级功能index
     * @description 高级功能的图标触发事件
     */
    handleAdvancedImg(index) {
      this.$emit('setAdvanced', index);
    },
    /**
     * @function handleAdvancedTxt
     * @param index 高级功能index
     * @description 高级功能的名称触发事件
     */
    handleAdvancedTxt(index) {
      this.$emit('setRouter', index);
    },
    /**
     * @function pullDown
     * @description 下拉小箭头
     */
    pullDown() {
      this.cancel();
    },
    /**
     * @function cancel
     * @description 蒙版点击事件
     */
    cancel() {
      this.$emit('slideDown', false);
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../../../../../static/ui/style/index.scss';
$animateTime: 0.5s; // 动画持续时间
$distance: 200px; // 动画移动距离
.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
}
.pop-wrapper {
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  color: #404657;
  background-color: #fff;
  overflow: hidden;
}
.pull-down {
  padding-top: 8px;
  width: 100%;
  text-align: center;
  .img {
    width: 0.5rem;
  }
}
.btn-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  .foot-list, .advanced-funtion {
    padding: 0.2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    .function-img, .advanced-img {
      width: 1.61rem;
      height: 1.61rem;
    }
    .moreContent{
      width: 0.2rem;
    }
    .function-name, .advanced-name {
      padding-bottom: 0.01rem;
      font-size: 0.42rem;
    }
    .advanced-more{
      padding-left: 0.3rem;
    }
  }
}
.maskShow-enter, .maskShow-leave-to{
  opacity: 0;
}
.maskShow-enter-active, .maskShow-leave-active{
  transition: all $animateTime;
}
.maskShow-enter-to, .maskShow-leave{
  opacity: 1;
}
.slider-enter, .slider-leave-to{
  opacity: 0;
  transform: translateY($distance);
}
.slider-enter-active, .slider-leave-active {
  transition: all $animateTime;
}
.slider-enter-to, .slider-leave {
  opacity: 1;
  transform: translateY(0);
}
.invalid {
  opacity: 0.3;
}
.hide {
  display: none;
}
.hidden {
  visibility: hidden;
}
</style>

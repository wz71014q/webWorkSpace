<template>
<!-- 中间水果选择区 -->
  <div class="fruit-container">
    <div class="fruit-title">水果列表</div>
    <div class="fruitl-body">
      <div class="model" :class="{active:item.selected,isGray:(isBegin||isPreset)}" :ref="'myfruit_' + index "
      v-on:click="handleFruit(index)"
      v-for="(item, index) in fruitlList" :key="item.index">
        <img class="img" :src="item.selected ? item.whiteImgUrl : item.normalImgUrl">
        <div class="name">{{ item.name }}</div>
      </div>
    </div>
    <div class="fruitMask" :class="{hidden: (!isBegin&&!isPreset)}"></div>
    <v-mask></v-mask>
  </div>
</template>

<script>
export default {
  name: 'FruitList',
  data () {
    return {
      fruitlList: [
        {mode_id: 0, name: '车厘子', selected: false, appointment: false, requireTime: 55, whiteImgUrl: require('../assets/img/fruit_w_0.png'), normalImgUrl: require('../assets/img/fruit_0.png')},
        {mode_id: 1, name: '橙子', selected: false, appointment: false, requireTime: 30, whiteImgUrl: require('../assets/img/fruit_w_1.png'), normalImgUrl: require('../assets/img/fruit_1.png')},
        {mode_id: 2, name: '草莓', selected: false, appointment: false, requireTime: 240, whiteImgUrl: require('../assets/img/fruit_w_2.png'), normalImgUrl: require('../assets/img/fruit_2.png')},
        {mode_id: 3, name: '西瓜', selected: false, appointment: true, requireTime: 120, whiteImgUrl: require('../assets/img/fruit_w_3.png'), normalImgUrl: require('../assets/img/fruit_3.png')},
        {mode_id: 4, name: '樱桃', selected: false, appointment: true, requireTime: 90, whiteImgUrl: require('../assets/img/fruit_w_4.png'), normalImgUrl: require('../assets/img/fruit_4.png')},
        {mode_id: 5, name: '菠萝', selected: false, appointment: false, requireTime: 75, whiteImgUrl: require('../assets/img/fruit_w_5.png'), normalImgUrl: require('../assets/img/fruit_5.png')},
        {mode_id: 6, name: '芒果', selected: false, appointment: true, requireTime: 60, whiteImgUrl: require('../assets/img/fruit_w_6.png'), normalImgUrl: require('../assets/img/fruit_6.png')},
        {mode_id: 7, name: '香蕉', selected: false, appointment: true, requireTime: 90, whiteImgUrl: require('../assets/img/fruit_w_7.png'), normalImgUrl: require('../assets/img/fruit_7.png')},
        {mode_id: 8, name: '葡萄', selected: false, appointment: true, requireTime: 30, whiteImgUrl: require('../assets/img/fruit_w_8.png'), normalImgUrl: require('../assets/img/fruit_8.png')},
        {mode_id: 9, name: '梨', selected: false, appointment: false, requireTime: 20, whiteImgUrl: require('../assets/img/fruit_w_9.png'), normalImgUrl: require('../assets/img/fruit_9.png')},
        {mode_id: 10, name: '提子', selected: false, appointment: false, requireTime: 50, whiteImgUrl: require('../assets/img/fruit_w_10.png'), normalImgUrl: require('../assets/img/fruit_10.png')},
        {mode_id: 11, name: '苹果', selected: false, appointment: false, requireTime: '--', whiteImgUrl: require('../assets/img/fruit_w_11.png'), normalImgUrl: require('../assets/img/fruit_11.png')}
      ]
    }
  },
  computed: {
    isBegin: function () {
      return this.$store.getters.getDeviceStatus.isBegin
    },
    isPreset: function () {
      return this.$store.getters.getDeviceStatus.isPreset
    },
    cookMode: function () {
      return this.$store.getters.getDeviceStatus.modeIndex
    }
  },
  mounted () {
    /* 判断初始化水果 */
    var fruitSelf = this
    var modeNow = fruitSelf.$store.getters.getDeviceStatus.modeIndex
    if ((modeNow >= 0) && (modeNow <= 11)) {
      fruitSelf.fruitlList.forEach(element => {
        element.selected = false
        if (element.mode_id === modeNow) {
          element.selected = true
          console.log('开始选择商品：' + element.name)
        }
      })
    } else {
      fruitSelf.fruitlList.forEach(element => {
        element.selected = false
      })
    }
  },
  watch: {
    'cookMode': 'uptMode'
  },
  methods: {
    uptMode () {
      /* 判断选择水果 */
      var fruitSelf = this
      var modeNow = fruitSelf.$store.getters.getDeviceStatus.modeIndex
      if ((modeNow >= 0) && (modeNow <= 11)) {
        fruitSelf.fruitlList.forEach(function (currentValue) {
          currentValue.selected = false
          if (currentValue.mode_id === modeNow) {
            currentValue.selected = true
          }
        })
        // fruitSelf.fruitlList.forEach(element => {
        //   element.selected = false
        //   if (element.mode_id === modeNow) {
        //     element.selected = true
        //   }
        // })
      }
    },
    handleFruit (index) {
      /* 每个水果的点击事件 */
      this.fruitlList.forEach(element => {
        element.selected = false
      })
      this.fruitlList[index].selected = true
      if (this.fruitlList[index].appointment === true) {
        this.$router.push({path: '/AppointmentPage'})
      }
      this.$store.commit('updateFruit', {FruitIndex: this.fruitlList[index].mode_id, requireTime: this.fruitlList[index].requireTime})
      console.log('选择水果：' + this.fruitlList[index].name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fruit-container {
    display: flex;
    flex-flow: column;
    height: 60%;
    padding: 1% 1% 0 1%;
    background-color: #efefef;
  }
  .fruit-title {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 20%;
    padding: 1% 1% 1% 3%;
    border-bottom: 1px solid #eee;
    overflow: hidden;
    color: #333;
    font-size: 0.2rem;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    background-color: #fff;
    -webkit-box-align: center;
    -ms-flex-align: center;
  }
  .fruitl-body { display: flex; flex-flow: row wrap; align-content: space-around; border-top: 1px solid #eee; background: #efefef; }
  .fruitl-body .model {
    display: flex;
    flex: 1 1 25%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    color: #b7b7b7;
    text-decoration: none;
    background-color: #fff;
  }
  .fruitl-body .model .img { width: 30%; }
  .fruitl-body .model .name { margin-top: 10%; }
  .fruitl-body .isGray .img,
  .fruitl-body .isGray .name { opacity: 0.3; }
  .fruitl-body .active { background-color: rgba(74, 255, 98, 0.527); opacity: 1; }
  .fruitl-body .active .img,
  .fruitl-body .active .name { color: #fff; opacity: 1; }
  .fruit-container .fruitMask {
    position: absolute;
    top: 35%;
    left: 0;
    width: 100%;
    height: 50%;
    margin: 0;
    padding: 0;
  }
  .hidden {
    visibility: hidden;
  }
  .hide {
    visibility: hidden;
  }
  @media screen and (min-width: 320px) and (max-width: 375px) {
    /* iphone5 */
    .fruitl-body {
      height: 70%;
    }
    .fruitl-body .model {
      height: 33%;
    }
  }
  @media screen and (min-width: 375px) and (max-width: 414px) {
    /* 兼容iphone6 */
    .fruitl-body {
      height: 75%;
    }
    .fruitl-body .model {
      height: 33%;
    }
  }
  @media screen and (min-width: 375px) and (max-width: 413px) and (min-device-height: 736px) {
    /* 兼容iphoneX */
    .fruit-container {
      height: 53%;
    }
  }
  @media screen and (min-width: 414px) {
    /* 兼容ipad */
    .fruitl-body {
      height: 75%;
    }
    .fruitl-body .model {
      height: 33%;
    }
  }
</style>

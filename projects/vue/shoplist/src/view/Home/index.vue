<template>
  <div
    :class="[Pow ?
  'home-page' : (HotWind ? 'home-page power-off-warm' : 'home-page power-off')]">
    <div
      :class="[Pow ? 
    (HotWind ? 'home-header home-header-warm' : 'home-header home-header-on') : 'home-header']">
      <NavBar
        icon-color="#275a9a"
        title="导航栏标题"
        :hide-more-info="false"
        @goback = "goBack"/>
      <div
        class="icon-advanced"
        :class="{hidden: !Pow}"> 
        <img
          class="icon-title"
          v-show="SwUpDn"
          src="../../assets/img/ic_swing_fluctuate.png">
      </div> <!-- 状态栏小图标 -->
      <div
        class="mode-carousel-holder"
        :class="{hidden: !Pow, setgray: HotWind}">
        <Carousel
          ref="modeCarousel"
          class="carousel-wrapper"
          @currentChange="setmode"
          @uncontrolable="showToast"
          :prop-data="modeData"
          :options="modeOptions"/> <!-- 模式滑轮 -->
        <span class="mode-name">
          {{ modeAll[Mode] }}
        </span>
      </div>
    </div>
    <div class="home-body">
      <div
        class="carousel-holder"
        :class="{hidden: !Pow, setgray: HotWind}">
        <Carousel
          ref="windCarousel"
          class="carousel-wrapper"
          @currentChange="setWindSpeed"
          :prop-data="windData"
          :options="windOptions"/><!-- 风速滑轮 -->
        <span class="wind-level">
          {{ $language("home.windLevel") }}
        </span>
      </div>
    </div>
    <div class="home-foot"> <!-- 底部功能按键 -->
      <div
        class="foot-list"
        :ref="'func-' + index"
        @click="setFunction(index)"
        v-for="(item, index) in footList"
        :key="item.index">
        <img
          class="function-img"
          :src="item.ImgUrl">
        <span class="function-name">{{ item.name }}</span>
      </div>
    </div>
    <pop
      :sel-advanced="selAdvanced" 
      :change-color="setColor"
      :data-sorce="advancedList"
      @setAdvanced="setAdvance"
      @setRouter="setRouter"
      @slideDown="cancelAdvanced"/>
    <div
      class="off-mask"
      :class="{hide: Pow}">
      <span>{{ $language("home.powerOff") }}</span> <!-- 关机蒙版 -->
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import NavBar from '../../components/NavBar/index.vue';
import Pop from '../../components/Pop/index.vue';

export default {
  name: 'Home',
  components: {
    NavBar,
    Pop,
  },
  data() {
    return {
      modeName: '',
      selAdvanced: false, // 高级功能弹框有没有弹起
      setColor: false, // 高级功能图标颜色是否改变
    };
  },
  computed: {
    ...mapState({
      /**
       * @function getPow
       * @param state state
       * @description 获取电源开关信息，更新电源按键UI
       */
      Pow: function getPow(state) {
        if (state.dataObject.Pow) {
          this.footList[0].ImgUrl = require('../../assets/img/btn_off.png');
          this.advancedList[3].name = this.$language('home.timing');
          this.advancedList.forEach(element => {
            const ele = element;
            ele.invalid = false;
            if (ele.protocol === 'Wet' && this.HotWind) {
              ele.invalid = false;
            }
          });
        } else {
          this.footList[0].ImgUrl = require('../../assets/img/btn_on.png');
          this.advancedList[3].name = this.$language('home.Appointment');
          this.advancedList.forEach(element => {
            const ele = element;
            ele.invalid = true;
          });
          this.advancedList[3].invalid = false;
        }
        return state.dataObject.Pow;
      },
      /**
       * @function getmode
       * @param state state
       * @description 获取模式
       */
      Mode: function getMod(state) {
        this.$nextTick(() => {
          this.$refs.modeCarousel.setId(Number(state.dataObject.Mod));
        });
        this.modeName = this.modeAll[state.dataObject.Mod];
        return state.dataObject.Mod;
      },
      /**
       * @function getWdSpd
       * @param state state
       * @description 获取风速信息，更新风速
       */
      WdSpd: state => state.dataObject.WdSpd,
      Anion: state => state.dataObject.Anion,
      SwUpDn: function getSwUpDn(state) {
        this.advancedList[0].selected = state.dataObject.SwUpDn;
        return state.dataObject.SwUpDn;
      },
      SwingLfRig: function getSwingLfRig(state) {
        this.advancedList[1].selected = state.dataObject.SwingLfRig;
        return state.dataObject.SwingLfRig;
      },
      Wet: function getWet(state) {
        this.advancedList[2].selected = state.dataObject.Wet;
        return state.dataObject.Wet;
      },
      TmrOn: function getTmrOn(state) {
        this.advancedList[3].selected = state.dataObject.TmrOn;
        return state.dataObject.TmrOn;
      },
      HotWind: function getHotWind(state) {
        this.advancedList[4].selected = state.dataObject.HotWind;
        if (state.dataObject.HotWind) {
          this.modeOptions.controlAble = false;
          this.windOptions.controlAble = false;
          this.setDataObject({
            Mod: 0,
            WdSpd: 1,
            Wet: 0,
          });
          this.setColor = true; // 切换高级功能图标颜色
        } else {
          this.modeOptions.controlAble = true;
          this.windOptions.controlAble = true;
          this.setColor = false;
        }
        return state.dataObject.HotWind;
      },
      dataObject: state => state.dataObject,
    }),
  },
  watch: {
    /**
     * @function isOffline
     * @param {number} newv
     * @description 设备上线时返回主页
     */
    WdSpd: function updateWdSpd(newv) {
      this.$refs.windCarousel.setId(Number(newv - 1));
    },
    HotWind: function setBarColor(newv) { // 改变状态栏颜色
      newv === 0 ? changeBarColor('#0abfec') : changeBarColor('#f88902');
    }
  },
  /**
   * @function beforeRouteEnter
   * @description 进入页面后监听根组件的事件分发，将goBack传给安卓返回键
   * @param to 路由跳转的目标
   * @param from 路由从哪里来
   * @param next 传一个回调给next进而访问组件实例。否则获取不到组件内的this
   */
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$root.$on('statusBack', () => {
        vm.goBack();
      });
    },
    );
  },
  /**
   * @function beforeRouteLeave
   * @description 退出后解除根组件的事件绑定
   * @param to 路由跳转的目标
   * @param from 路由从哪里来
   * @param next 传一个回调给next。beforeRouteLeave可以获取到this
   */
  beforeRouteLeave(to, from, next) {
    this.$root.$off('statusBack');
    next();
  },
  /**
   * @function initHome
   * @description 初始化Home页面
   */
  mounted: function initHome() {
    this.$refs.windCarousel.setId(Number(this.WdSpd - 1));
  },
  methods: {
    ...mapMutations({
      setDataObject: 'SET_DATA_OBJECT',
    }),
    ...mapActions({
      sendCtrl: 'SEND_CTRL',
    }),
    /**
     * @function goBack
     * @description 返回键
     */
    goBack() {
      this.selAdvanced ? this.selAdvanced = false : closePage();
    },
    /**
     * @function setmode
     * @param val 循环滑轮取值
     * @description 循环滑轮设置
     */
    setmode(val) {
      this.modeName = this.modeAll[val];
      this.setDataObject({Mod: val});
      this.sendCtrl({Mod: val});
    },
    /**
     * @function showToast
     * @description 显示提示
     */
    showToast() {
      showToast('当前模式下不可调节', 1);
    },
    /**
     * @function setWindSpeed
     * @param val 风速滑轮取值
     * @description 风速滑轮设置
     */
    setWindSpeed(val) {
      this.setDataObject({WdSpd: val + 1});
      this.sendCtrl({WdSpd: val + 1});
    },
    /**
     * @function setFunction
     * @param val 功能按键取值
     * @description 点击底部功能列表
     */
    setFunction(val) {
      switch (val) {
        case 0:
          this.setDataObject({
            Pow: Number(!this.Pow),
          });
          this.sendCtrl({Pow: this.Pow});
          break;
        case 1:
          this.selAdvanced = true; // 打开底部弹框
          break;
        case 2:
          this.$router.push({name: 'Voice'});
          break;
        default:
          break;
      }
    },
    /**
     * @function setAdvanced
     * @param val 高级功能按键取值
     * @description 点击底部高级功能列表，匹配state中对应字段的功能，发送对应指令
     */
    setAdvance(val) {
      const advancedName = this.advancedList[val].protocol; // 高级功能对应的字段名
      const itemInvalid = this.advancedList[val].invalid; // 高级功能有没有被禁用
      const changeRouter = this.advancedList[val].changeRouter; // 对应的跳转路由
      console.log(`index: ${val}, 功能: ${advancedName}, 是否被禁用: ${itemInvalid}, 跳转路由名称: ${changeRouter}`);
      if (!itemInvalid && !changeRouter) { // 普通功能直接发送指令
        this.setDataObject({[advancedName]: Number(!this.dataObject[advancedName])});
        this.sendCtrl({[advancedName]: Number(this.dataObject[advancedName])});
      } else if (!itemInvalid && advancedName === 'HotWind') { // 互斥逻辑处理：暖风可以关闭加湿
        this.setDataObject({
          [advancedName]: Number(!this.dataObject[advancedName])
        });
        this.sendCtrl({
          [advancedName]: Number(this.dataObject[advancedName]),
        });
      } else if (!itemInvalid) { // 跳转路由的功能
        this.$router.push({name: this.advancedList[val].changeRouter});
      }
    },
    /**
     * @function setAdvanced
     * @param val 带有路由跳转的高级功能按键取值
     * @description 点击底部高级功能列表的文字，跳转路由
     */
    setRouter(val) {
      const advancedName = this.advancedList[val].protocol; // 高级功能对应的字段名
      const itemInvalid = this.advancedList[val].invalid; // 高级功能有没有禁用
      const changeRouter = this.advancedList[val].changeRouter; // 对应的跳转路由
      if (changeRouter && !itemInvalid) { // 带跳转路由功能的直接跳转路由
        this.$router.push({name: this.advancedList[val].changeRouter});
      } else if (!itemInvalid) { // 普通功能直接发送指令
        this.setDataObject({[advancedName]: Number(!this.dataObject[advancedName])});
        this.sendCtrl({[advancedName]: Number(this.dataObject[advancedName])});
      }
    },
    /**
     * @function cancelAdvanced
     * @param val 高级功能按键取值
     * @description 点击高级功能蒙版
     */
    cancelAdvanced(val) {
      this.selAdvanced = val;
    },
  },
};
</script>
<style lang="scss" scoped>
// 必须用统一的适配方案
@import '../../../../../static/ui/style/index.scss';
.home-page {
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  .home-header {
    width: 100%;
    height: 30%;
    color: #fff;
    .icon-advanced {
      padding-top: 0.23rem;
      padding-left: 0.4rem;
      height: 0.6rem;
      box-sizing: border-box;
    }
    .icon-title{
      width: 0.6rem;
    }
    .mode-carousel-holder {
      position: relative;
      margin-top: 0.6rem;
      width: 100%;
      height: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      text-align: center;
      .mode-name {
        font-size: 0.64rem;
      }
    }
  }
  .home-header-on {
    background: url('../../assets/img/bg_header.png') no-repeat;
    background-size: 100% 100%;
  }
  .home-header-warm {
    background: url('../../assets/img/bg_header_warm.png') no-repeat;
    background-size: 100% 100%;
  }
  .home-body {
    width: 100%;
    height: 55%;
    color: #404657;
    .carousel-holder {
      position: relative;
      padding-top: 1.6rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      .wind-level {
        position: absolute;
        right: 3rem;
        bottom: -0.2rem;
        font-size: 0.64rem;
      }
    }
    @media screen and (min-width: 375px) and (min-height: 812px) {
      .carousel-holder {
        padding-top: 3.6rem;
      }
    }
  }
  .home-foot {
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    color: #404657;
    .foot-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25%;
      .function-img {
        width: 1.61rem;
        height: 1.61rem;
      }
      .function-name {
        padding-bottom: 0.66rem;
        font-size: 0.42rem;
      }
    }
    .hide {
      display: none;
    }
    .hidden {
      visibility: hidden;
    }
  }
}
.power-off {
  background: url('../../assets/img/bg_body.png') no-repeat;
  background-size: 100% 100%;
}
.power-off-warm {
  background: url('../../assets/img/bg_body_warm.png') no-repeat;
  background-size: 100% 100%;
}
.off-mask {
  position: absolute;
  top: 10%;
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba($color: #707070, $alpha: 0.75);
  font-size: 1rem;
}
.setgray {
  opacity: 0.3;
}
.hide {
  display: none;
}
.hidden {
  visibility: hidden;
}
</style>

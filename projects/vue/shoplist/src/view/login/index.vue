<template>
  <!-- 一个高级功能跳转的页面 -->
  <div class="hot-page">
    <!-- 导航栏 -->
    <NavBar
      icon-color="#275a9a"
      title="暖风"
      :hide-more-info="true"
      @goback = "goBack"/>
    <div class="hot-body">
      <ul class="ul-body">
        <li class="list-item">
          <span class="item-txt">
            {{ $language("home.warm") }}
          </span>
          <img
            class="item-img"
            @click="setHotPow"
            :src="HotWind ? require('../../assets/img/btn_switch_on.png')
          : require('../../assets/img/btn_switch_off.png')">
        </li>
        <li
          v-show="HotWind"
          @click="setHotLow"
          class="list-item border-1px">
          <span class="item-txt">
            {{ $language('hotWind.heat_low') }}
          </span>
          <img
            class="item-img"
            :src="HotWind !== 1 ? require('../../assets/img/btn_radio_off.png')
          : require('../../assets/img/btn_radio_on.png')">
        </li>
        <li
          v-show="HotWind"
          @click="setHotHigh"
          class="list-item border-1px">
          <span class="item-txt">
            {{ $language('hotWind.heat_high') }}
          </span>
          <img
            class="item-img"
            :src="HotWind !== 2 ? require('../../assets/img/btn_radio_off.png')
          : require('../../assets/img/btn_radio_on.png')">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import NavBar from '../../components/NavBar';

export default {
  name: 'HotWind',
  components: {
    NavBar,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      Pow: state => state.dataObject.Pow,
      HotWind: state => state.dataObject.HotWind,
    }),
  },
  watch: {
    /**
     * @function updatePow
     * @param {number} newv
     * @description 设备上线时返回主页
     */
    Pow: function updatePow(newv) {
      newv ? '' : this.$router.push({ path: '/' });
    },
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
      this.$router.push({ path: '/' });
    },
    setHotPow() {
      this.setDataObject({HotWind: Number(!this.HotWind)});
      this.sendCtrl({
        HotWind: this.HotWind,
        Mod: 0,
        WdSpd: 1,
      });
    },
    setHotLow() {
      this.setDataObject({HotWind: 1});
      this.sendCtrl({
        HotWind: 1,
        Mod: 0,
        WdSpd: 1,
      });
    },
    setHotHigh() {
      this.setDataObject({HotWind: 2});
      this.sendCtrl({
        HotWind: 2,
        Mod: 0,
        WdSpd: 1,
      });
    }
  },
};
</script>
<style lang="scss" scoped>
// 必须用统一的适配方案
@import '../../../../../static/ui/style/index.scss';
.hot-page {
  width: 100%;
  height: 100%;
  text-align: center;
  color: #404657;
  background-color: #f1f1f1;
  .hot-header {
    width: 100%;
    height: 6%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    .back-holder {
      flex-basis: 11%;
      .icon-back {
        width: 0.3rem;
      }
    }
    .warm {
      flex-basis: 80%;
      font-size: 0.47rem;
    }
    .save-warm{
      flex-basis: 12%;
      font-size: 0.47rem;
    }
  }
  .hot-body {
    width: 100%;
    height: 94%;
    .ul-body {
      margin: 0 auto;
      background: #fff;
      @include border-bottom-1px(#404657);
      &:after {
        opacity: 0.5;
      }
      .list-item {
        height: 1.17rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @include border-top-1px(#404657);
        &:after {
          opacity: 0.5;
        }
        &:first-child::after{
          content: '';
          border: none;
        }
        &:first-child img {
          width: 1.2rem;
        }
      }
      .item-txt {
        padding-left: 0.2rem;
        font-size: 0.39rem;
      }
      .item-img {
        padding-right: 0.2rem;
        width: 0.73rem;
      }
    }
  }
}
.hide {
  display: none;
}
.hidden {
  visibility: hidden;
}
</style>

<template>
  <div class="dev-header">
    <svg
      class="back"
      @click="goBack"
      width="40"
      height="60"
      viewBox="0 0 40 90">
      <path
        :fill="iconColor"
        d="M30 0 L36 4 L8 45 L36 86 L30 90 L0 45Z"/>
    </svg>
    <span
      ref="devicename"
      :style="{color: iconColor}"
      class="devname">{{ title | titleContent(devname) }}</span>
    <svg
      class="hamburger"
      @click="moreInfo"
      :class="{hide: functype || hideMoreInfo}"
      width="40"
      height="60"
      viewBox="0 0 40 60">
      <circle
        cx="20"
        cy="5"
        r="5"
        :fill="iconColor"/>
      <circle
        cx="20"
        cy="28"
        r="5"
        :fill="iconColor"/>
      <circle
        cx="20"
        cy="51"
        r="5"
        :fill="iconColor"/>
    </svg>
    <span
      class="save"
      :style="{color: iconColor}"
      v-show="functype"
      @click="saveScene">{{ $language('home.save') }}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { editDevice, getCCcmd } from '../../../../../static/lib/PluginInterface.promise';

export default {
  name: 'NavBar',
  filters: {
    titleContent: function getTitle(val, devname) {
      return val || devname;
    }
  },
  props: {
    iconColor: { // icon和设备名称的颜色
      type: String,
      default() {
        return '#fff';
      },
    },
    title: { // 状态栏名称，默认显示设备名称
      type: String,
      default() {
        return '';
      },
    },
    hideMoreInfo: {
      type: Boolean,
      default() {
        return false;
      },
    }
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      devname: state => state.deviceInfo.name,
      functype: state => state.functype,
      mac: state => state.mac,
      dataObject: state => state.dataObject,
      Pow: state => state.dataObject.Pow,
      remarks: function getRemarks(state) {
        return this.Pow ? state.remarks_on : state.remarks_off;
      },
      editEnable: state => state.editEnable,
    }),
  },
  methods: {
    /**
     * @function moreInfo
     * @description 编辑设备名称
     */
    moreInfo() {
      if (!this.functype) {
        this.editEnable ? editDevice(this.mac) : '';
      }
    },
    /**
     * @function goBack
     * @description 返回键
     */
    goBack() {
      this.$emit('goback');
    },
    /**
     * @function saveScene
     * @description 场景模式的保存，开机状态下返回state中remarks_on中的文字，关机状态下返回remarks_off中的文字，
     * 为空则只返回...由于每种设备都不同，有需要更改的请自行更改
     */
    saveScene() {
      const keys = Object.keys(this.dataObject);
      let remarksKey; // state中的remarks
      if (!JSON.stringify(this.remarks)) {
        remarksKey = [];
      } else {
        remarksKey = Object.keys(this.remarks);
      }
      const opt = [];
      const p = [];
      let myRemarks = ''; // 场景模式返回给主体的指令名称
      remarksKey.forEach(element => {
        const _element = element;
        myRemarks += this.remarks[_element][this.dataObject[_element]]; // 将指令拼装成字符串
      });
      myRemarks = this.judgeStringLength(myRemarks);
      myRemarks += '...'; // 最后补充省略号
      console.log(myRemarks);
      for (let i = 0, j = keys.length; i < j; i += 1) {
        opt.push(keys[i]);
        p.push(this.dataObject[keys[i]]);
      }
      const json = JSON.stringify({ opt, p, t: 'cmd' }); // 拼接发送指令
      getCCcmd(this.mac, json, myRemarks, JSON.stringify(p));
    },
    /**
     * @function judgeStringLength
     * @description 检测字符串长度
     */
    judgeStringLength(str) {
      let result;
      str.length >= 20 ? result = `${str.substr(0, 19)}...` : result = str;
      return result;
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../../../../../static/ui/style/index.scss';

.dev-header {
  width: 100%;
  min-height: 1rem;
  background-color: transparent;
  text-align: center;
  box-sizing: border-box;
  .back {
    position: absolute;
    top: 10px;
    left: 0;
    height: 0.65rem;
  }
  .devname{
    margin-top: 10px;
    width: 3rem;
    display: inline-block;
    overflow: hidden;
    font-size: 0.55rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: sans-serif;
  }
  .hamburger {
    position: absolute;
    top: 10px;
    right: 0;
    height: 0.65rem;
  }
  .save {
    position: absolute;
    top: 10px;
    right: 3px;
    font-size: 0.52rem;
  }
}
.hide {
  display: none;
}
.hidden {
  visibility: hidden;
}
</style>

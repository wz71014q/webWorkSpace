/* 数据集中控制区 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    /* 状态 */
    FruitIndex: -1, // 所选水果,没有默认的模式
    requireTime: 0, // 所选商品默认时间
    strangeFlag: false, // 定时界面滑轮的一个flag
    oddFlag: false // 定时界面滑轮的另一个flag
  },
  getters: {
    /* 获取状态 */
    getDeviceStatus: function (state) {
      return state
    },
    getCookTime: function (state) {
      // 界面显示时间
      var remaindTime
      var presetTimeAll = state.presetHour * 60 + state.presetMin // 预约分钟数
      var setTimeAll = state.timeHour * 60 + state.timeMin // 定时分钟数
      if (state.isPreset && state.isSetTime) {
        if (presetTimeAll <= setTimeAll) {
          remaindTime = setTimeAll
          state.isBegin = true
          state.isPreset = false
        } else {
          remaindTime = presetTimeAll + setTimeAll
        }
      } else if (state.isPreset) {
        if (presetTimeAll <= state.requireTime) {
          remaindTime = state.requireTime
          state.isBegin = true
          state.isPreset = false
        } else {
          remaindTime = presetTimeAll
        }
      } else if (state.isSetTime) {
        remaindTime = setTimeAll
      } else if (state.cookTime > 0) {
        remaindTime = state.cookTime
      } else {
        remaindTime = '--'
      }
      return remaindTime
    }
  },
  mutations: {
    /* 同步操作放这里 */
    /* 提交状态 */
    updateFruit (state, FruitStatus) {
      state.FruitIndex = FruitStatus.FruitIndex
      state.requireTime = FruitStatus.requireTime
    },
    updateFruitIndex (state, FruitIndex) {
      state.FruitIndex = FruitIndex
    },
    updateTimer (state, requireTime) {
      state.requireTime = requireTime
    },
    updateFruitTime (state, requireTime) {
      state.requireTime = requireTime
    },
    updateStrangeFlag (state, flag) {
      state.strangeFlag = flag
    },
    updateOddFlag (state, oflag) {
      state.oddFlag = oflag
    }
  },
  actions: {
    /* 异步操作放这里 */
  }
})
export default store

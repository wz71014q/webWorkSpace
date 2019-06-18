// 请勿修改
import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';// vue自带日志插件，用于调试， 觉得用不到可以删除
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import state from './state';
import voice from './modules/voice';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: { voice }, // 根据实际业务修改
  // getters: {},
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});

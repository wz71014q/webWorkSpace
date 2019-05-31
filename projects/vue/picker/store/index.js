import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    add(state, val) {
      state.count = val;
    }
  },
  actions: {
    updateCount({ commit }, val) {
      commit('add', val);
    }
  }
});

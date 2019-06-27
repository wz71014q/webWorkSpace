import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  msg: 'something'
}

const mutations = {
  setData(state, val) {
    state.msg = val;
  }
}

const actions = {
  updateMsg({ commit }, val) {
    commit('setData', val);
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
});

export {
  state,
  mutations,
  actions
}
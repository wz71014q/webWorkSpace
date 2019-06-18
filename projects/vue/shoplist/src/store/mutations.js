import * as type from './types';
// 同步操作放这里
export default {
  [type.FRUITNAME](state, name) {
    state.name = name;
  },
};

import {createStore, combineReducers} from 'redux';
import * as menuReducer from './menu/reducer';
import {formMenu} from './menu/reducer'
// import * as homeReducer from './home/reducer';

// const allReducers = {
//   menuList: menuReducer,
//   homeData: homeReducer
// }
// const reducer = combineReducers(allReducers); // combineReducers()将多个 Reducer 函数合成一个整体的 Reducer 函数。

let store = createStore(formMenu);
console.log("initial state: ", store.getState());

export default store;
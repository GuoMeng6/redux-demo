/**
 * Created by Administrator on 2016/10/8.
 */

import { combineReducers } from 'redux';
import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';
import {
    ToastAndroid,

} from 'react-native';
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case DELETE_TODO:
      ToastAndroid.show(`DELETE_TODO state = ${JSON.stringify(state)}`, ToastAndroid.SHORT);
      state.map((item, index) => {
        if (index == action.index) {
          state.splice(index, 1);
          ToastAndroid.show(`new state = ${JSON.stringify(state)}`, ToastAndroid.SHORT);
          return state;
        }
      });
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true,
        }),
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos,
});

export default todoApp;
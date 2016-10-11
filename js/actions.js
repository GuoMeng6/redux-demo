/**
 * Created by Administrator on 2016/10/8.
 */

/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const DELETE_TODO = 'DELETE_TODO';
export const LOGIN_ON = 'LOGIN_ON';
export const LOGIN_OFF = 'LOGIN_OFF';
/*
 * 其它的常量
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

/*
 * action 创建函数
 */

export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function completeTodo(index) {
  return { type: COMPLETE_TODO, index };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}

export function deleteTodo(index) {
  return { type: DELETE_TODO, index };
}

export function loginOn(text) {
  return { type: LOGIN_ON, texts: text };
}

export function loginOff() {
  return { type: LOGIN_OFF };
}

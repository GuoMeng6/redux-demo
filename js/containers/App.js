import React, { Component, PropTypes } from 'react';
import {
    View,
    ToastAndroid,
} from 'react-native';
import { connect } from 'react-redux';
import { addTodo, completeTodo, VisibilityFilters, setVisibilityFilter, loginOn, loginOff } from '../actions';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
import Login from '../components/Login';

class App extends Component {
  render() {
        // Injected by connect() call:
        // 通过调用 connect() 注入:
    const { dispatch, visibleTodos, visibilityFilter, visibleText } = this.props;
    return (
      <View
        style={{ flex: 1 }}
      >
        <Login
          texts={visibleText}
          onLoginOnClick={(text) => { dispatch(loginOn(text)); }}
          onLoginOffClick={() => { dispatch(loginOff()); }}
        />
        <AddTodo
          style={{ height: 100 }}
          onAddClick={(text) => { dispatch(addTodo(text)); }}
        />
        <TodoList
          style={{ height: 200 }}
          todos={visibleTodos}
          onTodoClick={(index) => {
            dispatch(completeTodo(index));
          }}
        />
        <Footer
          filter={visibilityFilter}
          onFilterChange={(nextFilter) => {
            dispatch(setVisibilityFilter(nextFilter));
          }}
        />
      </View>
    );
  }
}


App.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE',
  ]).isRequired,
  visibleText: PropTypes.string.isRequired,
};

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter,
    visibleText: state.login,
  };
}


// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(App);

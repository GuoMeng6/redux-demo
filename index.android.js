/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

1;

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    ToastAndroid,
    AsyncStorage,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './js/containers/App';
import todoApp from './js/reducers';
import { store } from './js/redux';


// const store = createStore(todoApp);
class redux extends Component {

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
        );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('redux', () => redux);

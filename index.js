/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
 import { Provider } from 'react-redux'
import { createStore } from 'redux'
 import todoApp from './reducers'
import App from './containers/App'

class redux extends Component {

    render() {
        let store = createStore(todoApp);
        return (
            <Provider store={store}>
            <App />
            </Provider>
        );
    }
}


AppRegistry.registerComponent('redux', () => redux);

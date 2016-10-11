import {
  createStore,
  combineReducers,
} from 'redux';

import configureRedux from 'redux-config';
import { persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import * as config from './config'; // read config file

const { actions, reducers } = configureRedux(config);
const store = createStore(combineReducers(reducers));
persistStore(store, { storage: AsyncStorage });

module.exports = {
  actions,
  store,
};

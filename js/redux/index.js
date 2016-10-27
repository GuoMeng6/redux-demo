import {
  createStore,
  combineReducers,
} from 'redux';

import configureRedux from 'redux-config';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import * as config from './config'; // read config file

const { actions, reducers, persists } = configureRedux(config);
const store = createStore(
  combineReducers({
    ...reducers,
  }),
  autoRehydrate()
);

function onLoadRedux(onComplete: ?() => void) {
  const persistor = persistStore(store, {
    storage: AsyncStorage,
    whitelist: persists,
  }, () => {
    console.log('[Redux] store rehydrated.', store.getState());
    onComplete();
  });
}

module.exports = {
  onLoadRedux,
  actions,
  store,
};

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';

const persistConfig = {
  key: 'persist-key',
  storage,
};

const parsistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  parsistedReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);
const persistor = persistStore(store);

export default store;
export { persistor };

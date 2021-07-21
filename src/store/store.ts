import {createStore, applyMiddleware, Store, Middleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import {rootReducer} from "./reducers/rootReducer";
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

const rootPersistConfig = {
    key: 'rootStorage',
    storage: storage,
    whitelist: ['user']
};

const middleware: Middleware[] = [thunk];
if (process.env.NODE_ENV === 'development') middleware.push(logger);

const pReducer = persistReducer(rootPersistConfig, rootReducer);
const store: Store = createStore(pReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

export { persistor, store };

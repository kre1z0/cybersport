import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import {persistStore, autoRehydrate} from 'redux-persist';
import {REHYDRATE} from 'redux-persist/constants';
import createActionBuffer from 'redux-action-buffer';
import localForage from 'localforage';

import reducers from '../ducks';

const configureStore = preloadedState => {
    
    const middlewares = composeWithDevTools(
        applyMiddleware(thunk, createActionBuffer(REHYDRATE), createLogger()),
        autoRehydrate()
    );
    
    const store = createStore(reducers, preloadedState, middlewares);
    
    if (module.hot) {
        module.hot.accept('../ducks', () => {
            const nextRootReducer = require('../ducks').default;
            store.replaceReducer(nextRootReducer)
        })
    }
    
    persistStore(store, {storage: localForage, blacklist: ['user', 'objects']});
    
    return store;
};

export default configureStore;

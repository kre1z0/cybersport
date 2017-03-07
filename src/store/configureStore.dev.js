import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import {persistStore, autoRehydrate} from 'redux-persist'

import reducers from '../reducers';

const configureStore = preloadedState => {
    
    const middlewares = composeWithDevTools(applyMiddleware(thunk, createLogger()), autoRehydrate());
    
    const store = createStore(reducers, preloadedState, middlewares);
    
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer)
        })
    }
    
    persistStore(store);
    
    return store;
};

export default configureStore;


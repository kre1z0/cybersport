import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import {REHYDRATE} from 'redux-persist/constants';
import createActionBuffer from 'redux-action-buffer';
import localForage from 'localforage';

import reducers from '../ducks';

const configureStore = preloadedState => {
    
    const middlewares = compose(
        applyMiddleware(thunk, createActionBuffer(REHYDRATE)),
        autoRehydrate()
    );
    
    const store = createStore(reducers, preloadedState, middlewares);
    
    persistStore(store, {storage: localForage, blacklist: ['user', 'objects']});
    
    return store;
};

export default configureStore;

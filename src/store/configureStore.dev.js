import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, autoRehydrate } from 'redux-persist-immutable';
import { REHYDRATE } from 'redux-persist-immutable/constants';
import createActionBuffer from 'redux-action-buffer';
import localForage from 'localforage';
import { Iterable } from 'immutable';

import reducers, { StateRecord } from '../ducks';

const stateTransformer = state => {
    if (Iterable.isIterable(state)) return state.toJS();
    else return state;
};

const configureStore = (preloadedState = new StateRecord()) => {
    const middlewares = composeWithDevTools(
        applyMiddleware(
            thunk,
            createActionBuffer(REHYDRATE),
            createLogger({
                stateTransformer,
            }),
        ),
        autoRehydrate(),
    );

    const store = createStore(reducers, preloadedState, middlewares);

    if (module.hot) {
        module.hot.accept('../ducks', () => {
            const nextRootReducer = require('../ducks').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    persistStore(store, {
        storage: localForage,
        //blacklist: ['user', 'objects'],
        whitelist: [],
    });

    return store;
};

export default configureStore;

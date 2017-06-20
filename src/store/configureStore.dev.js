import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers, { StateRecord } from '../ducks';

const configureStore = (preloadedState = new StateRecord()) => {
    const middlewares = composeWithDevTools(
        applyMiddleware(
            thunk,
            createLogger({
                level: 'info',
                collapsed: true,
            }),
        ),
    );

    const store = createStore(reducers, preloadedState, middlewares);

    if (module.hot) {
        module.hot.accept('../ducks', () => {
            const nextRootReducer = require('../ducks').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};

export default configureStore;

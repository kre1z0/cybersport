import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './Root';

import injectTapEventPlugin from 'react-tap-event-plugin';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import configureStore from './store';
import moment from 'moment';
import numeral from 'numeral';

import 'numeral/locales/ru';
import 'moment/locale/ru';
OfflinePluginRuntime.install();
injectTapEventPlugin();

moment.locale('ru');
numeral.locale('ru');

const store = configureStore();

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component store={store} />
        </AppContainer>,
        document.getElementById('root'),
    );
};

render(Root);

if (module.hot) {
    module.hot.accept('./Root', () => render(Root));
}

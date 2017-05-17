import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root';

import injectTapEventPlugin from 'react-tap-event-plugin';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import configureStore from './store';
import moment from 'moment';
import numeral from 'numeral';

import 'numeral/locales/ru';
OfflinePluginRuntime.install();
injectTapEventPlugin();

moment.locale('ru');
numeral.locale('ru');

const store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
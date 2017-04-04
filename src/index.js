import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import configureStore from './store';

import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();

const store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);

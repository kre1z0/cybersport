import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';

import injectTapEventPlugin from 'react-tap-event-plugin';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import configureStore from './store';

OfflinePluginRuntime.install();
injectTapEventPlugin();

const store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);

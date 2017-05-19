import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../Root';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from '../store';

injectTapEventPlugin();
const store = configureStore();

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Root store={store} />, div);
});

import React, {Component, PropTypes} from 'react';
import { Provider } from 'react-redux';

import Router from './router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import 'normalize.css/normalize.css';
import './assets/fonts/fonts.css';

class Root extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired
    };
    
    render () {
        const {store} = this.props;
        return (
            <Provider store={store}>
                <MuiThemeProvider>
                    {Router}
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default Root;

import React, {Component, PropTypes} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {theme} from './assets/theme';

import Routes, {LoginRoute} from './routes';
import App from './containers/App';

import 'reset.css/reset.css';
import './assets/fonts/fonts.scss';
import './assets/base/main.scss';

class Root extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired
    };
    
    render () {
        const {store} = this.props;
        return (
            <Provider store={store}>
                <MuiThemeProvider muiTheme={theme}>
                    <Router>
                        <Switch>
                        {LoginRoute}
                        <App>
                            {Routes}
                        </App>
                        </Switch>
                    </Router>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default Root;

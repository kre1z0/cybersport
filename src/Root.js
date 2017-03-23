import React, {Component, PropTypes} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Routes from './routes';
import App from './containers/App';

import 'normalize.css/normalize.css';
import './assets/fonts/fonts.css';

const theme = getMuiTheme({
    fontFamily: 'FedraSans',
    appBar: {
        height: 80,
        color: '#64c76c'
    }
});

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
                        <App>
                            {Routes}
                        </App>
                    </Router>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default Root;

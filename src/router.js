import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Main from './containers/Main';

export default (
    <Router>
        <Switch>
            <Route path="/" component={Main}/>
            <Route path="*" component={Main}>
                <Redirect to="/"/>
            </Route>
        </Switch>
    </Router>
)
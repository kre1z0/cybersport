import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Home from './containers/home';
import Portfolio from './containers/portfolio';
import Map from './containers/map';
import Employees from './containers/employees';
import Verifications from './containers/verifications';
import Analytics from './containers/analytics';

export default (
    <Router>
        <Switch>
            <Route exact path="/" component={ Home }/>
            <Route path="/portfolio" component={ Portfolio }/>
            <Route path="/map" component={ Map }/>
            <Route path="/employees" component={ Employees }/>
            <Route path="/verifications" component={ Verifications }/>
            <Route path="/analytics" component={ Analytics }/>
            <Route path="*" component={ Home }>
                <Redirect to="/"/>
            </Route>
        </Switch>
    </Router>
)
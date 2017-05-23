import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './containers/home';
import Portfolio from './containers/portfolio/portfolio';
import Map from './containers/map/map';
import Employees from './containers/employees';
import Inspections from './containers/inspections';
import Analytics from './containers/analytics';
import Login from './components/login-page';

export const LoginRoute = <Route path="/login" component={Login} />;

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/map" component={Map} />
        <Route path="/employees" component={Employees} />
        <Route path="/inspections" component={Inspections} />
        <Route path="/analytic" component={Analytics} />
        <Route path="*" component={Home}>
            <Redirect to="/" />
        </Route>
    </Switch>
);

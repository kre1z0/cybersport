import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Home from './containers/home';
import Portfolio from './containers/portfolio/portfolio';
import Map from './containers/map';
import Employees from './containers/employees';
import Inspections from './containers/inspections';
import Analytics from './containers/analytics';


// const PrivateRoute = ({component: Component, ...other}) => (
//     <Route {...other}
//            render={({isAuth, ...props}) => (
//                 true
//                     ? <Component {...props}/>
//                     : <div>not auth</div>
//            )}
//     />
// );


export default (
        <Switch>
            <Route exact path="/" component={ Home }/>
            <Route path="/portfolio" component={ Portfolio }/>
            <Route path="/map" component={ Map }/>
            <Route path="/employees" component={ Employees }/>
            <Route path="/inspections" component={ Inspections }/>
            <Route path="/analytic" component={ Analytics }/>
            <Route path="*" component={ Home }>
                <Redirect to="/"/>
            </Route>
        </Switch>
)
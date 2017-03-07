import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Main from './containers/Main';

export default (
    <Router>
        <Switch>
            <Route path="/" component={Main}/>
            <Route path="/test" component={Main}/>
            <Route path="*" component={Main}/>
        </Switch>
    </Router>
)
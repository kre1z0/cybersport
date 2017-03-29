import { combineReducers } from 'redux';

import map from './map';
import user from './user';
import plan from './plan';

export default combineReducers({
    map,
    user,
    plan
})
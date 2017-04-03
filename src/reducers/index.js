import { combineReducers } from 'redux';

import map from './map';
import user from './user';
import plan from './plan';
import objects from './objects';

export default combineReducers({
    map,
    user,
    plan,
    objects
})
import { combineReducers } from 'redux';

import map from './map';
import user from './user';
import objects from './objects';

export default combineReducers({
    map,
    user,
    objects
})
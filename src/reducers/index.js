import { combineReducers } from 'redux';

import map from './map';
import user from './user';

export default combineReducers({
    map,
    user
})
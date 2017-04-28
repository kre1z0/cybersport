import { combineReducers } from 'redux-immutable';
import { Record } from 'immutable';

import map from './map';
import user from './user';
import plan from './plan';
import objects from './objects';

export const StateRecord = new Record({
    user: undefined,
    plan: undefined,
    map: undefined,
    objects: undefined
});

export default combineReducers({
    map,
    user,
    plan,
    objects
})

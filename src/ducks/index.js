import { combineReducers } from 'redux-immutable';
import { Record } from 'immutable';

import map from './map';
import user from './user';
import plan from './plan';
import objects from './objects';
import domains from './domains';
import employees from './employees';
import inspections from './inspections';

export const StateRecord = new Record({
    user: undefined,
    plan: undefined,
    map: undefined,
    objects: undefined,
    domains: undefined,
    employees: undefined,
    inspections: undefined,
});

export default combineReducers({
    map,
    user,
    plan,
    objects,
    domains,
    employees,
    inspections,
});

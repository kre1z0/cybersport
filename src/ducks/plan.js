import { createReducer } from 'redux-act';
import { Record } from 'immutable';

const Plan = Record({
    progress: undefined,
});

const initState = new Plan({
    progress: 60,
});

export default createReducer({}, initState);

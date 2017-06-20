import { combineReducers } from 'redux-immutable';
import { Record } from 'immutable';

import twitch from './twitch';
import youtube from './youtube';

export const StateRecord = new Record({
    twitch: undefined,
    youtube: undefined,
});

export default combineReducers({
    twitch,
    youtube,
});

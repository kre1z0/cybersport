import {createAction, createReducer} from 'redux-act';
import {Record} from 'immutable';

const Map = Record({
    center: [4194282.0079564173, 7506654.32236642],
    resolution: 76.43702828515632
});

const initState = new Map();

export const setCenter = createAction('map/set-center');
export const resetMap = createAction('map/reset-map');
export const setResolution = createAction('map/set-resolution');

export default createReducer({
    [setCenter]: (state, payload) =>
        state.set('center', payload),
    
    [resetMap]: (state, payload) =>
        initState,
    
    [setResolution]: (state, payload) =>
        state.set('resolution', payload),
    
}, initState)
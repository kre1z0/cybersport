import {createAction, createReducer} from 'redux-act';

const initState = {
    center: [0, 0],
    resolution: 76.437
};

export const setCenter = createAction('map/set-center');
export const resetMap = createAction('map/reset-map');
export const setResolution = createAction('map/set-resolution');


export default createReducer({
    [setCenter]: (state, payload) => ({
        ...state,
        center: payload
    }),
    
    [resetMap]: (state, payload) => initState,
    
    [setResolution]: (state, payload) => ({
        ...state,
        resolution: payload
    }),
}, initState)
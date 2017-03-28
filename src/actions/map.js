import {SET_CENTER, RESET_MAP, SET_RESOLUTION} from '../reducers/map';

export const setCenter = (center) => ({
    type: SET_CENTER,
    center
});

export const resetMap = () => ({
    type: RESET_MAP
});

export const setResolution = (resolution) => ({
    type: SET_RESOLUTION,
    resolution
});

import {SET_CENTER, RESET_MAP} from '../reducers/map';

export const setCenter = (center) => ({
    type: SET_CENTER,
    center
});

export const resetMap = () => ({
    type: RESET_MAP
});

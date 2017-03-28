/**
 * Created by tporyadin on 3/6/2017.
 */
export const SET_CENTER = 'map/set-center';
export const RESET_MAP = 'map/reset-map';
export const SET_RESOLUTION = 'map/set-resolution';

const initState = {
  center: [0, 0],
  resolution: 76.437
};

export default (state = initState, {type, ...payload}) => {
    switch (type) {
        case SET_CENTER:
            return {
                ...state,
                center: payload.center
            };
            
        case SET_RESOLUTION:
            return {
                ...state,
                resolution: payload.resolution
            };
            
        case RESET_MAP:
            return initState;
            
        default: return state;
    }
}
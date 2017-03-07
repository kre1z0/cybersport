/**
 * Created by tporyadin on 3/6/2017.
 */
export const SET_CENTER = 'map/set-center';
export const RESET_MAP = 'map/reset-map';

const initState = {
  center: [0, 0]
};

export default (state = initState, {type, ...payload}) => {
    switch (type) {
        case SET_CENTER:
            return {
                ...state,
                center: payload.center
            };
        case RESET_MAP:
            return initState;
        default: return state;
    }
}
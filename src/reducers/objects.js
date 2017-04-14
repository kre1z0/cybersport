export const FETCH = 'objects/fetch';
export const FETCH_SUCCESS = 'objects/fetch-success';
export const FETCH_ERROR = 'objects/fetch-error';

const initState = {
    totalObjects: 0,
    data: [],
    attributes: [],
    loading: false,
    error: false
};

export default (state = initState, {type, ...payload}) => {
    switch (type) {
        case FETCH:
            return {
                ...state,
                loading: true
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                ...payload
            };
        case FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: payload.error
            };
        default: return state;
    }
}

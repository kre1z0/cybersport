import {FETCH_ERROR, FETCH, FETCH_SUCCESS} from '../reducers/objects';
import {fetchObjects} from '../evergis/api';

export const objectsFetch = (objects) => ({
    type: FETCH
});

export const objectsFetchSuccess = (payload) => ({
    type: FETCH_SUCCESS,
    ...payload
});

export const objectsFetchError = (error) => ({
    type: FETCH_ERROR,
    error
});

export const getObjects = () => (dispatch) => {
    dispatch(objectsFetch());
    fetchObjects({})
        .then(response => dispatch(objectsFetchSuccess(response)))
        .catch(error => dispatch(objectsFetchError()));
};

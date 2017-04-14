import {FETCH_ERROR, FETCH, FETCH_SUCCESS} from '../reducers/objects';

const fetchObjects = () => Promise.all([
    fetch('/reestr.json').then(response=>response.json()),
    fetch('/objects_service_info.json').then(response=>response.json())
]).then(([{data, totalObjects}, {attributesDefinition: {attributes}}]) => ({
    data,
    totalObjects,
    attributes
}));

export const objectsFetch = (objects) => ({
    type: FETCH
});

export const objectsFetchSuccess = (objects) => ({
    type: FETCH_SUCCESS,
    objects
});

export const objectsFetchError = (error) => ({
    type: FETCH_ERROR,
    error
});

export const getObjects = () => (dispatch) => {
    dispatch(objectsFetch());
    fetchObjects()
        .then(objects => dispatch(objectsFetchSuccess(objects)))
        .catch(error => dispatch(objectsFetchError()));
};

import {FETCH_ERROR, FETCH, FETCH_SUCCESS} from '../reducers/objects';

const keyValueArrayToObject = (array) =>
    array.reduce((prev, {Key, Value}) => {
        prev[Key] = Value;
        return prev;
    }, {});

const normalizeData = (data) =>
    data.map(({attributes}) =>
    attributes && keyValueArrayToObject(attributes));

const transformResponseData = (data) =>
    data && normalizeData(data);

const fetchObjects = () => Promise.all([
    fetch('/reestr.json').then(response=>response.json()),
]).then(([{data, totalObjects}]) => ({
    data: transformResponseData(data),
    totalObjects,
    cacheKey: Math.random().toString(36).substring(3)
}));

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
    fetchObjects()
        .then(response => dispatch(objectsFetchSuccess(response)))
        .catch(error => dispatch(objectsFetchError()));
};

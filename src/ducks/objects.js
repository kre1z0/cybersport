import { createAction, createReducer } from 'redux-act';
import {
    fetchObjects,
    createObjectFeature,
    uploadImages,
    deleteObjectFeatures,
} from '../evergis/api';
import { tranformQuery /*, addEmployeeToQuery*/ } from '../evergis/helpers';
import { Record, List } from 'immutable';
import initAttributesArray from '../assets/const/attributes';

const Attribute = Record({
    name: undefined,
    alias: undefined,
    type: undefined,
    editorType: undefined,
    isEditable: undefined,
    sortable: undefined,
    filterable: undefined,
    isVisible: undefined,
});

const ObjectsState = Record({
    totalObjects: undefined,
    data: undefined,
    attributes: undefined,
    loading: undefined,
    error: undefined,
});

const initAttributes = List(initAttributesArray.map(attr => Attribute(attr)));

const initState = new ObjectsState({
    totalObjects: 0,
    data: List([]),
    attributes: initAttributes,
    loading: false,
    error: false,
});

export const fetch = createAction('objects/fetch');
export const fetchSuccess = createAction('objects/fetch-success');
export const fetchError = createAction('objects/fetch-error');

export const updateAttributes = createAction('objects/update-attributes');

export const create = createAction('objects/create');
export const createSuccess = createAction('objects/create-success');
export const createError = createAction('objects/create-error');

export const del = createAction('objects/delete');
export const delSuccess = createAction('objects/delete-success');
export const delError = createAction('objects/delete-error');

export const addObject = (attributes, files) => dispatch => {
    return uploadImages(files || [])
        .then(({ names }) => {
            attributes.image_name = names && names.join(';');
            return createObjectFeature(attributes);
        })
        .then(response => {
            dispatch(create({ attributes, response }));
            // dispatch(createSuccess(response))
        });
};

export const deleteObject = ids => dispatch => {
    dispatch(del());
    return deleteObjectFeatures(ids)
        .then(response => dispatch(delSuccess({ ids })))
        .catch(error => dispatch(delError(error)));
};

export const getObjects = (query = {}) => (dispatch, getState) => {
    dispatch(fetch());
    return fetchObjects(
        /*addEmployeeToQuery(*/ tranformQuery(
            query,
        ) /*, state.user.employee_id)*/,
    )
        .then(objects => dispatch(fetchSuccess(objects)))
        .catch(error => dispatch(fetchError(error)));
};

export default createReducer(
    {
        [fetch]: (state, payload) => state.set('loading', true),

        [fetchSuccess]: (state, { totalObjects, data }) =>
            state
                .set('loading', false)
                .set('error', false)
                .set('totalObjects', totalObjects)
                .set('data', List(data)),

        [fetchError]: (state, payload) =>
            state.set('loading', false).set('error', true),

        [updateAttributes]: (state, payload) =>
            state.set(
                'attributes',
                state.attributes.mergeDeepWith(
                    (oldVal, newVal) =>
                        newVal === undefined ? oldVal : newVal,
                    payload,
                ),
            ), //TODO

        [create]: (state, payload) =>
            state.set(
                'data',
                state.get('data').push({
                    gid: payload.response.Id * 1,
                    ...payload.attributes,
                }),
            ),

        [createSuccess]: (state, payload) => state.set('error', false),

        [createError]: (state, payload) => state.set('error', payload),

        [del]: (state, payload) => state,

        [delSuccess]: (state, { ids }) => {
            const index = state
                .get('data')
                .findIndex(({ gid }) => gid === ids[0]);
            return state
                .set('error', false)
                .set('data', state.get('data').delete(index));
        },
        [delError]: (state, payload) => state.set('error', payload),
    },
    initState,
);
